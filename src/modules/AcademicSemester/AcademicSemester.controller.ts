import { Request, Response } from 'express';
import CatchAsync from '../../utils/catchAsync';
import { AcademicSemesterService } from './AcademicSemester.service';

const CreateAcademicSemester = CatchAsync(async (req: Request, res: Response) => {
    const result = await AcademicSemesterService.createAcademicSemesterIntoDB(req.body);
    res.status(200).json({
      success: true,
      message: 'AcademicSemester is created successfully',
      data: result,
    });
  } 
)

export const CreateAcademicSemesterController = {
  CreateAcademicSemester,
};
