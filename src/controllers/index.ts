import { Router } from 'express';
import userController from './userController';
import loginController from './loginController';
import productController from './productController';
import orderController from './orderController';

const router: Router = Router();
router
  .use('/users', userController)
  .use('/login', loginController)
  .use('/products', productController)
  .use('/orders', orderController);

export default router;
