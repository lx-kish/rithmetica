import React from "react";

import getNodeOffsetTop from "../../utils/get-node-offset-top/get-node-offset-top";
import useWindowSize from "../use-window-size/use-window-size";

export default function useStickHeaderOnScroll() {
  /**
   * Single state hook useState for all the state properties
   */
  const [display, setDisplay] = React.useState(false);

  const dimensions = useWindowSize();

  /**
   *
   * @param {Boolean} display - passing parameter from the settings component
   *
   * For details see:
   * https://stackoverflow.com/questions/40722382/how-to-pass-state-back-to-parent-in-react
   */
  const getDisplay = (display: boolean): void => {
    setDisplay(display);
  };

  /**
   * React hook useEffect for stick header on scrolling
   */
  React.useEffect(() => {
    const tab: HTMLElement | null = document.getElementById("tab");
    const headerTab: HTMLElement | null =
      document.getElementById("header-stick");

    let tabOffsetTop: number;

    (document as any).fonts.ready.then(() => {
      tabOffsetTop = getNodeOffsetTop(tab);
    });

    const scrollCallBack: any = window.addEventListener("scroll", () => {
      if (tab && headerTab) {
        const scrolledDown = window.pageYOffset >= tabOffsetTop;

        if (scrolledDown) headerTab.classList.add("sticky");
        if (!scrolledDown) headerTab.classList.remove("sticky");
      }
    });

    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, [display, dimensions]);

  return { display, getDisplay, setDisplay };
}
