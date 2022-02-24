import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces';

const JWT_SCRET = 'secret';

export default (user: IUser) => {
  const payload = { isAdmin: false, user };
  const token = jwt.sign(payload, JWT_SCRET, {
    algorithm: 'HS256',
    expiresIn: '2d',
  });

  return token;
};
