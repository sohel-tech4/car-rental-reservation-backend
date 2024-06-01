import { Schema, model } from 'mongoose';
import { TAcademicSemester} from './AcademicSemester.interface';
import { AcademicSemesterCode, AcademicSemesterName, Months } from './AcademicSemester.constant';
import { error } from 'console';


const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: { type: String, enum: AcademicSemesterName, required: true },
    code: { type: String, enum: AcademicSemesterCode, required: true },
    year: { type: String, default: true, required: true },
    startMonth: {type: String, enum: Months,required: true},
    endMonth: {type: String,enum: Months, required: true}
  },
  {
    timestamps: true
  }
);

academicSemesterSchema.pre('save', async function(next){
  const isSemesterExists = await AcademicSemester.findOne({
    year: this.year,
    name: this.name
  })
  
  if(isSemesterExists){
    throw new Error('Semester Already Exist')
  }
  next()
})

export const AcademicSemester = model<TAcademicSemester>('AcademicSemester', academicSemesterSchema)