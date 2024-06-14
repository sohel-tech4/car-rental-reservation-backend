import { Student } from '../student/student.model';

const getAllStudentfromDB = async () => {
  const result = await Student.find()
    .populate('admissionSemester')
    .populate({
      path: 'academicSemester',
      populate: {
        path: 'academicFaculty',
      },
    });
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findById({ id })
    .populate('admissionSemester')
    .populate({
      path: 'academicSemester',
      populate: {
        path: 'academicFaculty',
      },
    });
  return result;
};

export const StudentServices = {
  getAllStudentfromDB,
  getSingleStudentFromDB,
};
