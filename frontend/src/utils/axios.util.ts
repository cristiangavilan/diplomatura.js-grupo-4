import axios, { AxiosInstance } from 'axios';
import { getLocalJwt } from './jwt.util';
import { SERVER_API } from 'memegram-commons/config';

export let axiosInstance: AxiosInstance;

export const initAxiosInstance = () => {
  const headers: any = { 'Content-Type': 'application/json' };
  const localJwt = getLocalJwt();

  if (localJwt) {
    headers['Authorization'] = localJwt;
  }

  axiosInstance = axios.create({
    baseURL: SERVER_API,
    headers,
  });
};

export const setAuthorizationHeader = (token: string) => {
  axiosInstance.defaults.headers['Authorization'] = token;
};
