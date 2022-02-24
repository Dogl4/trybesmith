import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
 
const orderSchema = Joi.array().items(
  Joi.number().required(),
).required().messages(
  {
    'any.required': 'Products is required', 
    'array.base': 'Products must be an array of numbers',
    'number.base': 'Products must be an array of numbers',
    'array.includesRequiredUnknowns': 'Products can\'t be empty',
  },
);

export default (req: Request, res: Response, next: NextFunction) => {
  const { products: Products } = req.body;  
  const { error } = orderSchema.validate(Products);
  if (error) throw error;

  next();
};
