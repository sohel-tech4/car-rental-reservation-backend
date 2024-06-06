import { NextFunction, Request, Response } from 'express';
import CatchAsync from '../../utils/catchAsync';
import { AcademicSemesterService } from './AcademicSemester.service';
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';

const CreateAcademicSemester = CatchAsync(
  async (req: Request, res: Response) => {
    const result = await AcademicSemesterService.createAcademicSemesterIntoDB(
      req.body,
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'AcademicSemester is created successfully',
      data: result,
    });
  },
);

const getAcademicSemesterData = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await AcademicSemesterService.getAcademicSemesterData();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'AcademicSemester Data fetched successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAcademicSemesterSingleData = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { _id } = req.params;
    const result =
      await AcademicSemesterService.getAcademicSemesterSingleData(_id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester single data fetched successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const UpdateAcademicSemesterSingleData = CatchAsync(async (req, res) => {
  const { semesterId } = req.params;
  const result = await AcademicSemesterService.updateAcademicSemesterSingleData(
    semesterId,
    req.body,
  );
  res.status(200).json({
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester is retrieved succesfully',
    data: result,
  });
});

export const CreateAcademicSemesterController = {
  CreateAcademicSemester,
  getAcademicSemesterData,
  getAcademicSemesterSingleData,
  UpdateAcademicSemesterSingleData,
};
