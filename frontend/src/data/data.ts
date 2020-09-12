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
    title: 'la Pelota no se mancha (1)',
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
    title: 'Estaba todo cerrado (2)',
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
    title: 'El tema nuevo de Arjona (3)',
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
    title: 'Panza llena, corazón contento (4)',
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
    title: 'Sigue la cuarentena (5)',
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
    title: 'Últimos ajustes para presentar (6)',
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
  {
    _id: new ObjectId(),
    image: 'futbol',
    filename:
      'https://img.freepik.com/foto-gratis/futbol-masculino-entrenamiento-jugador-futbol-accion-aislado-estudio-degradado-luz-neon_155003-15990.jpg',
    title: 'la Pelota no se mancha (7)',
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
      'https://image.freepik.com/foto-gratis/futbol-femenino-jugador-futbol-pateando-pelota-entrenamiento-accion-movimiento-aislado-sobre-fondo-blanco_155003-8691.jpg',
    title: 'Estaba todo cerrado (8)',
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
    filename: 'https://img.freepik.com/foto-gratis/grupo-aficionados-viendo-futbol-television_1157-28509.jpg',
    title: 'El tema nuevo de Arjona (9)',
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
    filename:
      'https://img.freepik.com/foto-gratis/chico-afroamericano-viendo-juegos-sintiendose-nervioso-panico-conmocionado_273609-9683.jpg',
    title: 'Panza llena, corazón contento (10)',
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
    filename: 'https://as2.ftcdn.net/jpg/02/63/68/61/500_F_263686195_8jUghv5TrDn2r14d1vDzbx0rc20ZuA0t.jpg',
    title: 'Sigue la cuarentena (11)',
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
    filename: 'https://image.freepik.com/foto-gratis/trabajador-estresado-jugando-su-camisa_1194-675.jpg',
    title: 'Últimos ajustes para presentar (12)',
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
  {
    _id: new ObjectId(),
    image: 'futbol',
    filename:
      'https://image.freepik.com/foto-gratis/jugadores-futbol-soccer-competencia-equipo-rojo-azul-estadio-deportivo_43569-10.jpg',
    title: 'la Pelota no se mancha (13)',
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
    title: 'Estaba todo cerrado (14)',
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
    title: 'El tema nuevo de Arjona (15)',
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
    title: 'Panza llena, corazón contento (16)',
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
    title: 'Sigue la cuarentena (17)',
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
    title: 'Últimos ajustes para presentar (18)',
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
  {
    _id: new ObjectId(),
    image: 'futbol',
    filename:
      'https://image.freepik.com/foto-gratis/jugadores-futbol-soccer-competencia-equipo-rojo-azul-estadio-deportivo_43569-10.jpg',
    title: 'la Pelota no se mancha (19)',
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
    title: 'Estaba todo cerrado (20)',
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
    title: 'El tema nuevo de Arjona (21)',
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
    title: 'Panza llena, corazón contento (22)',
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
    title: 'Sigue la cuarentena (23)',
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
    title: 'Últimos ajustes para presentar (24)',
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
