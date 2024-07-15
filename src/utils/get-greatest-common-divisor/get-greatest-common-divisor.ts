import isNumeric from "../is-numeric/is-numeric";

/**
 * Finds the greatest common divisor
 * Based on the https://stackoverflow.com/questions/47047682/least-common-multiple-of-an-array-values-using-euclidean-algorithm/49722579#49722579
 * @param  {number} a first number
 *
 * @param  {number} b second number
 *
 * @return {number} greatest common divisor
 */
function getGreatestCommonDivisor(a: number, b: number): number {
  let greatestCommonDivisor = 0;

  try {
    // to have greatest common divisor both values should be numeric
    if (!isNumeric(a)) throw new Error(`Found non-numeric value: ${a}`);
    if (!isNumeric(b)) throw new Error(`Found non-numeric value: ${b}`);

    greatestCommonDivisor = a ? getGreatestCommonDivisor(b % a, a) : b;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else if (typeof e === "string") {
      throw new Error(e);
    }
  }

  return Math.abs(greatestCommonDivisor); // GCD is always positive by definition
}

export default getGreatestCommonDivisor;
