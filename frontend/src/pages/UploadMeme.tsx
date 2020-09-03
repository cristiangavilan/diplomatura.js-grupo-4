import React from 'react';
import InputMeme from '../components/InputMeme';
import { TabBar } from '../components/TabBar';
import { ICategory } from 'memegram-commons/models/Category.model';
import { Meme } from 'memegram-commons/models/Meme.model';

//Obtener lista de categorias:
const categories: ICategory[] = [
  { _id: 'a1111', name: 'Deportes' },
  { _id: 'b2222', name: 'Musica' },
  { _id: 'c3333', name: 'Politica' },
  { _id: 'd4444', name: 'General' },
];

const getMemeToSave = (meme: Meme) => {
  console.log('UploadMeme.tsx', meme);
};

export const UploadMeme = () => {
  return (
    <div className="container mb-4">
      <div className="row">
        <div className="col text-center">
          <InputMeme categories={categories} onGetMemeToSave={getMemeToSave} />
        </div>
      </div>
    </div>
  );
};
