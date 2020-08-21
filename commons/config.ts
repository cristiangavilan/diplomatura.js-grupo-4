import dotenv from 'dotenv';

dotenv.config();

/**
 * Backend URL.
 */
export const SERVER_URL: string = process.env.SERVER_URL || 'http://127.0.0.1';

/**
 * React Dev Port.
 */
export const REACT_PORT: number = process.env.PORT ? parseInt(process.env.PORT) || 3001 : 3001;

/**
 * Backend Port.
 */
export const SERVER_PORT: number = process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT) || 3000 : 3000;

/**
 * API prefix.
 */
export const API_ENDPOINT: string = process.env.API_ENDPOINT || '/api';

/**
 * Server API URL.
 */
export const SERVER_API: string = `${SERVER_URL}:${SERVER_PORT}${API_ENDPOINT}`;

console.info(`
  SERVER_API: ${SERVER_API}
`);
