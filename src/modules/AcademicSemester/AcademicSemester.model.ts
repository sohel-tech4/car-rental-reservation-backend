import { Schema, model } from 'mongoose';
import { TAcademicSemester} from './AcademicSemester.interface';
import { AcademicSemesterCode, AcademicSemesterName, Months } from './AcademicSemester.constant';


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