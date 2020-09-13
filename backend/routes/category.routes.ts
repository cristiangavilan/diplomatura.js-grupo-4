import { Router } from 'express';
import { postCategory, listCategory } from '../controllers/category.controller';
import { validateLogin } from '../middlewares/passport';

const router = Router();

router.post('/category', validateLogin, postCategory);

router.get('/category', listCategory);

export default router;
