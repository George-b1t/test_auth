import { Router } from 'express';

const router = Router();

import UserController from './app/controllers/UserController';
import Authenticator from './app/controllers/authController';
import authMiddleware from './app/middlewares/authMiddleware';

router
  .get('/allusers', UserController.showAllUsers)
  .get('/users', authMiddleware, UserController.show)
  .post('/login', Authenticator.loginAuthenticate)
  .post('/users', UserController.create)
  .delete('/users', UserController.delete)

export default router;
