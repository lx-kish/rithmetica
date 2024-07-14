/**
 * More details at:
 * https://stackoverflow.com/questions/51040703/what-return-type-should-be-used-for-settimeout-in-typescript/51040768#51040768
 * https://stackoverflow.com/questions/59104425/typescript-debounce-function-not-calling-function-passed-as-parameter/59104590#59104590
 *
 */
function debounce<Params extends any[]>(
  func: (...args: Params) => any,
  timeout: number
): (...args: Params) => void {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Params) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}

export default debounce;

/**
 * for testing see:
 * https://testing-library.com/docs/dom-testing-library/example-intro/
 */
