import { Router } from 'express';
import rescue from 'express-rescue';
import userController from './userController';
import loginController from './loginController';
import productController from './productController';
import schemas from '../schemas';
import jwtAuth from '../utils/jwtAuth';

const router: Router = Router();

export default router
  .use('/users', schemas.userSchema, rescue(userController))
  .use('/login', rescue(schemas.loginSchema), rescue(loginController))
  .use('/products', schemas.productSchema, jwtAuth, rescue(productController));
