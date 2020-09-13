import State from './State';
import { get } from 'local-storage';
import { getLocalJwt } from '../utils/jwt.util';
import { IUserBase } from 'memegram-commons/models/User.model';

/**
 * Create the initial APP state.
 */
export const createInitialState = (): State => {
  const jwt = getLocalJwt();
  const user = get<IUserBase>('user-session') || undefined;

  return {
    loggedIn: !!jwt,
    user,
  };
};
