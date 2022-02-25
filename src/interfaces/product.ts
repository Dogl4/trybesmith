export interface IProduct {
  name: string;
  amount: number;
}

export interface INewProduct {
  item: {
    name: string;
    amount: number;
    id: number;
  };
}

export interface IProductFull {
  id: number;
  name: string;
  amount: number;
  orderId: number;
}
