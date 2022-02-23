import { Request, Response, NextFunction } from 'express';

interface IMapError {
  NotFound: number;
  Conflict: number;
  BadRequest: number;
  Unauthorized: number;
  UnprocessableEntity: number;
}

const errorMap: IMapError | any = {
  NotFound: 404,
  Conflict: 409,
  BadRequest: 400,
  Unauthorized: 401,
  UnprocessableEntity: 422,
};

// Na dúvida coloque um console.log('err', err);
export default (err: any, _req: Request, res: Response, next: NextFunction) => {
  if (!err.code || !errorMap[err.code]) return next(err);
  res.status(errorMap[err.code]).json({ error: err.message });
};