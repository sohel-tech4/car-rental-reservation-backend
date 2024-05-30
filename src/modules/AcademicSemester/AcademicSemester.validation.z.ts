import { z } from "zod";

const AcademicSemesterValidations = z.object({
    body: z.object({
        name: z.enum(["Autumn", "Summer", "Fall"]),
        
})
})