import React, { useState, useEffect } from 'react';
import UploadCloudFile from '../components/UploadCloudFile';
import { useHistory } from 'react-router-dom';
import { IMeme } from 'memegram-commons/models/Meme.model';
import { useAppState } from '../state';
import { SelectCategory } from './SelectCategory';

type TInputMeme = {
  onSave: (meme: IMeme) => void | Promise<void>;
};

const InputMeme = ({ onSave }: TInputMeme) => {
  const state = useAppState();
  const history = useHistory();
  const [showTitleAlert, setShowTitleAlert] = useState<boolean>(false);
  const [showCategoryAlert, setShowCategoryAlert] = useState<boolean>(false);
  const [urlImage, setUrlImage] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [categoryId, setCategoryId] = useState<string | undefined>();
  const [categoryName, setCategoryName] = useState<string>('');
  const [enableCompleteData, setEnableCompleteData] = useState<boolean>(false); //hasta que no cargue la imagen no se deberia habilitar el boton guardar, label titulo, select categoria.
  const [askCancel, setAskCancel] = useState<boolean>(false);

  const getUrlImage = (url: string) => {
    if (url) {
      setUrlImage(url);
    }
  };

  const getFileName = (urlImage: string | undefined): string => {
    return urlImage?.substring(urlImage.lastIndexOf('/') + 1) || '';
  };

  const onCancel = () => {
    history.push('/');
  };

  const onWantToCancel = () => {
    if (urlImage) {
      //Desea cancelar?
      setAskCancel(true);
    } else {
      history.push('/');
    }
  };

  const isDataValidated = (): boolean => {
    setShowTitleAlert(false);
    setShowCategoryAlert(false);

    if (title && categoryId) {
      return true;
    } else {
      if (!title) {
        setShowTitleAlert(true);
      }

      if (!categoryId) {
        setShowCategoryAlert(true);
      }
    }

    return false;
  };

  const onSubmit = () => {
    if (isDataValidated()) {
      const newMeme: IMeme = {
        image: getFileName(urlImage),
        filename: urlImage,
        title,
        // @ts-ignore
        category: categoryId,
        // @ts-ignore
        owner: state.user?._id,
      };
      onSave(newMeme);
    }
  };

  const onChangeTitle = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (event?.target.value === '') {
      setShowTitleAlert(true);
    }
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
                      placeholder="Escribe un título"
                      minLength={1}
                      maxLength={255}
                      value={title}
                      onChange={onChangeTitle}
                    />
                    {showTitleAlert && (
                      <div className="alert alert-danger" role="alert">
                        Debe ingresar el título
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  {'Categoría: '}
                  <SelectCategory
                    withAllCategory={true}
                    onSelect={(category) => {
                      setCategoryId(category?._id);
                      setCategoryName(category?.name || 'Todos');

                      if (category?._id) {
                        setShowCategoryAlert(false);
                      }
                    }}
                  />
                  {showCategoryAlert && (
                    <div className="alert alert-danger" role="alert">
                      Debe seleccionar una categoría
                    </div>
                  )}
                </div>
              </div>
            )}
            <div>
              <div className="col">
                <button className="btn btn-pink m-2" onClick={onWantToCancel}>
                  Cancelar
                </button>

                {enableCompleteData && (
                  <button className="btn btn-pink m-2" type="button" onClick={onSubmit}>
                    Guardar
                  </button>
                )}
                {askCancel && (
                  <div className="alert alert-danger" role="alert">
                    ¿Está seguro que desea cancelar?
                    <button className="btn btn-pink m-2" onClick={onCancel}>
                      {'si '}
                    </button>
                    <button className="btn btn-pink m-2" onClick={() => setAskCancel(false)}>
                      no
                    </button>
                  </div>
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
