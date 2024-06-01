import express from 'express';
import ValidateRequest from '../middleware/ValidateRequest';
import { AcademicSemesterValidations } from './AcademicSemester.validation.z';
import { CreateAcademicSemesterController } from './AcademicSemester.controller';

const router = express.Router();

router.post(
  '/Create-Academic-Semester',
  ValidateRequest(
    AcademicSemesterValidations.AcademicSemesterValidationsSchema,
  ),
  CreateAcademicSemesterController.CreateAcademicSemester,
);

router.get(
  '/Get-Academic-Semester/',
  CreateAcademicSemesterController.getAcademicSemesterData,
);

router.get(
  '/Get-Academic-Semester/:id',
  CreateAcademicSemesterController.getAcademicSemesterSingleData,
);

router.patch(
  '/update-Academic-Semester/:id',
  CreateAcademicSemesterController.UpdateAcademicSemesterSingleData,
);

export const AcademicSemesterRoutes = router;
