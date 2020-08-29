import { Router } from 'express';
import passport from 'passport';
import {
  crearUsuario,
  getUsuarios,
  getUsuarioByID,
  delUsuario,
  updateUsuarioByID,
} from '../controllers/user.controller';

const router = Router();

router.post('/user', crearUsuario);
router.put('/user/:id', passport.authenticate('jwt', { session: false }), updateUsuarioByID);
router.get('/users', passport.authenticate('jwt', { session: false }), getUsuarios);
router.get('/user/:id', passport.authenticate('jwt', { session: false }), getUsuarioByID);
router.delete('/user/:id', passport.authenticate('jwt', { session: false }), delUsuario);

export default router;
