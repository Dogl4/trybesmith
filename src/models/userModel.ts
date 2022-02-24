import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import type { IBody } from '../services/userServices';
import generateToken from './jwt';

interface IData {
  username?: string;
  classe?: string;
  level?: number;
  password?: string;
  id?: number;
}

const createUser = async (reqBody: IBody) => {
  const { username, classe, level, password } = reqBody;
  const query = `INSERT INTO Trybesmith.Users 
  (username, classe, level, password) VALUES (?, ?, ?, ?)`;
  const [{ insertId: id }] = await connection
    .execute<ResultSetHeader>(query, [username, classe, level, password]);

  const data: IData = { id, username, classe, level, password };
  const token: string = generateToken(data);
  return token;
};

export default { createUser };
