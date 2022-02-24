import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import type { IProduct } from '../interfaces';

const productSchema = Joi.object().keys({
  Name: Joi.string().min(3).required()
    .messages({ 'string.min': 'Name must be longer than 2 characters' }),
  Amount: Joi.string().min(2).required()
    .messages({ 'string.min': 'Amount must be longer than 2 characters' }),
});

export default (req: Request, _res: Response, next: NextFunction) => {
  const { name: Name, amount: Amount } = req.body as IProduct;
  const { error } = productSchema.validate({ Name, Amount });
  if (error) throw error;

  next();
};
