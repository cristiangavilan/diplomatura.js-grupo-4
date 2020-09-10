import React from 'react';
import { Comment } from './Comment';
import { AddComment } from './AddComment';
import { IMemeDetails } from 'memegram-commons/models/Meme.model';

interface ICommentGridProps {
  meme: IMemeDetails;
}

export const CommentGrid = ({ meme }: ICommentGridProps) => {
  console.log(meme);
  return (
    <>
      <div className="row">
        {/* <div className="col">Total Comments</div> */}
        <div className="col">
          <AddComment comments={meme.comments} />
        </div>
      </div>
      {meme.comments.map((c) => {
        return (
          <div className="row">
            <div className="col">
              <Comment comment={c} />
            </div>
          </div>
        );
      })}
    </>
  );
};
