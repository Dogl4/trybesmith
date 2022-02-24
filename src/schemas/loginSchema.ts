import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import type { ObjectSchema } from 'joi';
import type { IUserJoi } from '../interfaces';
import { loginService } from '../services';
import { generateError } from '../middlewares';

const loginSchema: ObjectSchema<IUserJoi> = Joi.object({
  Password: Joi.string().required(),
  Username: Joi.string().required(),
});

export default async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  const newUser: IUserJoi = { Username: username, Password: password };
  const { error } = loginSchema.validate(newUser);
  if (error) throw error;

  const user = await loginService.verifyLogin({ username, password });
  if (!user) generateError('Unauthorized', 'Username or password invalid');

  next();
};
