import httpStatus from 'http-status';
import CatchAsync from '../../utils/catchAsync';
import { AcademicFacultyService } from './academicFaculty.service';
import sendResponse from '../../utils/sendResponse';

const createAcademicFaculty = CatchAsync(async (req, res) => {
  const result = await AcademicFacultyService.createAcademicFacultyIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty is created successfully',
    data: result,
  });
});

const getAllAcademicFaculty = CatchAsync(async (req, res) => {
  const result = await AcademicFacultyService.getAcademicFacultiesFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculties is retrived successfully',
    data: result,
  });
});

const getSingleAcademicFaculty = CatchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AcademicFacultyService.getAcademicFacultyFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty is retrived successfully',
    data: result,
  });
});

const updateAcademicFaculty = CatchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AcademicFacultyService.updateAcademicFacultyIntoDB(
    id,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty is updated successfully',
    data: result,
  });
});

export const AcademicFacultyController = {
  createAcademicFaculty,
  getAllAcademicFaculty,
  getSingleAcademicFaculty,
  updateAcademicFaculty,
};
