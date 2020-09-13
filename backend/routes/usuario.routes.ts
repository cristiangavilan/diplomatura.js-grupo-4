import { Router } from 'express';
import {
  crearUsuario,
  getUsuario,
  getUsuarios,
  getUsuarioByID,
  delUsuario,
  updateUsuarioByID,
} from '../controllers/user.controller';
import { validateLogin } from '../middlewares/passport';

const router = Router();

router.post('/user', crearUsuario);
router.get('/user', validateLogin, getUsuario);
router.put('/user/:id', validateLogin, updateUsuarioByID);
router.get('/users', validateLogin, getUsuarios);
router.get('/user/:id', validateLogin, getUsuarioByID);
router.delete('/user/:id', validateLogin, delUsuario);

export default router;
