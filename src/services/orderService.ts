import { orderModel } from '../models';
import { IOrder, IOrderGet, IProductFull } from '../interfaces';
import { generateError } from '../middlewares';

const resgisterProductOrder = async (order: IOrder) => {
  await orderModel.resgisterProductOrder(order);
  return { order: { userId: order.id, products: order.products } };
};

const getOrderById = async (orderGet: IOrderGet) => {
  const orderById = await orderModel.getOrderById(orderGet);

  const products = (orderById as any).map((product: IProductFull) => product.id);

  if (!products.length) generateError('NotFound', 'Order not found');

  return { ...orderGet, products };
};

export default { resgisterProductOrder, getOrderById };
