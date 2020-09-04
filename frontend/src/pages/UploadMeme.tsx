import React from 'react';
import InputMeme from '../components/InputMeme';
import { Meme } from 'memegram-commons/models/Meme.model';
import { dbCategories } from '../data/data';
import { MemeSdk } from '../sdk/MemeSdk';

export const UploadMeme = () => {
  const getMemeToSave = (meme: Meme) => {
    MemeSdk.addMeme(meme).then();
  };

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
