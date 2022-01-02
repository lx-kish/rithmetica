export const getStorage = () => {
  if (typeof Storage !== "undefined") {

    return {
      setItem: (key: string, value: string | Object): void => {
        const v = typeof value === "string" ? value : JSON.stringify(value);
        localStorage.setItem(key, v);
      },
      getItem: (key: string, isObject: boolean): any => {
        const item = localStorage.getItem(key);
        if (isObject && item) {
          return JSON.parse(item);
        }
        return item;
      },
      removeItem: (key: string): void => {
        localStorage.removeItem(key);
      },
      // clear: () => {
      //   localStorage.clear();
      // }
    };
  }
  // return {}
}