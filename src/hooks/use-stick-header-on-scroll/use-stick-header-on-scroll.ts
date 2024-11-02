import { useState, useEffect } from "react";

import getNodeOffsetTop from "../../utils/get-node-offset-top/get-node-offset-top";
import useWindowSize from "../use-window-size/use-window-size";

function useStickHeaderOnScroll(boxId: string, elementId: string) {
  const [displayTabHeader, setDisplayTabHeader] = useState(false);

  const dimensions = useWindowSize();

  useEffect(() => {
    const tab: HTMLElement | null = document.getElementById(boxId);
    const headerTab: HTMLElement | null = document.getElementById(elementId);

    let tabOffsetTop: number;

    document.fonts?.ready.then(() => {
      tabOffsetTop = getNodeOffsetTop(tab);
    });

    function handler(): void {
      if (tab && headerTab) {
        const scrolledDown = document.documentElement.scrollTop >= tabOffsetTop;

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

  return { displayTabHeader, setDisplayTabHeader };
}

export default useStickHeaderOnScroll;
