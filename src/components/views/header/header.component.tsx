import React, { ReactElement } from "react";

import { useLocation } from "react-router-dom";

import sections from "../../../sections";
// import Timer from "../../../timer/timer.component";

export default function Header({ children }: any): ReactElement {
  const location = useLocation();

  const sectionSettings = sections.find((el) => el.link === location.pathname);

  return (
    <header className="header header--multiplication-tab">
      {/* <Timer /> */}
      <h1 className="header__title">{sectionSettings?.name}</h1>
      <h3 className="header__title--small">{sectionSettings?.motto}</h3>
      {children}
    </header>
  );
}
