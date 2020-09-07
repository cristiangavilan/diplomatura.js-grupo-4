import { IBase } from './Base.model';
import { Document } from 'mongoose';

interface _IUser {
  username: string;
  email: string;
  img?: string;
  signupDate?: string;
  lastLogin?: Number;
}

export interface IUser extends _IUser, IBase {}

export interface IUserModel extends _IUser, Document {
  password: string;
  google: string;
  comparePassword: (password: string) => Promise<Boolean>;
}

export interface IUserLogin {
  user: IUser;
  token: string;
}
