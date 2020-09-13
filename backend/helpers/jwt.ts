import jwt from 'jsonwebtoken';
import { IUserBase } from 'memegram-commons/models/User.model';
const JWTKEY = process.env.JWTKEY;

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
      },
      `${JWTKEY}`,
      {
        expiresIn: this.expiresIn,
      }
    );
  }
}
