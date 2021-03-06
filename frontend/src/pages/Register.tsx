import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RegisterSdk } from '../sdk/UserSdk';
import { useHistory } from 'react-router-dom';
import UploadCloudFile from '../components/UploadCloudFile';

export const Register = () => {
  const history = useHistory();

  const [mailUser, setMailUser] = useState<string>();
  const [passUser, setPassUser] = useState<string>();
  const [nameUser, setUserName] = useState<string>();
  const [repeatPass, SetRepeatPass] = useState<string>();
  const [urlImage, setUrlImage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [showMustCompleteAlert, setShowMustCompleteAlert] = useState<boolean>(false);

  const getUrlImage = (url: string) => {
    if (url) {
      setUrlImage(url);
    }
  };

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
  const onChangeUserName = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const userName: string = event ? event?.target.value : '';
    setErrorMessage('');
    setShowMustCompleteAlert(false);
    setUserName(userName);
  };
  const onChangeRepeatPass = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const confirmPass: string = event ? event?.target.value : '';
    setErrorMessage('');
    setShowMustCompleteAlert(false);
    SetRepeatPass(confirmPass);
  };

  const onRegister = async (mailUser: any, passUser: any, nameUser: any, repeatPass: any, urlImage?: any) => {
    let message: string = '';
    if (!nameUser) {
      message += 'Debes ingresar un nombre de usuario';
    }
    if (!mailUser) {
      message += message ? ', un email' : 'Debes ingresar un email';
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mailUser)) {
      message += message ? ', el email es inválido' : 'Debes ingresar un email válido';
    }
    if (!passUser) {
      message += message ? ', password' : 'Debes ingresar password';
    }
    if (passUser && (!repeatPass || passUser !== repeatPass)) {
      message += (message ? '. ' : '') + 'Revise la confirmación de password';
    }
    if (!message) {
      await RegisterSdk.register(mailUser, passUser, nameUser, urlImage);
      history.push('/');
    } else {
      setErrorMessage(message);
      setShowMustCompleteAlert(true);
    }
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1 className="text-center mb-">Obtener una cuenta</h1>

        <div className="form-group">
          <label htmlFor="nombre">Nombre de usuario</label>
          <input
            className="form-control"
            type="text"
            id="nombre"
            name="nombre"
            required
            maxLength={10}
            placeholder="Nombre de usuario"
            onChange={onChangeUserName}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            type="email"
            id="email"
            required
            name="email"
            placeholder="Tu Email"
            onChange={onChangeMailUser}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            type="password"
            id="password"
            required
            maxLength={8}
            name="password"
            placeholder="Tu Password"
            onChange={onChangePassUser}
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmar">Confirmar Password</label>
          <input
            className="form-control"
            type="password"
            id="confirmar"
            required
            maxLength={8}
            name="confirmar"
            placeholder="Repite tu Password"
            onChange={onChangeRepeatPass}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Imagen de Perfil</label>
          <div className="text-center">
            {urlImage && <img className="rounded-circle" src={urlImage} alt={'perfil'} width="50" />}
          </div>
          <UploadCloudFile onGetUrlImage={getUrlImage} buttonText="Imagen de Perfil" />
        </div>

        {showMustCompleteAlert && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        <div className="campo-form">
          <button
            className="btn btn-lg btn-pink btn-block text-center"
            onClick={() => {
              onRegister(mailUser, passUser, nameUser, repeatPass, urlImage);
            }}
          >
            Registro
          </button>
        </div>
        <NavLink exact to="/" className="enlace-cuenta text-center">
          Volver a Iniciar Sesión
        </NavLink>
      </div>
    </div>
  );
};
