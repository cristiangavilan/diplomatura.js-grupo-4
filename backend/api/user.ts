import express from 'express';
import { IUser } from 'memegram-commons/models/User';

const router = express.Router();

router.get('/', (req, res) => {
  const result: IUser = {
    username: 'foo',
    email: 'foo@server.com',
    role: 'user',
  };

  res.json(result);
});

export default router;
