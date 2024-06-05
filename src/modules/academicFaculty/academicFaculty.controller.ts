import httpStatus from 'http-status';
import CatchAsync from '../../utils/catchAsync';
import { AcademicFacultyService } from './academicFaculty.service';

const createAacademicFaculty = CatchAsync(async (req, res) => {
  const result = AcademicFacultyService.createAacademicFacultyIntoDB(req.body);

  res.status(200).json({
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty is created successfully',
    data: result,
  });
});

const getAllAcademicFaculty = CatchAsync(async (req, res) => {
  const result = await AcademicFacultyService.getAcademicFacultiesFromDB();
  res.status(500).json({
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculties is retrived successfully',
    data: result,
  });
});

const getSingleAcademicFaculty = CatchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AcademicFacultyService.getAcademicFacultyFromDB(id);
  res.status(500).json({
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
  res.status(500).json({
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty is updated successfully',
    data: result,
  });
});

export const AcademicFacultyController = {
  createAacademicFaculty,
  getAllAcademicFaculty,
  getSingleAcademicFaculty,
  updateAcademicFaculty,
};
