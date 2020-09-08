import { IUserLogin } from 'memegram-commons/models/User.model';
import { axiosInstance } from '../utils/axios.util';

export const UserSdk = {
  async login(email: string, password: string): Promise<IUserLogin> {
    const respuesta = await axiosInstance.post<IUserLogin>('/login', { email, password });
    return respuesta.data;
  },
};
