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

// class AppError extends Error {
//   public statusCode: number;
//   constructor(statusCode: number, )
// }

academicDepartmentSchema.pre('save', async function (next) {
  const isDepartmentExist = await academicDepartment.findOne({
    name: this.name,
  });
  if (isDepartmentExist) {
    throw new Error('Department already exist');
  }
});

academicDepartmentSchema.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery();

  const isDepartmentExist = await academicDepartment.findOne(query);

  if (!isDepartmentExist) {
    throw new Error('This department does not exist');
  }

  next();
});

export const academicDepartment = model<TacademicDepartment>(
  'academicDepartment',
  academicDepartmentSchema,
);
