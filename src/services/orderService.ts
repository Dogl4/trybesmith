import { orderModel, productModel } from '../models';
import { IOrder, IOrderGet } from '../interfaces';
import { generateError } from '../middlewares';

const resgisterProductOrder = async (order: IOrder) => {
  await orderModel.resgisterProductOrder(order);
  return { order: { userId: order.id, products: order.products } };
};

const getOrderById = async (orderGet: IOrderGet) => {
  const orderById = await orderModel.getOrderById(orderGet);
  const products = orderById.map((product) => product.id);
  if (!products.length) generateError('NotFound', 'Order not found');
  return { ...orderGet, products };
};

const getAllOrders = async () => {
  const allOrders = await orderModel.getAllOrders();
  const endOders = await Promise.all(allOrders.map(async ({ id, userId }) => {    
    const produtos = await productModel.produtosByOrder(id) as [] | IOrder[];
    return { id, userId, products: produtos.map((e) => (e.id)) };
  }));
  if (!endOders.length) generateError('NotFound', 'Orders not found');
  return endOders;
};

export default { resgisterProductOrder, getOrderById, getAllOrders };
