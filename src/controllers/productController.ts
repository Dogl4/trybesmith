import { Request, Response, Router } from 'express';

const createProduct = (req: Request, res: Response) => {
  res.status(201).json({ message: 'Hello Product' });
};

const route: Router = Router();
export default route.post('/', createProduct);
