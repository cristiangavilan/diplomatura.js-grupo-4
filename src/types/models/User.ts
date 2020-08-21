export interface IUser {
  username: String;
  email: String;
  profilePicture?: Buffer;
  role: 'user' | 'admin';
}
