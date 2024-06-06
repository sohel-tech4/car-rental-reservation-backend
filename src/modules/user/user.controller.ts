import { Request, Response } from 'express';
import { UserService } from './user.services';
import CatchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const CreateStudent = CatchAsync(async (req: Request, res: Response) => {
  const { password, student: StudentData } = req.body;
  const result = await UserService.CreateStudent(password, StudentData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is created successfully',
    data: result,
  });
});

export const UserController = {
  CreateStudent,
};
