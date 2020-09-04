import { ICategory } from 'memegram-commons/models/Category.model';
import { IUser } from 'memegram-commons/models/User.model';
import { Meme } from 'memegram-commons/models/Meme.model';

const futbol: ICategory = {
  _id: '9a09sd8a09sd898d0a98sd0a',
  name: 'Deportes',
};

const moda: ICategory = {
  _id: 'a90das98da980sd980as98d0',
  name: 'Moda',
};

const musica: ICategory = {
  _id: '876as76a76sd76asd76a67sd',
  name: 'Musica',
};

const userTest1: IUser = {
  _id: 'iash89a9s0s0',
  username: 'User1',
  email: 'user2@user.com',
  img: 'https://image.flaticon.com/icons/png/512/64/64572.png',
};

const userTest2: IUser = {
  _id: '87as7sa87sk8',
  username: 'User2',
  email: 'user2@user.com',
  img: 'https://image.flaticon.com/icons/png/512/64/64572.png',
};

export const dbMemes: Meme[] = [
  {
    _id: '76ad8a6sd8asd79a8s7d9as8d9a87sd',
    image: 'futbol',
    filename:
      'https://image.freepik.com/foto-gratis/jugadores-futbol-soccer-competencia-equipo-rojo-azul-estadio-deportivo_43569-10.jpg',
    title: 'la Pelota no se mancha',
    category: futbol,
    owner: userTest1,
    voteUp: [],
    voteDown: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    comments: [],
  },
  {
    _id: '87as879as87das78a78sd78asd87',
    image: 'moda',
    filename:
      'https://image.freepik.com/foto-gratis/mujer-hermosa-joven-inconformista-sosteniendo-bolsas-papel-colores_285396-1890.jpg',
    title: 'Estaba todo cerrado',
    category: moda,
    owner: userTest1,
    voteUp: [],
    voteDown: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    comments: [],
  },
  {
    _id: '98asd879as879da789sd789asd879',
    image: 'musica',
    filename:
      'https://image.freepik.com/foto-gratis/sorprendida-asombrada-emocionada-mujer-pelirroja-sonriente-descubrio-que-banda-favorita-lanzo-nueva-cancion_1258-8333.jpg',
    title: 'El tema nuevo de Arjona',
    category: musica,
    owner: userTest2,
    voteUp: [],
    voteDown: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    comments: [],
  },
];

export const dbCategories = [futbol, moda, musica];
