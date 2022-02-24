import { IError } from '../interfaces';

export default (code: string, message: string) => {
  const e: Error = new Error();
  const newError: IError = { ...e, code, message };
  throw newError;
};
