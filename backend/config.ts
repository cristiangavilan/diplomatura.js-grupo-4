import dotenv from 'dotenv';

dotenv.config();

export const SERVER_PORT: number = process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT) || 3000 : 3000;

export const API_ENDPOINT: string = process.env.API_ENDPOINT || '/api';
