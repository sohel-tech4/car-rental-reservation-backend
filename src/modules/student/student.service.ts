import { CLIENT_RENEG_LIMIT } from 'tls';
import { Student } from '../student/student.model';

const getAllStudentfromDB = async (query: Record<string, unknown>) => {
  
  const studentSearchableFields = ['name', 'firstName', 'email']

  const queryObj = {...query}

  console.log('base code', query)

  let searchTerm = ''

  if(query?.searchTerm){
    searchTerm = query?.searchTerm as string
  }

  const searchQuery = Student.find({
    $or: studentSearchableFields.map((field)=>({
      [field]: {$regex: searchTerm, $options: 'i' }
    }))
  })


  const excludesField = ['searchTerm']

  excludesField.forEach(el => delete queryObj[el])

  const result = await searchQuery
    .find(queryObj)
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
