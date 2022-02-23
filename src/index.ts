import { env } from 'process';
import app from './app';

const PORT: number | string = env.PORT || 3000;

const server = app.listen(PORT, (): void => console
  .log(`Server is running on PORT: ${PORT}`));

export default server;
