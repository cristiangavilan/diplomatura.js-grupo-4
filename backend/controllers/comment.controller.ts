import { Request, Response } from 'express';
import Comment from '../models/Comment.model';

export const postComment = async (req: Request, res: Response) => {
  if (!req.body) {
    return res.status(400).json({ msg: 'Debes completar el formulario' });
  }
  const newComment = new Comment(req.body);
  try {
    await newComment.save();
    return res.status(200).json({
      ok: true,
      msg: 'Usuario Creado',
      newComment,
    });
  } catch (error) {
    return res.status(400).json({
      ok: false,
      msg: 'Verificar los datos enviados',
      error,
    });
  }
};

export const getComment = async (req: Request, res: Response) => {
  let desde = req.query.desde || 0; //variable que espera un valor para paginar
  desde = Number(desde); //fuerzo que sea numero

  Comment.find({}, ' ') //pido lo que quiero ver
    .skip(desde) //salta el valor desde (muestra el valor desde ej 10 muestra desde el 11)
    .limit(30)
    .populate('user') // ('user','name email _id') despues de la coma puedo solicar lo que quiero ver
    .exec((err, Comments) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          mensaje: 'Error al cargar la persona',
          errors: err,
        });
      }
      Comment.count({}, (err, conteo) => {
        if (err) {
          return res.status(500).json({
            ok: false,
            mensaje: 'Error al realizar el conteo',
            errors: err,
          });
        }
        res.status(200).json({
          ok: true,
          comments: Comments,
          total: conteo,
        });
      });
    });
};

export const updateComment = async (req: Request, res: Response) => {};
