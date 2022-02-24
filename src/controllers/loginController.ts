import { Response, Request, Router } from 'express';

const loginUser = async (req: Request, res: Response) => {
  res.status(201).json({ message: 'Oi' });
};

const route: Router = Router();
export default route.post('/', loginUser);
