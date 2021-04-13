import React from 'react';

/**
 * 
 * @returns @size [length, width] - the dimentions of the browser window
 * 
 * More details at:
 * https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react
 * 
 */
const useWindowSize = () => {

  const [dimension, setDimension] = React.useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  React.useLayoutEffect(() => {
    const debouncedResizeHandler = debounce(() => {
      setDimension([window.innerWidth, window.innerHeight]);
    }, 100); // 100ms
    window.addEventListener('resize', debouncedResizeHandler);
    debouncedResizeHandler();
    return () => window.removeEventListener('resize', debouncedResizeHandler);
  }, []);
  return dimension;
};

function debounce(fn, ms) {
  let timer;
  return _ => {
    clearTimeout(timer);
    timer = setTimeout(_ => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
};

export default useWindowSize;