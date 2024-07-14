import { useMemo, useLayoutEffect, useRef } from "react";
import debounce from "../../utils/debounce/debounce";

/**
 *
 * https://www.epicreact.dev/how-react-uses-closures-to-avoid-bugs
 * https://www.epicreact.dev/the-latest-ref-pattern-in-react
 * https://stackoverflow.com/questions/75556418/how-to-use-debounce-hooks-in-react/75556865#75556865
 *
 * @param callback - function to debounce
 * @param delay - number of millisecinds
 * @returns
 */
function useDebounce<Params extends any[]>(
  callback: (...args: Params) => any,
  delay: number
) {
  const callbackRef = useRef(callback);

  useLayoutEffect(() => {
    callbackRef.current = callback;
  });

  return useMemo(
    () => debounce((...args: Params) => callbackRef.current(...args), delay),
    [delay]
  );
}

export default useDebounce;
