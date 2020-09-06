import { IUserLogin } from 'memegram-commons/models/User.model';
import { dbUsers } from '../data/data';

export const UserSdk = {
  async login(user: string, password: string): Promise<IUserLogin> {
    return {
      token: `token-${user}:${password}`,
      user: dbUsers[0],
    };
  },
};
