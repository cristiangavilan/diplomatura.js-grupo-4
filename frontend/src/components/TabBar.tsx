import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppState } from '../state';

export const TabBar = () => {
  const state = useAppState();

  return (
    <div className="fixed-bottom float-none bg-light p-4">
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
        {state.loggedIn && (
          <div className="col">
            <NavLink exact to="/upload-meme">
              <i className="fa fa-cloud-upload"></i> Upload
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};
