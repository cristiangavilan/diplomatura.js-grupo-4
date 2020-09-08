import { Router } from 'express';
import { postCategory, getCategory } from '../controllers/category.controller';
import { validateLogin } from '../middlewares/passport';

const router = Router();

router.post('/category', validateLogin, postCategory);

router.get('/category', validateLogin, getCategory);

export default router;
