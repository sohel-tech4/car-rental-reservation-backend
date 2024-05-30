import { Schema, model } from 'mongoose';
import { TAcademicSemester, TMonths, TAcademicSemesterName, TAcademicSemesterCode} from './AcademicSemester.interface';


const Months : TMonths[] = ["January", "February", "March" , "April" , "May" , "June", "July" , "August" , "September" , "October" , "November" , "December"]
const AcademicSemesterName : TAcademicSemesterName[] = ["Autumn", "Summer", "Fall"]
const AcademicSemesterCode : TAcademicSemesterCode[] = ["01", "02", "03"]


const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: { type: String, enum: AcademicSemesterName, required: true },
    code: { type: String, enum: AcademicSemesterCode, required: true },
    year: { type: Date, default: true, required: true },
    startMonth: {type: String, enum: Months,required: true},
    endMonth: {type: String,enum: Months, required: true}
  },
  {
    timestamps: true
  }
);

export const AcademicSemester = model<TAcademicSemester>('AcademicSemester', academicSemesterSchema)