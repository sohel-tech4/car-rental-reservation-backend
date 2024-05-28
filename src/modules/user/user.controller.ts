import { TStudent } from '../student/student.interface';
import { User } from './user.model';

const CreateStudent = async (StudentData: TStudent) => {
  const result = await User.create(StudentData);
  return result;
};

export const UserService = {
  CreateStudent,
};
