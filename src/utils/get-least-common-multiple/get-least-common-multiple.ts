import getGreatestCommonDivisor from "../get-greatest-common-divisor/get-greatest-common-divisor";

/**
 * Finds least common multiple
 * Based on the https://stackoverflow.com/questions/47047682/least-common-multiple-of-an-array-values-using-euclidean-algorithm/49722579#49722579
 * @param  {number} a first number
 * 
 * @param  {number} b second number
 * 
 * @return {number} greatest common divisor
 */
const getLeastCommonMultiple = (a: number, b: number): number => {
  
  let leastCommonMultiple = 0;

  try {
    leastCommonMultiple = a * b / getGreatestCommonDivisor(a, b);
  }
  catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else if (typeof e === "string") {
      throw new Error(e);
    }
  }

  return leastCommonMultiple;
};

export default getLeastCommonMultiple;