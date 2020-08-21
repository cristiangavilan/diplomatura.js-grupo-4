import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from '../components/NavBar';
import { Login } from '../pages/Login';
import { Logout } from '../pages/Logout';
import { Home } from '../pages/Home';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
