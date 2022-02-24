import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IUser, IUserMoreId } from '../interfaces';
import generateToken from '../utils/jwtGenerateToken';

const createUser = async (reqBody: IUser) => {
  const { username, classe, level, password } = reqBody;
  const query = `INSERT INTO Trybesmith.Users 
  (username, classe, level, password) 
  VALUES (?, ?, ?, ?)`;
  const [{ insertId: id }] = await connection
    .execute<ResultSetHeader>(query, [username, classe, level, password]);

  const user: IUserMoreId = { id, username, classe, level };
  const token: string = generateToken(user);
  return token;
};

const getUserByName = async ({ username }: IUser) => {
  const query = 'SELECT * FROM Trybesmith.Users WHERE username = ?';
  const [rows] = await connection
    .execute(query, [username]);
  // Renatão God!!!
  const [user] = rows as IUserMoreId[];
  return user;
};

export default { createUser, getUserByName };
