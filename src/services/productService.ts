import { productModel } from '../models';
import type { IProduct } from '../interfaces';

const createProduct = async (reqBody: IProduct) => {
  const newProduct = productModel.createProduct(reqBody);
  return newProduct;
};

export default { createProduct };
