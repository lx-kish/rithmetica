import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';

import Routes from './routes';

// import App from './App';

ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);