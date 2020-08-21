import express from 'express';
import { IUser } from '../../src/types/models/User';

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
