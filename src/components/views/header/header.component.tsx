import { ReactElement } from "react";

import { useLocation } from "react-router-dom";

import sections from "../../../sections";
import { routes } from "../../../TS/constatnts/constants";

export default function Header({ children }: any): ReactElement {
  const location = useLocation();

  const sectionName =
    location.pathname !== routes.root ? location.pathname : routes.arithmetic;

  const sectionSettings = sections.find((el) => el.link === sectionName);

  return (
    <header className="header header--multiplication-tab">
      <h1 className="header__title">{sectionSettings?.name}</h1>
      <h3 className="header__title--small">{sectionSettings?.motto}</h3>
      {children}
    </header>
  );
}
