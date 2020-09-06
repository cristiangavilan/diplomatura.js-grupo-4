import React, { useState, useEffect } from 'react';
import UploadCloudFile from '../components/UploadCloudFile';
import { useHistory } from 'react-router-dom';
import { IMeme } from 'memegram-commons/models/Meme.model';
import { useAppState } from '../state';
import { TId } from 'memegram-commons/models/Base.model';
import { SelectCategory } from './SelectCategory';

type TInputMeme = {
  onSave: (meme: IMeme) => void | Promise<void>;
};

const InputMeme = ({ onSave }: TInputMeme) => {
  const state = useAppState();
  const history = useHistory();
  const [urlImage, setUrlImage] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [categoryId, setCategoryId] = useState<TId>('');
  const [categoryName, setCategoryName] = useState<string>('');
  const [enableCompleteData, setEnableCompleteData] = useState<boolean>(false); //hasta que no cargue la imagen no se deberia habilitar el boton guardar, label titulo, select categoria.

  const getUrlImage = (url: string) => {
    if (url) {
      setUrlImage(url);
    }
  };

  const getFileName = (urlImage: string | undefined): string => {
    return urlImage?.substring(urlImage.lastIndexOf('/')) || '';
  };

  const onCancel = () => {
    history.push('/');
  };

  const onSubmit = () => {
    const newMeme: IMeme = {
      image: getFileName(urlImage),
      filename: urlImage,
      title,
      category: categoryId,
      owner: state.user?._id,
    };

    onSave(newMeme);
  };

  const onChangeTitle = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setTitle(event ? event?.target.value : '');
  };

  useEffect(() => {
    return () => {
      if (!enableCompleteData) {
        setEnableCompleteData(true);
      }
    };
  }, [urlImage, enableCompleteData]);

  return (
    <div className="row">
      <div className="col text-center">
        <div className="card border-pink">
          <div className="card-header text-capitalize">
            {enableCompleteData && (
              <div className="card border-pink">
                <div className="card-header text-capitalize">
                  <img
                    className="rounded"
                    src="https://image.flaticon.com/icons/png/512/64/64572.png"
                    alt="user"
                    width="30"
                  />{' '}
                  <strong>{title}</strong>
                  <br></br>
                  <strong>{categoryName}</strong>
                </div>
                <div className="card-body">
                  <img src={urlImage} alt={getFileName(urlImage)} width="50%" />
                </div>
              </div>
            )}
            <div>
              <UploadCloudFile onGetUrlImage={getUrlImage} />
            </div>
            {enableCompleteData && (
              <div className="form-group">
                <div>
                  <div className="form-group">
                    <label>{'Título: '}</label>
                    <input
                      name="title"
                      type="text"
                      className="form-control"
                      required
                      placeholder="Escribe un título"
                      minLength={1}
                      maxLength={255}
                      value={title}
                      onChange={onChangeTitle}
                    />
                  </div>
                </div>
                <div>
                  {'Categoría: '}
                  <SelectCategory
                    onSelect={(category) => {
                      setCategoryId(category._id);
                      setCategoryName(category.name);
                    }}
                  />
                </div>
              </div>
            )}
            <div>
              <div className="col">
                <button className="btn-pink m-2" onClick={onCancel}>
                  Cancelar
                </button>

                {enableCompleteData && (
                  <button className="btn-pink m-2" type="button" onClick={onSubmit}>
                    Guardar
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputMeme;
