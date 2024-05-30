import express, { NextFunction, Request, Response } from 'express';
import { UserController } from './user.controller';

const router = express.Router();

const ArmyPerson = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body);
  next();
};

router.post('/create-student', ArmyPerson, UserController.CreateStudent);

export const UserRoutes = router;
