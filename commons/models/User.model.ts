import { IBase } from './Base.model';
export interface IUser extends IBase {
  username: string;
  email: string;
  img?: string;
  signupDate?: string;
  lastLogin?: Number;
}

export interface IUserDB extends IUser {
  password: string;
  google: string;
}

export interface IUserLogin {
  user: IUser;
  token: string;
}
