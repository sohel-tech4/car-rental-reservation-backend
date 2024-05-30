import { Request, Response } from 'express';
import { UserService } from './user.services';

const CreateStudent = async (req: Request, res: Response) => {
  try {
    const { password, student: StudentData } = req.body;
    const result = await UserService.CreateStudent(password, StudentData);
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Student is not created successfully',
      data: error,
    });
  }
};

export const UserController = {
  CreateStudent,
};
