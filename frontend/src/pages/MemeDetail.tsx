import React from 'react';
// import { MemeCard } from '../components/MemeCard';
import { CommentGrid } from '../components/CommentGrid';

export const MemeDetail = () => {
  return (
    <div className="container">
      <h3>MemeDetail</h3>
      <div className="row">
        <div className="col">
          {/* <MemeCard /> */}
          <CommentGrid />
        </div>
      </div>
    </div>
  );
};
