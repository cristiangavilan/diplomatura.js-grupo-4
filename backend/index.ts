import express from 'express';
import bodyParser from 'body-parser';
import memegramDB from './db/config';
//middlewares

import passport from 'passport';
import passportM from './middlewares/passport';

//rutas
import usuarioRoute from './routes/usuario.routes';
import loginRoute from './routes/login.routes';
import { IUserModel, User } from './models/User.model';

const { API_ENDPOINT, SERVER_PORT } = process.env;

const baseApi = API_ENDPOINT || '/api';

declare global {
  namespace Express {
    interface Request {
      session?: {
        user: IUserModel;
      };
    }
  }
}

interface UserSession {
  userId: any;
}

(async () => {
  //Inicio la Base de datos & Servidor express
  await memegramDB.memegramDB();
  const app = express();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(passport.initialize());
  app.use(passport.session());
  passport.use(passportM);

  passport.serializeUser((user: IUserModel, done) => {
    done(null, {
      userId: user._id,
    } as UserSession);
  });

  passport.deserializeUser(async (data: UserSession, done) => {
    const user = await User.findById(data.userId);
    done(null, user);
  });

  // rutas cargadas
  app.use(baseApi, usuarioRoute);
  app.use(baseApi, loginRoute);

  app.listen(parseInt(SERVER_PORT || '3000'), () => {
    console.info(`Server listening at \x1b[32m${SERVER_PORT}\x1b[0m`);
  });
})().catch((err) => {
  console.error(err);
  process.exit(1);
});

// Para hacer feliz a TS
export {};
