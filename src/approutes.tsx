import React from "react";
import { Routes, Route } from "react-router-dom";

import MultiplicationTab from "./pages/multiplication-tab/multiplication-tab.page";
import Arithmetic from "./pages/arithmetic/arithmetic.page";
import Fractions from "./pages/fractions/fractions.page";
import { routes } from "./TS/constatnts/constants";

/**
 * router adapted for github pages, see detailed eplanations at:
 * https://stackoverflow.com/questions/57883297/deploying-reactjs-website-on-github-pages-with-routing-results-in-404-error-on-r
 * https://github.com/facebook/create-react-app/issues/1765
 */
const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routes.root} element={<Arithmetic />} />
      <Route path={routes.multiplicationTab} element={<MultiplicationTab />} />
      <Route path={routes.arithmetic} element={<Arithmetic />} />
      <Route path={routes.fractions} element={<Fractions />} />
    </Routes>
  );
};

export default AppRoutes;
