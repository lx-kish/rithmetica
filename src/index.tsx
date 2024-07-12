import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";

import App from "./app";

const container = document.getElementById("root");
const rootContainer = createRoot(container as HTMLElement); // createRoot(container!) if you use TypeScript
rootContainer.render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.VITE_PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
