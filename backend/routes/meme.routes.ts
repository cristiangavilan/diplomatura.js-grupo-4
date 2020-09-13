import { Router } from 'express';
import { postMeme, getMemes, getMeme } from '../controllers/meme.controller';
import { validateLogin } from '../middlewares/passport';

const router = Router();

router.post('/meme', validateLogin, postMeme);

router.get('/meme', getMemes);

router.get('/meme/:memeId', getMeme);

export default router;
