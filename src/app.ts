import express from 'express';
import routes from './controllers';
import { joiError, domainError, serverError } from './middlewares';

const app = express();

app.use(express.json());

app.use('/', routes);

app
  .use(joiError)
  .use(domainError)
  .use(serverError);

export default app;
