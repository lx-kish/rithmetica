import React, { ReactElement } from "react";

import IconHeart from "../../icons-svg/icon-heart.component";
import IconLxKish from "../../icons-svg/icon-lx-kish.component";

function Footer(): ReactElement {
  return (
    <footer className="footer">
      <p className="footer__version">v11.7.2</p>
      <p className="footer__credentials">
        &#169; 2020 - 2024. Built with
        <IconHeart className="footer__icon red" />
        by
        <IconLxKish className="footer__icon seven" />
        Alexander Kish
      </p>
    </footer>
  );
}

export default Footer;
