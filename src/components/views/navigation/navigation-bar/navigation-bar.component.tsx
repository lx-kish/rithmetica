import React, { ReactElement, useEffect, useState } from "react";

import BurgerIcon from "../burger icon/icon-burger.component";
import SlideBar from "../slide bar/slide-bar.component";

function NavigationBar(): ReactElement {
  /**
   * Application navigation menu component
   *
   *
   */

  const [open, setOpen] = useState(false);

  function handleSetOpen() {
    setOpen(false);
  }

  /**
   * React hook useEffect for prevent body from scrolling on open modal
   */
  useEffect(() => {
    if (open) document.body.classList.add("body-fixed");
    if (!open) document.body.classList.remove("body-fixed");
  }, [open]);

  return (
    <div className="navigation">
      <div
        className={`navigation__bg${open ? " is-active" : ""}`}
        onClick={handleSetOpen}
      />
      <BurgerIcon open={open} setOpen={() => setOpen(!open)} />
      <SlideBar open={open} hideSliderMenu={handleSetOpen} />
    </div>
  );
}

export default NavigationBar;
