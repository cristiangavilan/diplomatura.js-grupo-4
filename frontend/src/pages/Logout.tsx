import React from 'react';
import { useAppState } from '../state';
import { useHistory } from 'react-router-dom';
import { removeLocalJwt } from '../utils/jwt.util';

export const Logout = () => {
  const state = useAppState();
  const history = useHistory();

  removeLocalJwt();

  state.produce((currentState) => {
    currentState.loggedIn = false;
    currentState.user = undefined;
  });

  history.push('/');
  window.location.reload(true);

  return <></>;
};
