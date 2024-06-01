import { Request, Response } from 'express';
import { UserService } from './user.services';
import CatchAsync from '../../utils/catchAsync';

const CreateStudent = CatchAsync(async (req: Request, res: Response) => {
    const { password, student: StudentData } = req.body;
    const result = await UserService.CreateStudent(password, StudentData);
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } 
)

export const UserController = {
  CreateStudent,
};
