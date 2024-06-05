import { TAcademicFaculty } from './academicFaculty.interface';
import { academicFaculty } from './academicFaculty.model';

const createAacademicFacultyIntoDB = async (payload: TAcademicFaculty) => {
  const result = await academicFaculty.create(payload);
  return result;
};

const getAcademicFacultiesFromDB = async () => {
  const result = await academicFaculty.find();
  return result;
};

const getAcademicFacultyFromDB = async (id: string) => {
  const result = academicFaculty.findById(id);
  return result;
};

const updateAcademicFacultyIntoDB = async (
  id: string,
  payload: Partial<TAcademicFaculty>,
) => {
  const result = academicFaculty.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const AcademicFacultyService = {
  createAacademicFacultyIntoDB,
  getAcademicFacultiesFromDB,
  getAcademicFacultyFromDB,
  updateAcademicFacultyIntoDB,
};
