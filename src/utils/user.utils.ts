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
)
.sort({
    createdAt: -1
})
.lean()
return lastStudent?.id ? lastStudent.id : undefined
}


export const generateStudentId = async (payload: TAcademicSemester) =>{
    let currentId = (0).toString()

    const lastStudentId = await findLastStudentID()
    const lastStudentCode = lastStudentId?.substring(4,6)
    const lastStudentYear = lastStudentId?.substring(0,4)
    const currentStudentCode = payload.code
    const currentStudentYear = payload.year 

    if(lastStudentId && lastStudentCode === currentStudentCode && lastStudentYear === currentStudentYear){
        currentId = lastStudentId.substring(6)
    }

    let incrementID = (Number(currentId)+1).toString().padStart(4,'0')
    incrementID = `${payload.year}${payload.code}${incrementID}`
    return incrementID
}
