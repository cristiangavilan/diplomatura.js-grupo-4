import React, { useState, useEffect, Component } from 'react';

type TUploadCloudFileProps = {
  onGetUrlImage?: (urlImg: string) => void;
};

const cloudName = `${process.env.CLOUDINARY_CLOUD_NAME}`; //--> buscar porque el problema es con windows.
const uploadPreset = `${process.env.CLOUDINARY_UPLOAD_PRESET}`;

/**
 * Componente funcional: button upload de cloudinary
 * @param TUploadCloudFileProps props
 */
const UploadCloudFile = ({ onGetUrlImage }: TUploadCloudFileProps) => {
  //chequear process.env, por lo pronto hardcode cloudName y  uploadPreset

  //console.log('cloudName', `${cloudName}`);
  //console.log('process', `${uploadPreset}`);

  const [urlImage, setUrlImage] = useState<string>();

  useEffect(() => {
    return () => {
      console.log('cleaned up');
    };
  }, []);

  const uploadWidget = () => {
    console.log('uploadWidget');
    const widget = window.cloudinary.createUploadWidget(
      { cloudName, uploadPreset, cropping: true },
      (error: any, result: any) => {
        if (!error && result && result.event === 'success') {
          console.log(result.info);
          setUrlImage(result.info.url);
          onGetUrlImage?.(result.info.url);
        } else {
          if (error) {
            console.log(error);
          }
        }
      }
    );
    widget.open();
  };

  return (
    <button className="btn btn-sm btn-outline-pink" onClick={uploadWidget}>
      <i className="fa fa-cloud-upload"></i> Imagen Meme
    </button>
  );
};

export default UploadCloudFile;
