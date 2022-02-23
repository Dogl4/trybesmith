import express from 'express';
import routes from './controllers';
import middlewares from './middlewares';

const app = express();

app.use(express.json());

app.use('/', routes);

app.use(middlewares.joiError);
app.use(middlewares.domainError);
app.use(middlewares.domainError);

export default app;
