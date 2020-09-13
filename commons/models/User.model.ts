import { IBase, IApiBaseModel } from './Base.model';

export interface IUserBase extends IBase {
  username: string;
  email: string;
  img?: string;
  signupDate?: string;
  lastLogin?: Number;
  google?: string;
}

export interface IUserRegister extends IApiBaseModel {
  user: IUserBase;
}

export interface IApiUserLogin extends IApiBaseModel {
  user: IUserBase;
  token: string;
}
