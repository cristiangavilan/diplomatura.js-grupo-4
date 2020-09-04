import React from 'react';
import InputMeme from '../components/InputMeme';
import { Meme } from 'memegram-commons/models/Meme.model';
import { categories } from '../data/data';

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
