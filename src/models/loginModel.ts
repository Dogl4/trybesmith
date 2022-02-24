import userModel from './userModel';
import type { IUser, IUserMoreId } from '../interfaces';
import generateToken from '../utils/jwtGenerateToken';

const login = async (reqBody: IUser) => {
  const userDB = await userModel.getUserByName(reqBody);
  if (userDB.password !== reqBody.password) return;
  const { id, username, classe, level } = userDB;
  const token = await generateToken({ id, username, classe, level } as IUserMoreId);
  return token;
};

export default { login };
