import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { generateError } from '../middlewares';
import type { IUser } from '../interfaces';

const JWT_SECRET = 'secret';

const jwtConfig = { algorithm: 'HS256' } as jwt.SignOptions;

export default (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) return next(generateError('Unauthorized', 'Token not found'));

  try {
    const { user } = jwt.verify(token, JWT_SECRET, jwtConfig) as { user: IUser };
    res.locals = user;
  } catch (err) {
    generateError('Unauthorized', 'Invalid token');
  }
  next();
};
