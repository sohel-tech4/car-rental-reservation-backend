import AppError from '../../error/AppError';
import httpStatus from 'http-status';
import { TSignInUser } from './auth.interface';
import config from '../../config';
import { User } from '../User/user.model';
import { TUser } from '../User/user.interface';
import jwt from 'jsonwebtoken';

const createSignUp = async (userData: TUser) => {
  const existingUser = await User.findOne({ email: userData.email });
  if (existingUser) {
    throw new AppError(httpStatus.NOT_FOUND, 'User already Exists!!');
  }
  const newUser = new User(userData);
  const result = await newUser.save();
  return result;
};

const createSignIn = async (payload: TSignInUser) => {
  const user = await User.isUserExitsByEmail(payload.email);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not Found');
  }

  if (!(await User.isPasswordMatched(payload?.password, user.password))) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched!!');
  }
  const jwtPaylod = {
    userEmail: user.email,
    role: user.role,
  };

  const accessToken = jwt.sign(jwtPaylod, config.jwt_access_secret as string, {
    expiresIn: '20d',
  });
  return {
    user,
    accessToken: `Bearer ${accessToken}`,
  };
};

export const AuthService = {
  createSignUp,
  createSignIn,
};
