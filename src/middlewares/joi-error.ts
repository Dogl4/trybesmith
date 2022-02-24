import { Request, Response, NextFunction } from 'express';
import { ValidationError } from 'joi';

interface IMapError {
  'any.required': number;
  'string.base': number;
  'string.min': number;
  'number.min': number;
  'string.length': number;
  'string.empty': number;
}

const mapErro: IMapError = {
  'any.required': 400,
  'string.base': 422,
  'string.min': 422,
  'number.min': 422,
  'string.length': 400,
  'string.empty': 400,
};

export default (err: ValidationError, _req: Request, res: Response, next: NextFunction) => {
  if (!err.isJoi) return next(err);

  const status = mapErro[err.details[0].type as keyof IMapError];
  return res.status(status).json({ error: `${err.details[0].message.replace(/"/g, '')}` });
};
