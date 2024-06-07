import z from 'zod';
const academicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic Department must be string',
      required_error: 'Name is required',
    }),
    academicFaculty: z.string({
      invalid_type_error: 'Academic Department must be string',
      required_error: 'Faculty is required',
    }),
  }),
});

const UpdateAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'Academic Department must be string',
        required_error: 'Name is required',
      })
      .optional(),
    academicFaculty: z
      .string({
        invalid_type_error: 'Academic Department must be string',
        required_error: 'Faculty is required',
      })
      .optional(),
  }),
});

export const AcademicFacultyValidation = {
  academicFacultyValidationSchema: academicDepartmentValidationSchema,
  UpdateAcademicDepartmentValidationSchema,
};
