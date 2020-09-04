import React from 'react';
import InputMeme from '../components/InputMeme';
import { Meme } from 'memegram-commons/models/Meme.model';
import { dbCategories } from '../data/data';

const getMemeToSave = (meme: Meme) => {
  console.log('UploadMeme.tsx', meme);
};

export const UploadMeme = () => {
  return (
    <div className="container mb-4">
      <div className="row">
        <div className="col text-center">
          <InputMeme categories={dbCategories} onGetMemeToSave={getMemeToSave} />
        </div>
      </div>
    </div>
  );
};
