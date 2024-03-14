import React, { useState, useEffect } from "react";

import getNodeOffsetTop from "../../utils/get-node-offset-top/get-node-offset-top";
import useWindowSize from "../use-window-size/use-window-size";

export default function useStickHeaderOnScroll() {
  /**
   * Single state hook useState for all the state properties
   */
  const [displayTabHeader, setDisplayTabHeader] = useState(false);

  const dimensions = useWindowSize();

  /**
   *
   * @param {Boolean} display - passing parameter from the settings component
   *
   * For details see:
   * https://stackoverflow.com/questions/40722382/how-to-pass-state-back-to-parent-in-react
   */
  function getDisplayTabHeader(display: boolean): void {
    setDisplayTabHeader(display);
  }

  /**
   * React hook useEffect for stick header on scrolling
   */
  useEffect(() => {
    const tab: HTMLElement | null = document.getElementById("tab");
    const headerTab: HTMLElement | null =
      document.getElementById("header-stick");

    let tabOffsetTop: number;

    (document as any).fonts.ready.then(() => {
      tabOffsetTop = getNodeOffsetTop(tab);
    });

    function handler(): any {
      if (tab && headerTab) {
        const scrolledDown = window.pageYOffset >= tabOffsetTop;

        if (scrolledDown) headerTab.classList.add("sticky");
        if (!scrolledDown) headerTab.classList.remove("sticky");
      }
    }

    const onLoadCallBack: any = window.addEventListener("load", handler);
    const scrollCallBack: any = window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("load", onLoadCallBack);
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, [displayTabHeader, dimensions]);

  return { displayTabHeader, getDisplayTabHeader, setDisplayTabHeader };
}
