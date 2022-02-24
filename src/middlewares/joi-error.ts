import { Request, Response, NextFunction } from 'express';
import { ValidationError } from 'joi';
import type { IMapErrorJoi } from '../interfaces';

const mapErro: IMapErrorJoi = {
  'any.required': 400,
  'array.base': 422,
  'array.includesRequiredUnknowns': 422,
  'number.base': 422,
  'number.min': 422,
  'string.base': 422,
  'string.min': 422,
  'string.length': 400,
  'string.empty': 400,
};

export default (err: ValidationError, _req: Request, res: Response, next: NextFunction) => {
  if (!err.isJoi) return next(err);

  const status = mapErro[err.details[0].type as keyof IMapErrorJoi];
  return res.status(status || 422)
    .json({ error: `${err.details[0].message.replace(/"/g, '')}` });
};
