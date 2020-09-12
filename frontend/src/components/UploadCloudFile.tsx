import React, { useState, useEffect } from 'react';

type TUploadCloudFileProps = {
  onGetUrlImage: (urlImg: string) => void;
  buttonText?: string;
};

const cloudName = `${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}`; //--> buscar porque el problema es con windows.
const uploadPreset = `${process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET}`;

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
        if (error) {
          console.error('uploadWidget error', error);
        } else if (result?.event === 'success') {
          console.info('uploadWidget', result);
          setUrlImage(result.info.url);
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
