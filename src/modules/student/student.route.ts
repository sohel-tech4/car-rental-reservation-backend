import express from 'express';
import { studentController } from './student.controller';

const router = express.Router();

router.get('/:studentId', studentController.getSingleStudent);

router.get('/', studentController.getAllStudent);

export const StudentRoutes = router;