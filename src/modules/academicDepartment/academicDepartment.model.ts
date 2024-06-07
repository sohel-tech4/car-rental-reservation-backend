import { Schema, model } from 'mongoose';
import { TacademicDepartment } from './academicDepartment.interface';

const academicDepartmentSchema = new Schema<TacademicDepartment>(
  {
    name: { type: String, required: true, unique: true },
    academicFaculty: { type: Schema.Types.ObjectId, ref: 'academicFaculty' },
  },
  {
    timestamps: true,
  },
);

academicDepartmentSchema.pre('save', async function (next) {
  const isDepartmentExist = await academicDepartment.findOne({
    name: this.name,
  });
  if (isDepartmentExist) {
    throw new Error('Department already exist');
  }
});

export const academicDepartment = model<TacademicDepartment>(
  'academicDepartment',
  academicDepartmentSchema,
);
