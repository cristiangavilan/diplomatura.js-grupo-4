import axios, { AxiosInstance } from 'axios';
import { getLocalJwt } from './jwt.util';
const SERVER_API = `${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_SERVER_PORT}${process.env.REACT_APP_API_ENDPOINT}`;

export const request = (): AxiosInstance => {
  const headers: any = { 'Content-Type': 'application/json' };
  const localJwt = getLocalJwt();

  if (localJwt) {
    headers['Authorization'] = `Bearer ${localJwt}`;
  }

  return axios.create({
    baseURL: SERVER_API,
    headers,
  });
};
