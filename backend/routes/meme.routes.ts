import { Router } from 'express';
import { postMeme, getMeme } from '../controllers/meme.controller';
import { validateLogin } from '../middlewares/passport';

const router = Router();

router.post('/meme', validateLogin, postMeme);

router.get('/meme', getMeme);

export default router;
