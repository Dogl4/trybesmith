import { Router } from 'express';
import rescue from 'express-rescue';
import userController from './userController';
import schemas from '../schemas';

const router: Router = Router();

export default router.use('/users', schemas.userSchema, rescue(userController));
