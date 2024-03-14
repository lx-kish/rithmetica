import React from "react";

import IconHeart from "../../icons-svg/icon-heart.component";
import IconLxKish from "../../icons-svg/icon-lx-kish.component";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p className="footer__version">v8.4.0</p>
      <p className="footer__credentials">
        &#169; 2020 - 2024. Built with
        <span className="footer__icon-box">
          <IconHeart className="footer__icon red" />
        </span>
        by
        {/* <a
          className="footer__link"
          href="https://lx-kish.github.io/personal-web-page/"
          target="_blank"
          rel="noopener noreferrer"
        > */}
        <span className="footer__icon-box">
          <IconLxKish className="footer__icon seven" />
        </span>
        Alexander Kish
        {/* </a> */}
      </p>
    </footer>
  );
};

export default Footer;
