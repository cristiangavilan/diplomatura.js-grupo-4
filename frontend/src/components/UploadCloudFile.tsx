import React, { useState, useEffect } from 'react';

type TUploadCloudFileProps = {
  onGetUrlImage: (urlImg: string) => void;
  buttonText?: string;
};

const cloudName = `${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || 'diplomatura-js-grupo-4'}`; //--> buscar porque el problema es con windows.
const uploadPreset = `${process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET || 'tjudivfq'}`;

/**
 * Componente funcional: button upload de cloudinary
 */
const UploadCloudFile = ({ onGetUrlImage, buttonText }: TUploadCloudFileProps) => {
  const [urlImage, setUrlImage] = useState<string>('');

  useEffect(() => {
    onGetUrlImage(urlImage);
  }, [urlImage, onGetUrlImage]);

  const uploadWidget = () => {
    const widget = window.cloudinary.createUploadWidget(
      { cloudName, uploadPreset, cropping: true },
      (error: any, result: any) => {
        let crop: string = '';
        if (error) {
          console.error('uploadWidget error', error);
        } else if (result?.event === 'success') {
          console.info('uploadWidget', result);
          const coordenadas = result.info?.coordinates?.custom?.[0];
          let urlImg = result.info.url;
          if (coordenadas) {
            crop =
              '/upload/' +
              'x_' +
              coordenadas[0] +
              ',y_' +
              coordenadas[1] +
              ',w_' +
              coordenadas[2] +
              ',h_' +
              coordenadas[3] +
              ',c_crop/';

            const firstString = urlImg?.substring(0, urlImg.indexOf('/upload/')) || '';
            const edu = 'no mires esto';
            const lastString = urlImg?.substring(urlImg.indexOf('/upload/') + `${'/upload/'}`.length) || '';
            urlImg = firstString + crop + lastString;
          }
          setUrlImage(urlImg);
        }
      }
    );

    widget.open();
  };

  return (
    <div className="row mt-2">
      <div className="col text-center">
        <button className="btn btn-lg btn-outline-pink" onClick={uploadWidget}>
          <i className="fa fa-cloud-upload"></i>
          {buttonText ? ' ' + buttonText : ' Imagen Meme'}
        </button>
      </div>
    </div>
  );
};

export default UploadCloudFile;
