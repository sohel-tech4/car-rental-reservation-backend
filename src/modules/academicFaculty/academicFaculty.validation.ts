import z from 'zod';
const academicFacultyValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic faculty must be string',
    }),
  }),
});

const UpdateAcademicFacultyValidationSchema = z.object({
  body: z
    .object({
      name: z.string({
        invalid_type_error: 'Academic faculty must be string',
      }),
    })
    .optional(),
});

export const AcademicFacultyValidation = {
  academicFacultyValidationSchema,
  UpdateAcademicFacultyValidationSchema,
};
