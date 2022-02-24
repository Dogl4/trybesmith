// interface IError {
//   code: string | number;
//   message: string | object;
//   name: string;
//   stack?: string | undefined;
// }

// export default (code: number | string, message: object | string): never => {
//   const e: Error = new Error();
//   const newError: IError = { ...e, code, message };
//   throw newError;
// };
