import { Response, Request, Router } from 'express';
import rescue from 'express-rescue';
import schemas from '../schemas';
import { userService } from '../services';

// Inspirado em : ['https://expressjs.com/en/guide/routing.html', 'https://javascript.plainenglish.io/express-with-typescript-8732e9dc7e2b', 'https://www.sharepointpals.com/post/how-to-use-caml-query-in-sharepoint-rest-api-using-express-js-and-typescript/', 'https://stackoverflow.com/questions/48904559/typescript-express-routes', 'https://github.com/pabloassuncao/typescript-blogs-api/blob/main/src/controller/index.ts']

const createUser = async (req: Request, res: Response) => {
  const token: string = await userService.createUser(req.body);
  res.status(201).json({ token });
};

const route: Router = Router();
route.post('/', schemas.userSchema, rescue(createUser));

export default route;
