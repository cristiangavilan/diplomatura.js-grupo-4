import { ICategory } from 'memegram-commons/models/Category.model';
import { IUser } from 'memegram-commons/models/User.model';
import { IMeme } from 'memegram-commons/models/Meme.model';
import { ObjectId } from 'bson';

const futbol: ICategory = {
  _id: new ObjectId('5f3c6baca8d16174a544b1f8'),
  name: 'Deportes',
};

const moda: ICategory = {
  _id: new ObjectId('5f596856753e477c301a029d'),
  name: 'Moda',
};

const musica: ICategory = {
  _id: new ObjectId('5f59b6a2753e477c301a029f'),
  name: 'Musica',
};

const comida: ICategory = {
  _id: new ObjectId('5f59b684753e477c301a029e'),
  name: 'Comida',
};

const cine: ICategory = {
  _id: new ObjectId('5f596856753e477c301a029c'),
  name: 'Cine',
};

const userTest1: IUser = {
  _id: new ObjectId(),
  username: 'Pepe Argento',
  email: 'user2@user.com',
  img:
    'https://vignette.wikia.nocookie.net/casados-con-hijos-ar/images/7/73/1133292656_f-1.jpg/revision/latest/zoom-crop/width/240/height/240?cb=20160124204026&path-prefix=es',
};

const userTest2: IUser = {
  _id: new ObjectId(),
  username: 'Pao Argento',
  email: 'user2@user.com',
  img: 'https://elsol-compress.s3-accelerate.amazonaws.com/imagenes/000/310/598/000310598-201303lopilato_2625158.jpg',
};
const userTest3: IUser = {
  _id: new ObjectId(),
  username: 'Moni Argento',
  email: 'user3@user.com',
  img: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Crystal_Clear_kdm_user_female.svg',
};

export const dbUsers: IUser[] = [userTest1, userTest2, userTest3];

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
  {
    _id: new ObjectId(),
    image: 'pizza',
    filename: 'https://media.giphy.com/media/iJa6kOfJ3qN7a/giphy.gif',
    title: 'Panza llena, corazón contento',
    // @ts-ignore
    category: comida._id,
    // @ts-ignore
    owner: userTest3._id,
    voteUp: [],
    voteDown: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    comments: [],
  },
  {
    _id: new ObjectId(),
    image: 'cine',
    filename: 'https://media.giphy.com/media/1O3oKany2IXtmKoV3N/giphy.gif',
    title: 'Sigue la cuarentena',
    // @ts-ignore
    category: cine._id,
    // @ts-ignore
    owner: userTest2._id,
    voteUp: [],
    voteDown: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    comments: [],
  },
  {
    _id: new ObjectId(),
    image: 'cine',
    filename: 'https://media.giphy.com/media/6dZSMuwIZTIju/giphy.gif',
    title: 'Últimos ajustes para presentar',
    // @ts-ignore
    category: cine._id,
    // @ts-ignore
    owner: userTest3._id,
    voteUp: [],
    voteDown: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    comments: [],
  },
];

export const dbCategories = [futbol, moda, musica, comida, cine];
