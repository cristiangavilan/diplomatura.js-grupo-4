import State from './State';
import { getLocalJwt } from '../utils/jwt.util';

/**
 * Create the initial APP state.
 */
export const createInitialState = (): State => {
  const jwt = getLocalJwt();
  let user = undefined;

  return {
    loggedIn: !!jwt,
    user,
  };
};
