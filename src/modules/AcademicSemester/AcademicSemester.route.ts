import express from 'express';
import { CreateAcademicSemesterController } from './AcademicSemester.Controller';
import ValidateRequest from '../middleware/ValidateRequest';
import { AcademicSemesterValidations } from './AcademicSemester.validation.z';

const router = express.Router();

router.post('/Create-Academic-Semester', ValidateRequest(AcademicSemesterValidations.AcademicSemesterValidationsSchema), CreateAcademicSemesterController.CreateAcademicSemester)

export const AcademicSemesterRoutes = router;