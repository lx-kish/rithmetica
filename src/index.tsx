import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import './index.scss';

import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);