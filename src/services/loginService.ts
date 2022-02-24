import { loginModel, userModel } from '../models';
import type { IUser } from '../interfaces';

const verifyLogin = async (reqBody: IUser) => {
  const user = await userModel.getUserByName(reqBody);
  return !!user;
};

const loginUser = async (reqBody: IUser) => {
  const token = await loginModel.login(reqBody);
  return token;
};

export default { loginUser, verifyLogin };
