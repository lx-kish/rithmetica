import React from "react";

export const useInputScrollRefCallback = (): ((
  node: HTMLInputElement
) => void) => {
  /**
   * Prevents default on passive event listener onWheel,
   * for details see:
   * https://stackoverflow.com/questions/63663025/react-onwheel-handler-cant-preventdefault-because-its-a-passive-event-listenev
   * https://github.com/facebook/react/pull/19654
   * https://stackoverflow.com/questions/54346040/react-hooks-ref-is-not-available-inside-useeffect/63033314#63033314
   * https://legacy.reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node
   */
  const onWheel = React.useCallback((e: WheelEvent) => {
    e.preventDefault();
  }, []);

  const inputRefCallback = React.useCallback(
    (node: HTMLInputElement) => {
      if (node == null) return;

      node.addEventListener("wheel", onWheel, { passive: false });
    },
    [onWheel]
  );

  return inputRefCallback;
};
