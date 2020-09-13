import jwt from 'jsonwebtoken';
import { IUserBase } from 'memegram-commons/models/User.model';
import { Request } from 'express';
const JWTKEY = process.env.JWTKEY;

export interface IAuthUser {
  id: string;
  username: string;
  email: string;
}

export class Auth {
  /**
   *  TTL JWT Token
   *  @var expiresIn {number}
   *
   * @memberOf Auth
   */

  static expiresIn = 60 * 60 * 24 * 2; /* 2 días */

  /**
   * Version  del token. .
   * Solo posee el id
   */

  // Crea el token con los datos de sesión

  static generarToken(user: IUserBase) {
    return jwt.sign(
      {
        id: user._id,
        username: user.username,
        email: user.email,
      } as IAuthUser,
      `${JWTKEY}`,
      {
        expiresIn: this.expiresIn,
      }
    );
  }

  static decodeToken(req: Request): IAuthUser | undefined {
    /* 
    {
      id: '5f5c62cca019172c28fc9b5c',
      username: 'maria jose rotter',
      email: 'mariajoserotter@fi.uncoma.edu.ar',
      iat: 1600007574,
      exp: 1600180374
      }
    */
    const auth = req.headers?.authorization;

    if (auth) {
      const token = auth.split(' ')[1];
      return jwt.decode(token) as IAuthUser;
    }
  }
}
