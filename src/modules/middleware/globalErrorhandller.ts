import { Request, Response } from 'express';

const globalErrorHandller = (err: any, req: Request, res: Response) => {
  const statusCode = 500;
  const message = err.message || 'Somthing went wrong';

  return res.status(statusCode).json({
    success: false,
    message,
    error: err,
  });
};

export default globalErrorHandller;
