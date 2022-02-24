import { Response, Request, Router } from 'express';
import rescue from 'express-rescue';
import schemas from '../schemas';
import { loginService } from '../services';

const loginUser = async (req: Request, res: Response) => {
  try {
    const token = await loginService.loginUser(req.body);
    if (!token) throw new Error();
    res.status(200).json({ token });
  } catch (error) {
    res.status(401).json({ error: 'Username or password invalid' });
  }
};

const route: Router = Router();
route.post('/', rescue(schemas.loginSchema), rescue(loginUser));

export default route;
