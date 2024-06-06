import httpStatus from 'http-status';
import CatchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { StudentServices } from './student.service';

const getAllStudent = CatchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentfromDB;
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is created successfully',
    data: result,
  });
});

const getSingleStudent = CatchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.getSingleStudentFromDB(studentId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is retrievd successfully',
    data: result,
  });
});

export const studentController = {
  getAllStudent,
  getSingleStudent,
};
