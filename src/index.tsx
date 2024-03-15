import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "./redux/store";

import "./index.scss";

import AppRoutes from "./approutes";

const container = document.getElementById("root");
const rootContainer = createRoot(container as HTMLElement); // createRoot(container!) if you use TypeScript
rootContainer.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
