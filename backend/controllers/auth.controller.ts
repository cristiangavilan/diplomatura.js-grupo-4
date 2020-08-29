import express, { Request, Response } from 'express';
import User, { IUserModel } from '../models/User.model';
import { Auth } from '../helpers/jwt';

export const loginUsuario = async (req: Request, res: Response): Promise<Response> => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ msg: 'Es necesario el email y el password para realizar iniciar secion' });
  }

  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(400).json({ msg: 'El email ingresado, no esta asociado a un usuario activo' });
  }
  const isMatch = await user.comparePassword(req.body.password);
  if (isMatch) {
    user.lastLogin = Date.now();
    await user.save();
    return res.status(400).json({
      ok: true,
      token: Auth.generarToken(user),
    });
  }
  return res.status(400).json({
    msg: 'El password ingresado es incorrecto',
  });
};
