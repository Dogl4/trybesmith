import { Response, Request, Router } from 'express';

// Inspirado em : ['https://expressjs.com/en/guide/routing.html', 'https://javascript.plainenglish.io/express-with-typescript-8732e9dc7e2b', 'https://www.sharepointpals.com/post/how-to-use-caml-query-in-sharepoint-rest-api-using-express-js-and-typescript/', 'https://stackoverflow.com/questions/48904559/typescript-express-routes', 'https://github.com/pabloassuncao/typescript-blogs-api/blob/main/src/controller/index.ts']

const createUser = (req: Request, res: Response): Promise<Response> | void => {
  res.status(201).json({ message: 'Hello World' });
};

const route: Router = Router();
export default route.post('/', createUser);
