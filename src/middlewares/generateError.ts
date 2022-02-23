// export default (code: string, message: string): never => {
//   class CustomError extends Error {
//     constructor() {
//       super(message);
//       this.name = code;
//       Object.setPrototypeOf(this, CustomError.prototype);
//     }
//   }
//   throw new CustomError();
// };

// ---------------------------------------------------------------------------------------------------------------------

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
