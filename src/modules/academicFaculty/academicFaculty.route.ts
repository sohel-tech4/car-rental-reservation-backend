import express from 'express';
import ValidateRequest from '../middleware/ValidateRequest';
import { AcademicFacultyValidation } from './academicFaculty.validation';
import { AcademicFacultyController } from './academicFaculty.controller';
const router = express.Router();

router.post(
  'create-academic-faculty',
  ValidateRequest(AcademicFacultyValidation.academicFacultyValidationSchema),
  AcademicFacultyController.createAacademicFaculty,
);
