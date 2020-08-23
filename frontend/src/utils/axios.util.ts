import axios, { AxiosInstance } from 'axios';
import { getLocalJwt } from './jwt.util';
const SERVER_API = `${process.env.SERVER_URL}:${process.env.SERVER_PORT}${process.env.API_ENDPOINT}`;

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
