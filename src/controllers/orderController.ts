import { Request, Response, Router } from 'express';
import jwtAuth from '../utils/jwtAuth';
import schemas from '../schemas';

const registerProductOrder = (req: Request, res: Response) => {
  console.log('registerProductOrder', res.locals);
  
  res.status(201).json({ message: 'Hello productOrderRegister' });
};

const route = Router();
route
  .use('/', jwtAuth, schemas.orderSchema, registerProductOrder);

export default route;
