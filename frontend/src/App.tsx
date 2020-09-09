import React from 'react';
import { initAxiosInstance } from './utils/axios.util';
import { AppRouter } from './routers/AppRouter';
import { AppState } from './state';
import 'moment/locale/es-us';

function App() {
  initAxiosInstance();

  return (
    <AppState>
      <AppRouter />
    </AppState>
  );
}

export default App;
