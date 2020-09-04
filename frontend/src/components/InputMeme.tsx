import React, { useState, useEffect } from 'react';
import UploadCloudFile from '../components/UploadCloudFile';
import { NavLink } from 'react-router-dom';
import { ICategory } from 'memegram-commons/models/Category.model';
import { Meme } from 'memegram-commons/models/Meme.model';

type TInputMeme = {
  categories: ICategory[];
  onGetMemeToSave: (meme: Meme) => void;
};

const onCancel = () => {
  console.log('InputMeme.tsx', 'onCancel');
};

const InputMeme = ({ categories, onGetMemeToSave }: TInputMeme) => {
  const [meme, setMeme] = useState<Meme>();
  const [urlImage, setUrlImage] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [category, setCategory] = useState<ICategory>();
  const [enableCompleteData, setEnableCompleteData] = useState<boolean>(false); //hasta que no cargue la imagen no se deberia habilitar el boton guardar, label titulo, select categoria.

  const getUrlImage = (url: string) => {
    console.log('InputMeme.txt', 'getUrlImage');
    if (url) {
      setUrlImage(url);
    }
  };

  const getFileName = (urlImage: string | undefined): string | undefined => {
    const fileNameUrl: string | undefined = urlImage?.substring(urlImage.lastIndexOf('/'));
    return fileNameUrl;
  };

  const onSubmit = (event: any) => {
    event.preventDefault(); //evita que refresque la pagina
    console.log('InputMeme.txt', 'onSubmit');
    console.log('InputMeme.txt', event);
    //const fileNameUrl: { getFileName(urlImage) };
    //const newMeme: Meme = { image: urlImage, filename: fileNameUrl };
  };

  const onChangeTitle = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const newTitle: string = event ? event?.target.value : '';
    setTitle(newTitle);
  };

  const onChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const idCategory: string = event ? event.target.value : '';
    const category = categories.find((categ) => categ._id === idCategory);
    setCategory(category);
  };

  useEffect(() => {
    return () => {
      console.log('InputMeme.txt', 'useEffect');
      if (!enableCompleteData) {
        setEnableCompleteData(true);
      }
    };
  }, [urlImage]);

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
                  <strong>{category?.name}</strong>
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
              <form id="formMeme">
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
                        onChange={onChangeTitle}
                      />
                    </div>
                  </div>
                  <div>
                    {'Categoría: '}
                    <select id="categoryId" name="name" className="custom-select" onChange={onChangeCategory} required>
                      <option value="" selected disabled>
                        Elegí una categoria
                      </option>
                      {categories.map((category) => (
                        <option value={category._id} key={category._id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </form>
            )}
            <div>
              <div className="col">
                <NavLink exact to="/Home">
                  <button className="btn-pink m-2" onClick={onCancel}>
                    Cancelar
                  </button>
                </NavLink>

                {enableCompleteData && (
                  <button form="formMeme" className="btn-pink m-2" type="submit" onSubmit={onSubmit}>
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
