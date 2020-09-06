import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from '../components/NavBar';
import { Login } from '../pages/Login';
import { Logout } from '../pages/Logout';
import { Home } from '../pages/Home';
import { MemeDetail } from '../pages/MemeDetail';
import { Register } from '../pages/Register';
import { SignIn } from '../pages/SignIn';
import { UploadMeme } from '../pages/UploadMeme';

export const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <div
        style={{
          marginBottom: '5rem',
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/logout" component={Logout} />
          <Route path="/meme-detail" component={MemeDetail} />
          <Route path="/upload-meme" component={UploadMeme} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
