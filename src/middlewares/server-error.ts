import { Response, NextFunction } from 'express';

export default (err: Response, _req: Request, res: Response, _next: NextFunction) => {
  const code: any = err.status || 500;
  return res.status(code)
    .json({ code: 'internalServerError', message: 'Internal server error' });
};