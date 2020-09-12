import { Router } from 'express';
import { loginUsuario, googleSingIn } from '../controllers/auth.controller';

const router = Router();

router.post('/login', loginUsuario);

router.post('/login/google', googleSingIn);

export default router;
