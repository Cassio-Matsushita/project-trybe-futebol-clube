export interface IUserCredentials {
  email: string;
  password: string;
}

export interface IUser extends IUserCredentials {
  username: string;
}

export interface IUserToken {
  username: string;
  email: string;
  role: string;
}

export interface IUserDTO {
  id?: number;
  username: string;
  email: string;
  password: string;
  role: string;
}
