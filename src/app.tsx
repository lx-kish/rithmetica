import React from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./redux/store";

import MultiplicationTab from "./pages/multiplication-tab/multiplication-tab.page";
import Arithmetic from "./pages/arithmetic/arithmetic.page";
import Fractions from "./pages/fractions/fractions.page";
import { routes } from "./TS/constants/constants";

/**
 * router adapted for github pages, see detailed eplanations at:
 * https://stackoverflow.com/questions/57883297/deploying-reactjs-website-on-github-pages-with-routing-results-in-404-error-on-r
 * https://github.com/facebook/create-react-app/issues/1765
 */
function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path={routes.root} element={<Arithmetic />} />
        <Route
          path={routes.multiplicationTab}
          element={<MultiplicationTab />}
        />
        <Route path={routes.arithmetic} element={<Arithmetic />} />
        <Route path={routes.fractions} element={<Fractions />} />
      </Routes>
    </Provider>
  );
}

export default App;
