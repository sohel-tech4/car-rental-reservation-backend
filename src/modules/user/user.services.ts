import mongoose from 'mongoose';
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

  const admissionSemester = await AcademicSemester.findById(
    StudentData.admissionSemester,
  );

  if (!admissionSemester) {
    throw new Error('Admission semester not found');
  }

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    userData.id = await generateStudentId(admissionSemester);

    //   create a user (Transaction-1)
    const newUser = await User.create([userData], { session });

    if (!newUser.length) {
      throw new Error('Faild to create user');
    }
    StudentData.id = newUser[0].id;
    StudentData.user = newUser[0]._id;

    //   create a Student (Transaction-2)
    const newStudent = await Student.create([StudentData], { session });
    if (!newStudent.length) {
      throw new Error('Faild to create Student');
    }

    await session.commitTransaction();
    await session.endSession();
    return newStudent;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
  }
};

export const UserService = {
  CreateStudent,
};
