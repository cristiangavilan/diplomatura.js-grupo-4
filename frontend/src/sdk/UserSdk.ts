import { IUserLogin, IUser } from 'memegram-commons/models/User.model';
import { axiosInstance } from '../utils/axios.util';

export const UserSdk = {
  async login(email: string, password: string): Promise<IUserLogin> {
    const respuesta = await axiosInstance.post<IUserLogin>('/login', { email, password });
    return respuesta.data;
  },
};

export const RegisterSdk = {
  async register(email: string, password: string, username: string): Promise<IUser> {
    const respuesta = await axiosInstance.post<IUser>('/user', { email, password, username });
    return respuesta.data;
  },
};

export const GoogleSdk = {
  async login(token: string): Promise<IUserLogin> {
    const respuesta = await axiosInstance.post<IUserLogin>('/login/google', { token });
    return respuesta.data;
  },
};
