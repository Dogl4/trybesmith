import { Request, Response, NextFunction } from 'express';

interface IMapError<T> {
  'any.required': T;
  'string.base': number,
  'string.min': number;
  'number.min': number;
  'string.length': number;
  'string.empty': number;
}

const mapErro: IMapError<number> | any = {
  'any.required': 400,
  'string.base': 422,
  'string.min': 422,
  'number.min': 422,
  'string.length': 400,
  'string.empty': 400,
};

export default (err: any, _req: Request, res: Response, next: NextFunction) => {
  console.log('errJoi', err);

  if (!err.isJoi) return next(err);

  const status: number = mapErro[err.details[0].type];
  return res.status(status).json({ error: `${err.details[0].message.replace(/"/g, '')}` });
};
