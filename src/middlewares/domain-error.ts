import { Request, Response, NextFunction } from 'express';

interface IMapError {
  NotFound: number;
  Conflict: number;
  BadRequest: number;
  Unauthorized: number;
  UnprocessableEntity: number;
}

const errorMap: IMapError = {
  NotFound: 404,
  Conflict: 409,
  BadRequest: 400,
  Unauthorized: 401,
  UnprocessableEntity: 422,
};

export interface IError extends Error {
  code: number | keyof IMapError;
  status?: number;
}

// Na dúvida coloque um console.log('err', err);
export default (err: IError, _req: Request, res: Response, next: NextFunction) => {
  if (!err.code || !errorMap[err.code as keyof IMapError]) return next(err);
  res.status(errorMap[err.code as keyof IMapError]).json({ error: err.message });
};