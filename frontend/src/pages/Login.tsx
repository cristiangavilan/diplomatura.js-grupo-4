import React, { useCallback } from 'react';
import { useAppState } from '../state';
import { useHistory } from 'react-router-dom';
import { setLocalJwt } from '../utils/jwt.util';
import { UserSdk } from '../sdk/UserSdk';

export const Login = () => {
  const state = useAppState();
  const history = useHistory();

  const onLogin = useCallback(async () => {
    const data = await UserSdk.login('foo', 'bar');

    state.produce((currentState) => {
      currentState.loggedIn = true;
      currentState.user = data.user;
    });

    setLocalJwt(data.token);
    history.push('/');
  }, [history, state]);

  return (
    <div>
      <h1>Login Page</h1>
      <button
        className="btn btn-lg btn-pink"
        onClick={() => {
          onLogin();
        }}
      >
        Login
      </button>
    </div>
  );
};
