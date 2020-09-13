import axios, { AxiosInstance } from 'axios';
import { getLocalJwt } from './jwt.util';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL || 'https://memegramfw.herokuapp.com';
const REACT_APP_SERVER_PORT = process.env.REACT_APP_SERVER_PORT || '';

const SERVER_API = `${REACT_APP_SERVER_URL}${REACT_APP_SERVER_PORT ? ':' + REACT_APP_SERVER_PORT : ''}/api`;

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
