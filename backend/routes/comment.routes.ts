import { Router } from 'express';
import { postComment, getComment } from '../controllers/comment.controller';
import { validateLogin } from '../middlewares/passport';

const router = Router();

router.post('/comment/:memeId', validateLogin, postComment);

router.get('/comment/:memeId', getComment);

export default router;
