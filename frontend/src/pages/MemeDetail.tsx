import { IMemeDetails } from 'memegram-commons/models/Meme.model';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CommentGrid } from '../components/CommentGrid';
import { MemeSdk } from '../sdk/MemeSdk';
import moment from 'moment';
import { UserInfo } from '../components/UserInfo';

export const MemeDetail = () => {
  const { id } = useParams<{ id: string }>();

  const [meme, setMeme] = useState<IMemeDetails | undefined>(undefined);

  useEffect(() => {
    MemeSdk.getMemeById(id).then((m) => setMeme(m));
  }, [id]);

  if (meme) {
    console.log(meme);
    return (
      <div className="container">
        <div className="card border-pink m-2">
          <div className="card-header text-capitalize">
            <UserInfo user={meme.owner} /> <strong>{meme.title}</strong>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <img src={meme.filename} alt="Futbol" width="100%" />
              </div>
            </div>
            <div className="row">
              <div className="col text-pink m-2 p-2">Vote Component</div>
              <div className="col text-pink text-right m-2 p-2">{moment(meme.createdAt).fromNow()}</div>
            </div>
          </div>

          <div className="card-footer">
            <div className="row">
              <div className="col">{meme && <CommentGrid meme={meme} />}</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>No hay meme</p>;
  }
};
