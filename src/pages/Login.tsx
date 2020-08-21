import React from 'react';
import { useAppState } from '../state';
import { useHistory } from 'react-router-dom';
import { setLocalJwt } from '../utils/jwt.util';

export const Login = () => {
  const state = useAppState();
  const history = useHistory();

  const onLogin = () => {
    state.produce((currentState) => {
      currentState.loggedIn = true;

      currentState.user = {
        username: 'foo',
        email: 'foo@server.com',
        role: 'user',
      };
    });

    setLocalJwt('@TODO');
    history.push('/');
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button
        onClick={() => {
          onLogin();
        }}
      >
        Login
      </button>
    </div>
  );
};