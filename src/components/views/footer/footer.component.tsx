import React, { ReactElement } from "react";

import IconHeart from "../../icons-svg/icon-heart.component";
import IconLxKish from "../../icons-svg/icon-lx-kish.component";

function Footer(): ReactElement {
  return (
    <footer className="footer">
      <p className="footer__version">v11.4.4</p>
      <p className="footer__credentials">
        &#169; 2020 - 2024. Built with
        <span className="footer__icon-box">
          <IconHeart className="footer__icon red" />
        </span>
        by
        <span className="footer__icon-box">
          <IconLxKish className="footer__icon seven" />
        </span>
        Alexander Kish
        {/* </a> */}
      </p>
    </footer>
  );
}

export default Footer;
