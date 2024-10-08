/**
 * Handles key-down event, runs key validation,
 * decline input of the key if invalid
 * @param  {num} number value, which factors are getting, bigger than 0
 *
 * @return {Array} array of numbers - factors of a num
 */
function getFactors(num: number): number[] {
  let argument = num;
  let result: number[] = [];

  try {
    // processing of receiving 0 or negative input
    if (argument <= 0)
      throw new Error(
        `Cannot calculate factors of ${
          argument === 0 ? "0" : "negative value"
        }!`
      );

    // processing of receiving float instead of number
    if (argument !== Math.round(argument)) argument = Math.floor(argument);
    const minFactors: number[] = [];
    const maxFactors: number[] = [];

    for (let i = 1; i <= Math.trunc(argument / 2); i++) {
      if (maxFactors.length && i >= maxFactors[0]) break;

      if (!(argument % i)) {
        // if remainder is 0

        const factor = argument / i;
        maxFactors.unshift(factor);

        if (factor !== i) {
          minFactors.push(i);
        }
      }
    }

    result = [...minFactors, ...maxFactors];
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else if (typeof e === "string") {
      throw new Error(e);
    }
  } finally {
    return result;
  }
}

export default getFactors;
