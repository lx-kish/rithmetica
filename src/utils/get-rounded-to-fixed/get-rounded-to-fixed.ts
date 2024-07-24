/**
 * detailed explanation: https://stackoverflow.com/questions/7342957/how-do-you-round-to-one-decimal-place-in-javascript/12698296#12698296
 *
 * @param input string or number floating value to round
 * @param precision number of decimal part to round up to
 * @returns
 */

function getRoundedToFixed(input: string | number, precision: number): number {
  let roundedToFixed = -1;
  try {
    if (!input) throw new Error("Input has not been provided!");
    if (!precision) throw new Error("Precision has not been provided!");

    const absPrecision = Math.abs(precision); // only non-negative number is allowed

    const rounder = Math.pow(10, absPrecision);
    roundedToFixed = Number(
      (Math.round(Number(input) * rounder) / rounder).toFixed(absPrecision)
    );
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else if (typeof e === "string") {
      throw new Error(e);
    }
  }

  return roundedToFixed;
}

export default getRoundedToFixed;
