import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { useAppState } from '../state';
import { UserInfo } from './UserInfo';

export const Navbar = () => {
  const state = useAppState();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
    window.scrollTo(0, 0);
  };
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== true) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
    //equivalente a componentWillUnmount()
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  });

  return (
    <nav
      className={
        scrolled
          ? 'navbar navbar-expand-sm navbar-light bg-light scrolled'
          : 'navbar navbar-expand-sm navbar-light bg-light'
      }
    >
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
          <li onClick={handleNavCollapse}>
            <NavLink className="nav-item nav-link" exact to="/">
              <i className="fas fa-home"></i> Home
            </NavLink>
          </li>

          {state.loggedIn || (
            <li onClick={handleNavCollapse}>
              <NavLink className="nav-item nav-link" exact to="/login">
                <i className="fa fa-sign-in"></i> Login
              </NavLink>
            </li>
          )}
          {state.loggedIn && (
            <>
              <li onClick={handleNavCollapse}>
                <NavLink className="nav-item nav-link" exact to="/upload-meme">
                  <i className="fa fa-cloud-upload"></i> Upload
                </NavLink>
              </li>
              <li onClick={handleNavCollapse}>
                <NavLink className="nav-item nav-link" exact to="/logout">
                  <i className="fa fa-sign-out"></i> Logout
                </NavLink>
              </li>
              <li onClick={handleNavCollapse}>
                <NavLink className="nav-item nav-link" exact to="/profile">
                  {state.user && <UserInfo user={state.user} />}
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};
