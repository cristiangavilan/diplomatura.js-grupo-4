import { IMemeDetails } from 'memegram-commons/models/Meme.model';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CommentGrid } from '../components/CommentGrid';
import { MemeSdk } from '../sdk/MemeSdk';
import moment from 'moment';
import { UserInfo } from '../components/UserInfo';
import { Vote } from '../components/Vote';
import { useAppState } from '../state';

export const MemeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const state = useAppState();
  const [meme, setMeme] = useState<IMemeDetails | undefined>(undefined);

  useEffect(() => {
    MemeSdk.getMemeById(id).then((m) => setMeme(m));
  }, [id]);

  if (meme) {
    return (
      <div className="container">
        <div className="card border-pink m-2">
          <div className="card-header text-capitalize">
            <UserInfo user={meme.owner} />{' '}
            <h5 className="text-center">
              <strong>{meme.title}</strong>
            </h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <img src={meme.filename} alt="Futbol" width="100%" />
              </div>
            </div>
            <div className="row">
              <div className="col text-muted m-1">{moment(meme.createdAt).fromNow()}</div>
            </div>
            {state.user && (
              <div className="row">
                <div className="col text-pink m-1">
                  <Vote
                    countVoteUp={meme.voteUp}
                    countVoteDown={meme.voteDown}
                    flagVoteUp={meme.voted === 'up'}
                    flagVoteDown={meme.voted === 'down'}
                    memeId={meme._id}
                  />
                </div>
              </div>
            )}
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
