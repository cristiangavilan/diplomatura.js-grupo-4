import React from 'react';
import { IMemeListItem } from 'memegram-commons/models/Meme.model';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { UserInfo } from './UserInfo';

export const MemeCard = ({
  _id,
  title,
  filename,
  owner,
  category,
  comments,
  voteUp,
  voteDown,
  createdAt,
}: IMemeListItem) => {
  return (
    <div className="card border-pink">
      <div className="card-header text-capitalize">
        <UserInfo user={owner} />
        <div className="row">
          <div className="col text-center">
            <h5>
              <strong>{title}</strong>
            </h5>
          </div>
        </div>
      </div>

      <div className="card-body">
        <img src={filename} alt="Futbol" width="100%" />
        <div className="row mt-2">
          <div className="col text-left">{comments} comentarios</div>
          <div className="col text-right">
            <Link className="btn btn-sm btn-outline-pink" to={`meme-detail/${_id}`}>
              <i className="fas fa-eye"></i> Ver más...
            </Link>
          </div>
        </div>
      </div>

      <div className="card-footer">
        <div className="row">
          <div className="col text-light">
            <span className="text-pink m-1 p-2">
              {voteUp} <i className="fas fa-thumbs-up"></i>
            </span>
            <span className="text-pink m-1 p-2">
              {voteDown} <i className="fas fa-thumbs-down"></i>
            </span>
          </div>
          <div className="col text-right">
            <p>{category?.name}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="text-muted">{moment(createdAt).fromNow()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
