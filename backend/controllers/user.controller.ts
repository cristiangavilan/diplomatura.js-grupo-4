import { Request, Response } from 'express';
import { User } from '../models/User.model';

export const crearUsuario = async (req: Request, res: Response) => {
  if (!req.body) {
    return res.status(400).json({ msg: 'Debes completar el formulario' });
  }
  const usuarioNuevo = new User(req.body);
  try {
    await usuarioNuevo.save();
    return res.status(200).json({
      ok: true,
      msg: 'Usuario Creado',
      usuarioNuevo,
    });
  } catch (error) {
    return res.status(400).json({
      ok: false,
      msg: 'Verificar los datos enviados',
      error,
    });
  }
};

export const updateUsuarioByID = async (req: Request, res: Response) => {
  try {
    const usuarioDB = req.session?.user;

    if (!usuarioDB) {
      return res.status(404).json({
        ok: false,
        msg: 'No existe un usuario por ese id',
      });
    }

    // Actualizaciones
    const { password, google, email, username, ...campos } = req.body;

    if (usuarioDB.email !== email) {
      const existeEmail = await User.findOne({ email });
      if (existeEmail) {
        return res.status(400).json({
          ok: false,
          msg: 'Ya existe un usuario con ese email',
        });
      }
    }
    if (usuarioDB.username !== username) {
      const existeusername = await User.findOne({ username });
      if (existeusername) {
        return res.status(400).json({
          ok: false,
          msg: 'Ya existe un usuario con ese Nombre de Usuario',
        });
      }
    }
    if (!usuarioDB.google) {
      campos.email = email;
    } else if (usuarioDB.email !== email) {
      return res.status(400).json({
        ok: false,
        msg: 'Usuario de google no pueden cambiar su correo',
      });
    }

    const usuarioActualizado = await User.findByIdAndUpdate(usuarioDB._id, campos, { new: true });

    res.json({
      ok: true,
      usuario: usuarioActualizado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Error inesperado',
    });
  }
};

export const getUsuarios = async (req: Request, res: Response) => {
  const usuarios = await User.find();
  return res.status(200).json({
    ok: true,
    usuarios,
  });
};

export const getUsuarioByID = async (req: Request, res: Response) => {
  let id = req.params.id;
  try {
    const usuario = await User.findById(id);
    return res.status(200).json({
      ok: true,
      usuario,
    });
  } catch (error) {
    return res.status(200).json({
      ok: true,
      msg: 'Verificar los datos enviados',
      error,
    });
  }
};

export const delUsuario = async (req: Request, res: Response) => {
  let id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    return res.status(200).json({
      ok: true,
      msg: 'El usuario se elimino correctamente',
    });
  } catch (error) {
    return res.status(200).json({
      ok: true,
      msg: 'Verificar los datos enviados',
      error,
    });
  }
};
