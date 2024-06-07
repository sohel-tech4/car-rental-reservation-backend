import express from 'express';
import ValidateRequest from '../middleware/ValidateRequest';
import { AcademicDepartmentValidation } from '../academicFaculty/academicFaculty.validation';
import { AcademicFacultyValidation } from './academicDepartment.validation';
import { academicDepartmentController } from './academicDepartment.controller';

const router = express.Router();

router.post(
  '/create-academic-department',
  ValidateRequest(AcademicFacultyValidation.academicFacultyValidationSchema),
  academicDepartmentController.createAcademicDepartment,
);

router.get('/:id', academicDepartmentController.getSingleAcademicDepartment);

router.get('/', academicDepartmentController.getAllAcademicDepartment);

router.patch(
  '/:id',
  ValidateRequest(
    AcademicDepartmentValidation.UpdateAcademicFacultyValidationSchema,
  ),
  academicDepartmentController.updateAcademicDepartment,
);

export const AcademicDepartmentRoutes = router;
