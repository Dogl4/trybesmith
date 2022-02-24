import { Request, Response, Router } from 'express';
import rescue from 'express-rescue';
import productService from '../services/productService';
import schemas from '../schemas';
import jwtAuth from '../utils/jwtAuth';

const createProduct = async (req: Request, res: Response) => {
  const newProduct = await productService.createProduct(req.body);
  res.status(201).json(newProduct);
};

const getAllProducts = async (req: Request, res: Response) => {
  const products = await productService.getAllProducts();
  res.status(200).json(products);
};

const route: Router = Router();
route
  .post('/', schemas.productSchema, jwtAuth, rescue(createProduct))
  .get('/', jwtAuth, rescue(getAllProducts));

export default route;
