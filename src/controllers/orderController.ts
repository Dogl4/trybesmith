import { Request, Response, Router } from 'express';
import rescue from 'express-rescue';
import { orderService } from '../services';
import jwtAuth from '../utils/jwtAuth';
import schemas from '../schemas';
import { IOrder, IOrderGet } from '../interfaces';

const registerProductOrder = async (req: Request, res: Response) => {
  const { products } = req.body as IOrder;
  const user = res.locals;
  const result = await orderService.resgisterProductOrder({ products, ...user });
  res.status(201).json(result);
};

const getOrderById = async (req: Request, res: Response) => {
  const { id } = req.params; 
  const userId = res.locals.id;

  const orderGet: IOrderGet = { id, userId };
  const result = await orderService.getOrderById(orderGet);
  res.status(200).json(result);
};

const route: Router = Router();
route
  .post('/', jwtAuth, schemas.orderSchema, rescue(registerProductOrder))
  .get('/:id', jwtAuth, rescue(getOrderById));

export default route;
