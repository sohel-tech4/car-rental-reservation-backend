import { TacademicDepartment } from './academicDepartment.interface';
import { academicDepartment } from './academicDepartment.model';

const createAcademicDepartmentIntoDB = async (payload: TacademicDepartment) => {
  const result = await academicDepartment.create(payload);
  return result;
};

const getAllAcademicDepartmentFromDB = async () => {
  const result = await academicDepartment.find().populate('academicFaculty');
  return result;
};

const getSingleAcademicDepartmentFromDB = async (id: string) => {
  const result = await academicDepartment
    .findById(id)
    .populate('academicFaculty');
  return result;
};

const updateAcademicDepartmentIntoDB = async (
  id: string,
  payload: Partial<TacademicDepartment>,
) => {
  const result = await academicDepartment.findByIdAndUpdate(
    { _id: id },
    payload,
    { new: true },
  );
  return result;
};

export const academicDepartmentServices = {
  createAcademicDepartmentIntoDB,
  getAllAcademicDepartmentFromDB,
  getSingleAcademicDepartmentFromDB,
  updateAcademicDepartmentIntoDB,
};
