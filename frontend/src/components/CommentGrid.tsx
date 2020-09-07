import React from 'react';
import { Comment } from './Comment';
import { AddComment } from './AddComment';

export const CommentGrid = () => {
  return (
    <>
      <div className="row">
        {/* <div className="col">Total Comments</div> */}
        <div className="col">
          <AddComment />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Comment />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Comment />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Comment />
        </div>
      </div>
    </>
  );
};
