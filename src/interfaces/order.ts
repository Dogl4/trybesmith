import { IUserMoreId } from './user';

export interface IOrder {
  products: number[];
  orderId?: number;
  userId?: number;
  id?: number;
}

export interface IOrderModel extends IOrder, IUserMoreId {
  orderId: number;
  idProduct: number;
  products: number[];
}

export interface IOrderGet {
  id?: string;
  userId?: number;
}
