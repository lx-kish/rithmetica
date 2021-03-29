import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';

import './index.scss';

import Routes from './routes';

// import App from './App';

ReactDOM.render(
  <React.StrictMode>

    <HashRouter>
    {/* <BrowserRouter> */}
      <Routes />
    </HashRouter>
    {/* </BrowserRouter> */}
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);