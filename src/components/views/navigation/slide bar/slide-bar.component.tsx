import { ReactElement } from "react";
import { Link } from "react-router-dom";

import { ISectionsAttributes } from "../../../../TS/interfaces/interfaces";
import sections from "../../../../sections";

interface IProps {
  open: boolean;
  hideSliderMenu: () => void;
}

function SlideBar({ open, hideSliderMenu }: IProps): ReactElement {
  function element(link: ISectionsAttributes, i: number) {
    return (
      <Link
        key={i}
        to={{ pathname: link.link }}
        className={`slide-bar__item ${link.className}`}
        onClick={hideSliderMenu}
      >
        {link.name}
      </Link>
    );
  }

  return (
    <nav className={`slide-bar${open ? " is-active" : ""}`}>
      {sections.map((link, i) => element(link, i))}
    </nav>
  );
}

export default SlideBar;
