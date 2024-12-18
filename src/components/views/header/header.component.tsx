import { ReactElement } from "react";

import sections from "../../../sections";

interface IProps {
  pageName?: string;
  children?: ReactElement | string | undefined;
}

function Header({ pageName, children }: IProps): ReactElement | undefined {
  const sectionSettings = sections.find((el) => el.link === pageName);

  return (
    <header className="header header--multiplication-tab">
      {sectionSettings && (
        <h1 className="header__title">{sectionSettings?.name}</h1>
      )}
      {sectionSettings && (
        <h3 className="header__title--small">{sectionSettings?.motto}</h3>
      )}
      {children}
    </header>
  );
}

export default Header;
