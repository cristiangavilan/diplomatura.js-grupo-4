import React, { useState, useCallback } from 'react';
import { useAppState } from '../state';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { setLocalJwt } from '../utils/jwt.util';
import GoogleLogin from 'react-google-login';
import { UserSdk, GoogleSdk } from '../sdk/UserSdk';
import * as ls from 'local-storage';

export const Login = () => {
  const responseGoogle = async (response: any) => {
    const { tokenId } = response;
    const data = await GoogleSdk.login(tokenId);

    state.produce((currentState) => {
      currentState.loggedIn = true;
      currentState.user = data.user;
      ls.set('user-session', data.user);
    });

    setLocalJwt(data.token);
    history.push('/');
  };

  const state = useAppState();
  const history = useHistory();
  const [mailUser, setMailUser] = useState<string>('');
  const [passUser, setPassUser] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [showMustCompleteAlert, setShowMustCompleteAlert] = useState<boolean>(false);

  const onChangeMailUser = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const newMail: string = event ? event?.target.value : '';
    setErrorMessage('');
    setShowMustCompleteAlert(false);
    setMailUser(newMail);
  };

  const onChangePassUser = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const newPass: string = event ? event?.target.value : '';
    setErrorMessage('');
    setShowMustCompleteAlert(false);
    setPassUser(newPass);
  };

  const onLogin = useCallback(
    async (mailUser, passUser) => {
      let message: string = '';
      if (!mailUser) {
        message += message ? ', un email' : 'Debes ingresar un email';
      } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mailUser)) {
        message += message ? ', el email es inválido' : 'Debes ingresar un email válido';
      }
      if (!passUser) {
        message += message ? ', password' : 'Debes ingresar password';
      }
      if (!message) {
        const data = await UserSdk.login(mailUser, passUser);
        if (data.msg !== 'ok') {
          setErrorMessage(data.msg ? data.msg : '');
          setShowMustCompleteAlert(true);
        } else {
          state.produce((currentState) => {
            currentState.loggedIn = true;
            currentState.user = data.user;
            ls.set('user-session', data.user);
          });
          setLocalJwt(data.token);
          history.push('/');
        }
      } else {
        setErrorMessage(message);
        setShowMustCompleteAlert(true);
      }
    },
    [history, state]
  );

  const validateAndLogin = (mailUser: string, passUser: string) => {
    if (mailUser && passUser) {
      onLogin(mailUser, passUser);
    } else {
      setErrorMessage('Debe ingresar mail y password');
      setShowMustCompleteAlert(true);
    }
  };

  return (
    <div className="form-usuario form-group">
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
        {showMustCompleteAlert && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        <div className="campo-form">
          <button
            className="btn btn-lg btn-pink"
            onClick={() => {
              validateAndLogin(mailUser, passUser);
            }}
          >
            Login
          </button>

          <button onClick={() => history.push('/')} className="btn btn-lg btn-pink">
            Cancelar
          </button>
          <GoogleLogin
            clientId={
              process.env.REACT_APP_GOOGLE_ID ||
              '761781222152-g05l8it03c8hj2aon4o8uoo4f4m9n47l.apps.googleusercontent.com'
            }
            buttonText="Login"
            className="btn btn-lg btn-block"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>

        <NavLink exact to="/register" className="enlace-cuenta text-center">
          <strong>Registrate</strong>
        </NavLink>
      </div>
    </div>
  );
};
