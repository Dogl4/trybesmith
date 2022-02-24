import { Request, Response, Router } from 'express';
import productService from '../services/productService';

const createProduct = async (req: Request, res: Response) => {
  const newProduct = await productService.createProduct(req.body);
  res.status(201).json(newProduct);
};

const getAllProducts = async (req: Request, res: Response) => {
  const products = await productService.getAllProducts();
  res.status(200).json(products);
};

const route: Router = Router();
export default route
  .post('/', createProduct)
  .get('/', getAllProducts);
