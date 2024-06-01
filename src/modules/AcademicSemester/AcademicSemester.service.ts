import CatchAsync from "../../utils/catchAsync";
import { AcademicSemesterNameCodeMapper } from "./AcademicSemester.constant";
import { TAcademicSemester } from "./AcademicSemester.interface";
import { AcademicSemester } from "./AcademicSemester.model";

const createAcademicSemesterIntoDB = async(payload: TAcademicSemester)=>{

    if(AcademicSemesterNameCodeMapper[payload.name]!==payload.code){
        throw new Error('Invalid Code')
    }

    const result = await AcademicSemester.create(payload)  
    return result
}

const getAcademicSemesterData = async()=>{
    const result = await AcademicSemester.find()
    return result
}

export const AcademicSemesterService = {
    createAcademicSemesterIntoDB,
    getAcademicSemesterData
}