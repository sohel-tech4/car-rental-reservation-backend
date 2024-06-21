import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { AuthController } from './auth.controller';
import { AuthValidation } from './auth.validation';
import { UserValidation } from '../User/user.validation';

const router = express.Router();

router.post(
  '/signup',
  validateRequest(UserValidation.userValidationSchema),
  AuthController.signUp,
);
router.post(
  '/signin',
  validateRequest(AuthValidation.singInValidationSchema),
  AuthController.signIn,
);

export const AuthRouter = router;
