import React from 'react';
import InputMeme from '../components/InputMeme';
import { IMeme } from 'memegram-commons/models/Meme.model';
import { MemeSdk } from '../sdk/MemeSdk';
import { useHistory } from 'react-router-dom';

export const UploadMeme = () => {
  const history = useHistory();

  const onSaveMeme = async (meme: IMeme) => {
    await MemeSdk.addMeme(meme);
    history.push('/');
  };

  return (
    <div className="container mb-4">
      <div className="row">
        <div className="col text-center">
          <InputMeme onSave={onSaveMeme} />
        </div>
      </div>
    </div>
  );
};
