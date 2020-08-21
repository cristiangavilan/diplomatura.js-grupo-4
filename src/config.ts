import dotenv from 'dotenv';

dotenv.config();

export const SERVER_URL: string = process.env.SERVER_URL || 'http://127.0.0.1';
export const SERVER_PORT: number = process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT) || 3000 : 3000;
export const API_ENDPOINT: string = process.env.API_ENDPOINT || '/api';

export const SERVER_API: string = `${SERVER_URL}:${SERVER_PORT}${API_ENDPOINT}` || 'http://127.0.0.1:3000/api';
