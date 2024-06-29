import { ReactElement } from "react";

import sections from "../../../sections";

interface IProps {
  pageName: string;
  children: ReactElement;
}

function Header({ pageName, children }: IProps): ReactElement {
  const sectionSettings = sections.find((el) => el.link === pageName);

  return (
    <header className="header header--multiplication-tab">
      <h1 className="header__title">{sectionSettings?.name}</h1>
      <h3 className="header__title--small">{sectionSettings?.motto}</h3>
      {children}
    </header>
  );
}

export default Header;
