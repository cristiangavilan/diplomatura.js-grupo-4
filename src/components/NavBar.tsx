import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { useAppState } from '../state';

export const Navbar = () => {
  const state = useAppState();

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="logo" width="200px" />
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink activeClassName="active" className="nav-item nav-link" exact to="/">
            Home
          </NavLink>
        </div>
      </div>

      {state.loggedIn || (
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ml-auto">
            <NavLink activeClassName="active" className="nav-item nav-link" exact to="/login">
              Login
            </NavLink>
          </ul>
        </div>
      )}

      {state.loggedIn && (
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ml-auto">
            <NavLink activeClassName="active" className="nav-item nav-link" exact to="/logout">
              Logout
            </NavLink>
          </ul>
        </div>
      )}
    </nav>
  );
};
