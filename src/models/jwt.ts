import jwt from 'jsonwebtoken';

const JWT_SCRET = 'secret';

interface IData {
  username?: string;
  classe?: string;
  level?: number;
  password?: string;
}

export default (data: IData) => {
  const payload = { isAdmin: false, data };
  const token = jwt.sign(payload, JWT_SCRET, {
    algorithm: 'HS256',
    expiresIn: '1h',
  });

  return token;
};
