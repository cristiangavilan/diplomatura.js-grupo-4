import express from 'express';
import bodyParser from 'body-parser';
import memegramDB from './db/config';
//middlewares

import passport from 'passport';
import passportM from './middlewares/passport';

//rutas
import usuarioRoute from './routes/usuario.routes';
import loginRoute from './routes/login.routes';
//import uploadRoute from './routes/upload.routes';

const { API_ENDPOINT, SERVER_PORT } = process.env;

//Inicio la Base de datos & Servidor express
memegramDB.memegramDB();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
passport.use(passportM);

// rutas cargadas
app.use('/', usuarioRoute);
app.use('/', loginRoute);
//app.use('/', uploadRoute);

app.listen(SERVER_PORT, () => {
  console.info(`Example app listening at \x1b[32m${SERVER_PORT}\x1b[0m`);
});

// Para hacer feliz a TS
export {};
