export interface IUserJoi {
  Username: string;
  Classe?: string;
  Level?: number;
  Password: string;
}

export interface IUser {
  username?: string;
  classe?: string;
  level?: number;
  password?: string;
}

export interface IUserMoreId extends IUser {
  id?: number;
}
