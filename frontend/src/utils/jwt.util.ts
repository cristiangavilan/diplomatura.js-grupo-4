import * as ls from 'local-storage';

export const getLocalJwt = (): string | null => {
  return ls.get('jwt');
};

export const setLocalJwt = (value: string) => {
  return ls.set('jwt', value);
};

export const removeLocalJwt = () => {
  return ls.remove('jwt');
};
