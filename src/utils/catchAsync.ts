import { NextFunction, Request, RequestHandler, Response } from 'express';

const CatchAsync = (fnc: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fnc(req, res, next)).catch((err) => next(err));
  };
};

export default CatchAsync;
