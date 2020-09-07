import { ICategory } from 'memegram-commons/models/Category.model';
import { IUser } from 'memegram-commons/models/User.model';
import { IMeme } from 'memegram-commons/models/Meme.model';
import { ObjectId } from 'bson';

const futbol: ICategory = {
  _id: new ObjectId(),
  name: 'Deportes',
};

const moda: ICategory = {
  _id: new ObjectId(),
  name: 'Moda',
};

const musica: ICategory = {
  _id: new ObjectId(),
  name: 'Musica',
};

const userTest1: IUser = {
  _id: new ObjectId(),
  username: 'User1',
  email: 'user2@user.com',
  img: 'https://image.flaticon.com/icons/png/512/64/64572.png',
};

const userTest2: IUser = {
  _id: new ObjectId(),
  username: 'User2',
  email: 'user2@user.com',
  img: 'https://image.flaticon.com/icons/png/512/64/64572.png',
};

export const dbUsers: IUser[] = [userTest1, userTest2];

export const dbMemes: IMeme[] = [
  {
    _id: new ObjectId(),
    image: 'futbol',
    filename:
      'https://image.freepik.com/foto-gratis/jugadores-futbol-soccer-competencia-equipo-rojo-azul-estadio-deportivo_43569-10.jpg',
    title: 'la Pelota no se mancha',
    // @ts-ignore
    category: futbol._id,
    // @ts-ignore
    owner: userTest1._id,
    voteUp: [],
    voteDown: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    comments: [],
  },
  {
    _id: new ObjectId(),
    image: 'moda',
    filename:
      'https://image.freepik.com/foto-gratis/mujer-hermosa-joven-inconformista-sosteniendo-bolsas-papel-colores_285396-1890.jpg',
    title: 'Estaba todo cerrado',
    // @ts-ignore
    category: moda._id,
    // @ts-ignore
    owner: userTest1._id,
    voteUp: [],
    voteDown: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    comments: [],
  },
  {
    _id: new ObjectId(),
    image: 'musica',
    filename:
      'https://image.freepik.com/foto-gratis/sorprendida-asombrada-emocionada-mujer-pelirroja-sonriente-descubrio-que-banda-favorita-lanzo-nueva-cancion_1258-8333.jpg',
    title: 'El tema nuevo de Arjona',
    // @ts-ignore
    category: musica._id,
    // @ts-ignore
    owner: userTest2._id,
    voteUp: [],
    voteDown: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    comments: [],
  },
];

export const dbCategories = [futbol, moda, musica];
