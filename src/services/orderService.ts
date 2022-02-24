import { orderModel } from '../models';
import { IOrder } from '../interfaces';

const resgisterProductOrder = async (order: IOrder) => {
  await orderModel.resgisterProductOrder(order);
  return { order: { userId: order.id, products: order.products } };
};

export default { resgisterProductOrder };
