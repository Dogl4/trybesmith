import { userModel } from '../models';
import type { IUser } from '../interfaces';

const createUser = async (reqBody: IUser) => {
  const token = await userModel.createUser(reqBody);
  return token;
};

export default { createUser };
