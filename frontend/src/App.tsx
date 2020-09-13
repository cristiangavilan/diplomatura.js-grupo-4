import React from 'react';
import { AppRouter } from './routers/AppRouter';
import { AppState } from './state';
import 'moment/locale/es-us';

function App() {
  return (
    <AppState>
      <AppRouter />
    </AppState>
  );
}

export default App;
