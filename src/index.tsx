import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const root = document.querySelector('#root');

ReactDOM.render(<App />, root);

serviceWorker.unregister();
