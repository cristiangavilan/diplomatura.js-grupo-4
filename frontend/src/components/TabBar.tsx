import React from 'react';

export const TabBar = () => {
  return (
    <div className="fixed-bottom p-3 bg-light">
      <div className="row">
        <div className="col">
          <i className="fas fa-home"></i> Home
        </div>
        <div className="col">
          <i className="fas fa-user"></i> Profile
        </div>
        <div className="col">
          <i className="fas fa-search"></i> Category
        </div>
      </div>
    </div>
  );
};
