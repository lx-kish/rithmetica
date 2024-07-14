/**
 * Checks if the value passed is a valid number
 * Based on the https://stackoverflow.com/questions/175739/how-can-i-check-if-a-string-is-a-valid-number,
 * https://stackoverflow.com/questions/1323314/how-to-detect-if-a-given-number-is-an-integer/1323325#1323325,
 *
 * @param  {any} val value to check
 *
 * @return {boolean}
 */
function isNumeric(val: any): boolean {
  try {
    return isFinite(Number(String(val).trim() || NaN));
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else if (typeof e === "string") {
      throw new Error(e);
    }
  }

  return false;
}

export default isNumeric;
