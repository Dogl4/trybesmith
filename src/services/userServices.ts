import userModel from '../models';

export interface IBody {
  username?: string;
  classe?: string;
  level?: number;
  password?: string;
}

const createUser = async (reqBody: IBody) => {
  const token = await userModel.createUser(reqBody);
  return token;
};

const getUsers = () => /* User.find({}) */'';

export default { createUser, getUsers };
