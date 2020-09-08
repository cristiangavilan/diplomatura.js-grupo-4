import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Register = () => {
  const [mailUser, setMailUser] = useState<string>();
  const [passUser, setPassUser] = useState<string>();

  const onChangeMailUser = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const newMail: string = event ? event?.target.value : '';
    console.log('newMail:', newMail);
    setMailUser(newMail);
  };

  const onChangePassUser = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const newPass: string = event ? event?.target.value : '';
    console.log('newPass:', newPass);
    setPassUser(newPass);
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Obtener una cuenta</h1>

        <form>
          <div className="campo-form">
            <label htmlFor="nombre">Nombre de usuario</label>
            <input type="text" id="nombre" name="nombre" placeholder="Nombre de usuario" />
          </div>

          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Tu Email" onChange={onChangeMailUser} />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Password"
              onChange={onChangePassUser}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="confirmar">Confirmar Password</label>
            <input type="password" id="confirmar" name="confirmar" placeholder="Repite tu Password" />
          </div>

          <div className="campo-form">
            <input type="submit" className="btn btn-lg btn-pink m-10" value="Registrarme" />
          </div>
        </form>

        <NavLink exact to="/">
          Volver a Iniciar Sesión
        </NavLink>
      </div>
    </div>
  );
};
