import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RegisterSdk } from '../sdk/UserSdk';
import { useHistory } from 'react-router-dom';

/* 
{
userName: 'pepe22',
email:'pepe22@gmail.com',
password:'123456',
passwordR:'123456',

}

*/

export const Register = () => {
  const history = useHistory();

  const [mailUser, setMailUser] = useState<string>();
  const [passUser, setPassUser] = useState<string>();
  const [nameUser, setUserName] = useState<string>();
  const [repeatPass, SetRepeatPass] = useState<string>();

  const onChangeMailUser = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const newMail: string = event ? event?.target.value : '';
    //console.log('newMail:', newMail);
    setMailUser(newMail);
  };

  const onChangePassUser = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const newPass: string = event ? event?.target.value : '';
    //console.log('newPass:', newPass);
    setPassUser(newPass);
  };
  const onChangeUserName = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const userName: string = event ? event?.target.value : '';
    //console.log('newPass:', userName);
    setUserName(userName);
  };
  const onChangeRepeatPass = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const confirmPass: string = event ? event?.target.value : '';
    //console.log('newPass:', confirmPass);
    SetRepeatPass(confirmPass);
  };

  const onRegister = async (mailUser: any, passUser: any, nameUser: any, repeatPass: any) => {
    if (!nameUser) {
      alert('Debes ingresar un nombre de usuario');
      return;
    }
    if (!mailUser) {
      alert('Debes ingresar un email');
      return;
    }
    if (!passUser) {
      alert('Debes ingresar un Password');
      return;
    }
    if (!repeatPass) {
      alert('Debes volver a ingresar un  Password');
      return;
    }
    if (passUser !== repeatPass) {
      alert('Verificar password');
      return;
    } else {
      await RegisterSdk.register(mailUser, passUser, nameUser);
      history.push('/');
    }
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Obtener una cuenta</h1>

        <div className="campo-form">
          <label htmlFor="nombre">Nombre de usuario</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            maxLength={10}
            placeholder="Nombre de usuario"
            onChange={onChangeUserName}
          />
        </div>

        <div className="campo-form">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required name="email" placeholder="Tu Email" onChange={onChangeMailUser} />
        </div>

        <div className="campo-form">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            maxLength={8}
            name="password"
            placeholder="Tu Password"
            onChange={onChangePassUser}
          />
        </div>

        <div className="campo-form">
          <label htmlFor="confirmar">Confirmar Password</label>
          <input
            type="password"
            id="confirmar"
            required
            maxLength={8}
            name="confirmar"
            placeholder="Repite tu Password"
            onChange={onChangeRepeatPass}
          />
        </div>

        <div className="campo-form">
          <button
            className="btn btn-lg btn-pink"
            onClick={() => {
              onRegister(mailUser, passUser, nameUser, repeatPass);
            }}
          >
            Registro
          </button>
        </div>
        <NavLink exact to="/">
          Volver a Iniciar Sesión
        </NavLink>
      </div>
    </div>
  );
};
