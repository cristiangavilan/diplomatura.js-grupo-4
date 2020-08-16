import React from 'react';
import logo from '../assets/images/logo.svg';
import { EjemploProps } from '../../types/EjemploParams';

export default (props: EjemploProps) => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <h1>{props.title}</h1>
    </header>
  );
};
