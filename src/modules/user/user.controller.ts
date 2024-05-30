import { UserService } from './user.services';
import CatchAsync from '../../utils/catchAsync';

const CreateStudent = CatchAsync(async (req, res) => {
  try {
    const { password, student: StudentData } = req.body;
    const result = UserService.CreateStudent(password, StudentData);
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
});

export const UserController = {
  CreateStudent,
};
