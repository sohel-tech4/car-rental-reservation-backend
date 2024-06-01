import { AcademicSemesterNameCodeMapper } from './AcademicSemester.constant';
import { TAcademicSemester } from './AcademicSemester.interface';
import { AcademicSemester } from './AcademicSemester.model';

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  if (AcademicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid Code');
  }
  const result = await AcademicSemester.create(payload);
  return result;
};

const getAcademicSemesterData = async () => {
  const result = await AcademicSemester.find();
  return result;
};

const getAcademicSemesterSingleData = async (id: string) => {
  const result = await AcademicSemester.findOne({ id });
  return result;
};

const updateAcademicSemesterSingleData = async (
  id: string,
  payload: Partial<TAcademicSemester>,
) => {
  if (
    payload.name &&
    payload.code &&
    AcademicSemesterNameCodeMapper[payload.name] !== payload.code
  ) {
    throw new Error('Invalid Semester Code');
  }

  const result = await AcademicSemester.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const AcademicSemesterService = {
  createAcademicSemesterIntoDB,
  getAcademicSemesterData,
  getAcademicSemesterSingleData,
  updateAcademicSemesterSingleData,
};
