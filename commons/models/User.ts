export interface IUser {
  username: String;
  email: String;
  profilePicture?: string;
  role: 'user' | 'admin';
}
