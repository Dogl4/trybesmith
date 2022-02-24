import { productModel } from '../models';
import type { IProduct } from '../interfaces';

const createProduct = async (reqBody: IProduct) => {
  const newProduct = productModel.createProduct(reqBody);
  return newProduct;
};

const getAllProducts = async () => {
  const products = await productModel.getAllProducts();
  return products;
};

export default { createProduct, getAllProducts };
