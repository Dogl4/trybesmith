import { Request, Response, Router } from 'express';
import { orderService } from '../services';
import jwtAuth from '../utils/jwtAuth';
import schemas from '../schemas';
import { IOrder } from '../interfaces';

const registerProductOrder = async (req: Request, res: Response) => {
  const { products } = req.body as IOrder;
  const user = res.locals;
  const result = await orderService.resgisterProductOrder({ products, ...user });
  res.status(201).json(result);
};

const route = Router();
route
  .use('/', jwtAuth, schemas.orderSchema, registerProductOrder);

export default route;
