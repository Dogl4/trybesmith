export interface IError extends Error {
  code: number | string | IMapError;
  message: string;
  status?: number;
}

export interface IMapError {
  NotFound: number;
  Conflict: number;
  BadRequest: number;
  Unauthorized: number;
  UnprocessableEntity: number;
}

export interface IMapErrorJoi {
  'any.required': number;
  'string.base': number;
  'string.min': number;
  'number.min': number;
  'string.length': number;
  'string.empty': number;
}
