import { z } from "zod";
import { AcademicSemesterCode, AcademicSemesterName, Months } from "./AcademicSemester.constant";

const AcademicSemesterValidationsSchema = z.object({
    body: z.object({
        name: z.enum([...AcademicSemesterName as [string, ...string[]]]),
        code: z.enum([...AcademicSemesterCode as [string, ...string[]]]),
        year: z.string(),
        startMonth: z.enum([...Months as [string, ...string[]]]),
        endMonth: z.enum([...Months as [string, ...string[]]]),       
})
})

const updateAcademicSemesterValidationsSchema = z.object({
    body: z.object({
        name: z.enum([...AcademicSemesterName as [string, ...string[]]]).optional(),
        code: z.enum([...AcademicSemesterCode as [string, ...string[]]]).optional(),
        year: z.string().optional(),
        startMonth: z.enum([...Months as [string, ...string[]]]).optional(),
        endMonth: z.enum([...Months as [string, ...string[]]]).optional(),       
})
})

export const AcademicSemesterValidations = {
    AcademicSemesterValidationsSchema,
    updateAcademicSemesterValidationsSchema
}