import config from '../../config';
import { generateStudentId } from '../../utils/user.utils';
import { AcademicSemester } from '../AcademicSemester/AcademicSemester.model';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';

const CreateStudent = async (password: string, StudentData: TStudent) => {
  const userData: Partial<TUser> = {};
  // if psswrd is not given, use default password
  userData.password = password || (config.default_password as string);

  //   set student role
  userData.role = 'student';


  const admissionSemester = await AcademicSemester.findById(StudentData.admissionSemester)

  if (!admissionSemester) {
    throw new Error('Admission semester not found');
  }

  userData.id = await generateStudentId(admissionSemester)

  //   create a user
  const newUser = await User.create(userData);

  if (Object.keys(newUser).length) {
    StudentData.id = newUser.id;
    StudentData.user = newUser._id;
    const newStudent = await Student.create(StudentData);
    return newStudent;
  }
};

export const UserService = {
  CreateStudent,
};
