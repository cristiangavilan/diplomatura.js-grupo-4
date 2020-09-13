import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import memegramDB from './db/config';

//middlewares

import passport from 'passport';
import passportM from './middlewares/passport';

//rutas
import reactRoutes from './routes/react.routes';
import errorsRoutes from './routes/errors.routes';
import usuarioRoute from './routes/usuario.routes';
import loginRoute from './routes/login.routes';
import { User } from './models/User.model';
import { IUserBase } from 'memegram-commons/models/User.model';
import memeRoute from './routes/meme.routes';
import commentsRoute from './routes/comment.routes';
import categoryRoute from './routes/category.routes';

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const { API_ENDPOINT, SERVER_PORT } = process.env;

const baseApi = API_ENDPOINT || '/api';

declare global {
  namespace Express {
    interface Request {
      session?: {
        user: IUserBase;
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
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cors(corsOptions));
  app.use(passport.initialize());
  app.use(passport.session());
  passport.use(passportM);

  passport.serializeUser((user: IUserBase, done) => {
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
  app.use(baseApi, memeRoute);
  app.use(baseApi, commentsRoute);
  app.use(baseApi, categoryRoute);
  app.use(reactRoutes);
  app.use(errorsRoutes);

  app.listen(parseInt(SERVER_PORT || '3000'), () => {
    console.info(`Server listening at \x1b[32m${SERVER_PORT}\x1b[0m`);
  });
})().catch((err) => {
  console.error(err);
  process.exit(1);
});

// Para hacer feliz a TS
export {};
