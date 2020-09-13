import { IApiUserLogin, IUserRegister } from 'memegram-commons/models/User.model';
import { request } from '../utils/axios.util';

export const UserSdk = {
  async login(email: string, password: string): Promise<IApiUserLogin> {
    const respuesta = await request().post<IApiUserLogin>('/login', { email, password });
    return respuesta.data;
  },
};

export const RegisterSdk = {
  async register(email: string, password: string, username: string, img?: string): Promise<IUserRegister> {
    const respuesta = await request().post<IUserRegister>('/user', { email, password, username, img });
    return respuesta.data;
  },
};

export const GoogleSdk = {
  async login(token: string): Promise<IApiUserLogin> {
    const respuesta = await request().post<IApiUserLogin>('/login/google', { token });
    return respuesta.data;
  },
};
