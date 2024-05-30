import express from 'express';
import { UserController } from './user.controller';
import { studentValidationSchema } from '../student/student.validation';
import ValidateRequest from '../middleware/ValidateRequest';

const router = express.Router();

router.post('/create-student', ValidateRequest(studentValidationSchema), UserController.CreateStudent);

export const UserRoutes = router;
