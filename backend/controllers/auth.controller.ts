import { Request, Response } from 'express';
import { User } from '../models/User.model';
import { Auth } from '../helpers/jwt';
import { IApiUserLogin } from 'memegram-commons/models/User.model';
import { googleVerify } from '../helpers/google-verify';

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

    return res.json({
      ok: true,
      user,
      token: Auth.generarToken(user),
    } as IApiUserLogin);
  }

  return res.status(400).json({
    msg: 'El password ingresado es incorrecto',
  });
};

export const googleSingIn = async (req: Request, res: Response) => {
  const gooleToken = req.body.token;

  try {
    const googleResponse = await googleVerify(gooleToken);

    if (!googleResponse) {
      return res.sendStatus(403);
    }

    const { email, name, picture } = googleResponse;
    const userDB = await User.findOne({ email });
    let user;

    if (!userDB) {
      // si no existe el usuario
      user = new User({
        username: name,
        email,
        password: '@@@',
        img: picture,
        google: true,
      });
    } else {
      // existe usuario
      user = userDB;
      user.google = true;
    }

    // Guardar en DB
    await user.save();

    res.json({
      ok: true,
      msg: 'Google SingIn',
      token: Auth.generarToken(user),
      user,
    } as IApiUserLogin);
  } catch (error) {
    res.sendStatus(401);
  }
};
