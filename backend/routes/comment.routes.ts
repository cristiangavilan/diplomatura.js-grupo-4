import { Router } from 'express';
import { postComment, getComment } from '../controllers/comment.controller';
import { validateLogin } from '../middlewares/passport';

const router = Router();

router.post('/comment', validateLogin, postComment);

router.get('/comment', validateLogin, getComment);

export default router;
