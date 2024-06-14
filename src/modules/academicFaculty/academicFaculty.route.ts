import express from 'express';
import ValidateRequest from '../middleware/ValidateRequest';
import { AcademicFacultyController } from './academicFaculty.controller';
import { AcademicFacultyValidation } from '../academicDepartment/academicDepartment.validation';
const router = express.Router();

router.post(
  '/create-academic-faculty',
  // ValidateRequest(AcademicFacultyValidation.academicFacultyValidationSchema),
  AcademicFacultyController.createAcademicFaculty,
);

router.get('/:id', AcademicFacultyController.getSingleAcademicFaculty);

router.get('/', AcademicFacultyController.getAllAcademicFaculty);

router.patch(
  '/:id',
  ValidateRequest(
    AcademicFacultyValidation.UpdateAcademicDepartmentValidationSchema,
  ),
  AcademicFacultyController.updateAcademicFaculty,
);

export const AcademicFacultyRoutes = router;
