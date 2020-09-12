import React, { useState, useCallback } from 'react';
import { useAppState } from '../state';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { setLocalJwt } from '../utils/jwt.util';
import GoogleLogin from 'react-google-login';
import { UserSdk, GoogleSdk } from '../sdk/UserSdk';

export const Login = () => {
  const responseGoogle = async (response: any) => {
    const { tokenId } = response;
    const data = await GoogleSdk.login(tokenId);
    console.log('data', data);
    state.produce((currentState) => {
      currentState.loggedIn = true;
      currentState.user = data.user;
    });
    setLocalJwt(data.token);
    history.push('/');
  };

  const state = useAppState();
  const history = useHistory();
  const [mailUser, setMailUser] = useState<string>('');
  const [passUser, setPassUser] = useState<string>('');

  const onChangeMailUser = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const newMail: string = event ? event?.target.value : '';
    setMailUser(newMail);
  };

  const onChangePassUser = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const newPass: string = event ? event?.target.value : '';
    setPassUser(newPass);
  };

  const onLogin = useCallback(
    async (mailUser, passUser) => {
      const data = await UserSdk.login(mailUser, passUser);
      state.produce((currentState) => {
        currentState.loggedIn = true;
        currentState.user = data.user;
      });

      setLocalJwt(data.token);
      history.push('/');
    },
    [history, state]
  );

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Login</h1>

        <div className="campo-form">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="Tu Email"
            onChange={onChangeMailUser}
          />
        </div>

        <div className="campo-form">
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            name="Password"
            className="form-control"
            placeholder="Tu password"
            onChange={onChangePassUser}
          />
        </div>

        <div className="campo-form">
          <button
            className="btn btn-lg btn-pink"
            onClick={() => {
              onLogin(mailUser, passUser);
            }}
          >
            Login
          </button>

          <button onClick={() => history.push('/')} className="btn btn-lg btn-pink m-2">
            Cancelar
          </button>

          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_ID || ''}
            buttonText="Login"
            className="btn btn-lg"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>

        <NavLink exact to="/register" className="enlace-cuenta">
          Registrate
        </NavLink>
      </div>
    </div>
  );
};
