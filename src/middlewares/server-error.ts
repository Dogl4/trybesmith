import { Response, NextFunction } from 'express';
import type { IError } from './domain-error';

export default (err: IError, _req: Request, res: Response, _next: NextFunction) => {
  const code = err.status || 500;
  return res.status(code)
    .json({ code: 'internalServerError', message: 'Internal server error' });
};
