import { Request, Response } from 'express';
import Meme from '../models/Meme.model';

export const getMeme = async (req: Request, res: Response) => {
  let desde = req.query.desde || 1;
  let hasta = req.query.hasta || 20; //variable que espera un valor para paginar
  desde = Number(desde); //fuerzo que sea numero
  hasta = Number(hasta);
  Meme.find({}, ' ') //pido lo que quiero ver
    .skip(desde) //salta el valor desde (muestra el valor desde ej 10 muestra desde el 11)
    .limit(hasta)
    .populate('category')
    .populate('user')
    .populate('comment')
    .exec((err, memes) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          mensaje: 'Error al cargar la persona',
          errors: err,
        });
      }
      Meme.count({}, (err, conteo) => {
        if (err) {
          return res.status(500).json({
            ok: false,
            mensaje: 'Error al realizar el conteo',
            errors: err,
          });
        }
        res.status(200).json({
          ok: true,
          memes: memes,
          total: conteo,
        });
      });
    });
};

export const postMeme = async (req: Request, res: Response) => {
  if (!req.body) {
    return res.status(400).json({ msg: 'Debes completar el formulario' });
  }
  const newMeme = new Meme(req.body);
  try {
    await newMeme.save();
    return res.status(200).json({
      ok: true,
      msg: 'Meme Creado',
      newMeme,
    });
  } catch (error) {
    return res.status(400).json({
      ok: false,
      msg: 'Verificar los datos enviados',
      error,
    });
  }
};
export const delMeme = async (req: Request, res: Response) => {};

export const updateMeme = async (req: Request, res: Response) => {};
