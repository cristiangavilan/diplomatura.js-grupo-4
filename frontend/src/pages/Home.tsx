import React from 'react';
import { useAppState } from '../state';
import { MemeGrid } from '../components/MemeGrid';
import { TabBar } from '../components/TabBar';
import { IUser } from 'memegram-commons/models/User.model';

export const Home = () => {
  const state = useAppState();

  // const categoryTest = new Category('', 'futbolito');
  const userTest: IUser = {
    _id: 'iash89a9s0s0',
    email: 'user@user.com',
    username: 'User',
    img: 'https://image.flaticon.com/icons/png/512/64/64572.png',
  };

  console.log(userTest);
  // const dateTest = new Date();
  // const memeTest = new Meme(
  //   '',
  //   'futbol',
  //   'https://image.freepik.com/foto-gratis/jugadores-futbol-soccer-competencia-equipo-rojo-azul-estadio-deportivo_43569-10.jpg',
  //   'la Pelota no se mancha',
  //   categoryTest,
  //   userTest,
  //   [],
  //   [],
  //   dateTest,
  //   dateTest,
  //   []
  // );

  return (
    <div className="container p-2">
      {state.loggedIn && <h3>Welcome {state.user?.username}!</h3>}
      <MemeGrid />
      <TabBar />
    </div>
  );
};
