import { Request, Response, NextFunction } from 'express';
import { IError, IMapError } from '../interfaces';

export const errorMap: IMapError = {
  NotFound: 404,
  Conflict: 409,
  BadRequest: 400,
  Unauthorized: 401,
  UnprocessableEntity: 422,
};

export default (err: IError, _req: Request, res: Response, next: NextFunction) => {
  if (!err.code || !errorMap[err.code as keyof IMapError]) return next(err);
  res.status(errorMap[err.code as keyof IMapError]).json({ error: err.message });
};
