import express from 'express';
import bodyParser from 'body-parser';
import apiRouter from './api';
import { API_ENDPOINT, SERVER_PORT } from 'memegram-commons/config';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(API_ENDPOINT + '/', apiRouter);

app.listen(SERVER_PORT, () => {
  console.info(`Example app listening at ${SERVER_PORT}`);
});

// Para hacer feliz a TS
export {};
