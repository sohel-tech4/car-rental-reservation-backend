import { TAcademicSemester } from "../modules/AcademicSemester/AcademicSemester.interface";
import { User } from "../modules/user/user.model";

const findLastStudentID = async () =>{
    const lastStudent = await User.findOne({
        role: 'student'
    },
{
    id: 1,
    _id: 0
}
).lean()
return lastStudent?.id ? lastStudent.id.substring(6) : undefined
}


export const generateStudentId = async (payload: TAcademicSemester) =>{
    const currentId = await findLastStudentID() || (0).toString()
    let incrementID = Number((currentId)+1).toString().padStart(4,'0')
    incrementID = `${payload.year} ${payload.code} ${incrementID}`
    return incrementID
}
