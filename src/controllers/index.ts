import { Router } from 'express';
import userController from './userController';
import loginController from './loginController';
import productController from './productController';

const router: Router = Router();
router
  .use('/users', userController)
  .use('/login', loginController)
  .use('/products', productController);

export default router;
