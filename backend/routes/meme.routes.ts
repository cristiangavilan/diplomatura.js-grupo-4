import { Router } from 'express';
import { postMeme, getMemes, getMeme, voteDownMeme, voteUpMeme } from '../controllers/meme.controller';
import { validateLogin } from '../middlewares/passport';

const router = Router();

router.post('/meme', validateLogin, postMeme);

router.get('/meme', getMemes);

router.get('/meme/:memeId', getMeme);

router.get('/meme/:memeId/voteUp', validateLogin, voteUpMeme);
router.get('/meme/:memeId/voteDown', validateLogin, voteDownMeme);

export default router;
