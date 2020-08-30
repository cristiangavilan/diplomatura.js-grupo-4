export interface IUserAPI {
  username: string;
  email: string;
  img?: string;
  signupDate?: string;
  lastLogin?: Number;
}

export interface IUser extends IUserAPI {
  password: string;
  google: string;
}
