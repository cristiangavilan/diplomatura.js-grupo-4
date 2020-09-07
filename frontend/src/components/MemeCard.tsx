import React from 'react';
import { IMeme } from 'memegram-commons/models/Meme.model';
import { Link } from 'react-router-dom';

export const MemeCard = ({ _id, title, filename, owner, comments, voteUp, voteDown, createdAt }: IMeme) => {
  return (
    <div className="card border-pink">
      <div className="card-header text-capitalize">
        <img className="rounded" src={owner.img} alt="user" width="30" /> <strong>{title}</strong>
      </div>

      <div className="card-body">
        <img src={filename} alt="Futbol" width="100%" />
        <div className="row mt-2">
          <div className="col text-left">{comments?.length} comentarios</div>
          <div className="col text-right">
            <Link className="btn btn-sm btn-outline-pink" to={`meme-detail/${_id}`}>
              <i className="fas fa-eye"></i> Ver más...
            </Link>
          </div>
        </div>
      </div>

      <div className="card-footer">
        <div className="row">
          <div className="col-6 text-light">
            <span className="badge badge-pink m-1 p-1">
              <i className="fas fa-thumbs-up"></i> {voteUp?.length}
            </span>
            <span className="badge badge-pink m-1 p-1">
              <i className="fas fa-thumbs-down"></i> {voteDown?.length}
            </span>
          </div>
          <div className="col-6 text-right">
            <p className="text-muted">2 days ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};
