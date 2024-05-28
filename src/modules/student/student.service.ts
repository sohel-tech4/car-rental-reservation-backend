import { Student } from '../student/student.model';

const getAllStudentfromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const StudentServices = {
  getAllStudentfromDB,
  getSingleStudentFromDB,
};
