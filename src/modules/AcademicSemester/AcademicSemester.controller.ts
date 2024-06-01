import { NextFunction, Request, Response } from 'express';
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

const getAcademicSemesterData = async (req: Request, res: Response, next: NextFunction) => {
  try {
      const result: any = await AcademicSemesterService.getAcademicSemesterData();
      res.status(200).json({
          success: true,
          message: 'AcademicSemester Data fetched successfully!',
          data: result,
      });
  } catch (error) {
      next(error);  // Ensure errors are passed to the next middleware
  }
};


export const CreateAcademicSemesterController = {
  CreateAcademicSemester,
  getAcademicSemesterData
};
