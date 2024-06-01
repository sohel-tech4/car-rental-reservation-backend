import { TAcademicSemester } from "./AcademicSemester.interface";
import { AcademicSemester } from "./AcademicSemester.model";

const createAcademicSemesterIntoDB = async(payload: TAcademicSemester)=>{
    const result = await AcademicSemester.create(payload)
    return result
}

export const AcademicSemesterService = {
    createAcademicSemesterIntoDB
}