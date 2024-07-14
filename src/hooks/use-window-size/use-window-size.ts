import React, { useLayoutEffect, useState } from "react";
import useDebounce from "../useDebounce/useDebounce";

/**
 *
 * @returns {dimensions} [window.innerWidth, window.innerHeight] - the dimentions of the browser window
 *
 * More details at:
 * https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react
 *
 */
function useWindowSize(): number[] {
  const [dimensions, setDimensions] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useLayoutEffect(() => {
    const resizeHandler = () => {
      useDebounce(
        () => setDimensions([window.innerWidth, window.innerHeight]),
        100 // 100ms
      );
    };
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);
  return dimensions;
}

export default useWindowSize;
