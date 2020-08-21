import axios, { AxiosInstance } from 'axios';
import { getLocalJwt } from './jwt.util';

export let axiosInstance: AxiosInstance;

export const initAxiosInstance = () => {
  const headers: any = { 'Content-Type': 'application/json' };
  const localJwt = getLocalJwt();

  if (localJwt) {
    headers['Authorization'] = localJwt;
  }

  axiosInstance = axios.create({
    baseURL: process.env.SERVER_URL,
    headers,
  });
};

export const setAuthorizationHeader = (token: string) => {
  axiosInstance.defaults.headers['Authorization'] = token;
};
