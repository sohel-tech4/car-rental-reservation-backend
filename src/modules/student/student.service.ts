import { StudentModel } from '../student.module';

const getAllStudentfromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const StudentServices = {
  getAllStudentfromDB,
  getSingleStudentFromDB,
};
