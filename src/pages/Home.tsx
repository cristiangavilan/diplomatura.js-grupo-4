import React from 'react';
import { useAppState } from '../state';

export const Home = () => {
  const state = useAppState();

  return (
    <div>
      <h1>Home Page</h1>
      {state.loggedIn && <h3>Welcome {state.user?.username}!</h3>}
    </div>
  );
};
