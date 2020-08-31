import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { useAppState } from '../state';

export const Navbar = () => {
  const state = useAppState();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="row">
        <div className="col">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" width="100%" style={{ maxWidth: 300 }} />
          </Link>
        </div>
        <div className="col text-right">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>

      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li>
            <NavLink activeClassName="active" className="nav-item nav-link" exact to="/">
              Home
            </NavLink>
          </li>
          {state.loggedIn || (
            <li>
              <NavLink activeClassName="active" className="nav-item nav-link" exact to="/login">
                Login
              </NavLink>
            </li>
          )}

          {state.loggedIn && (
            <li>
              <NavLink activeClassName="active" className="nav-item nav-link" exact to="/logout">
                Logout
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};
