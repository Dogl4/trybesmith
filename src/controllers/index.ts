import { Router } from 'express';
import userController from './userController';

const router: Router = Router();

export default router.use('/users', userController);
