import { arithmeticMissing } from "../../../../TS/constatnts/constants";
import randomInteger from "../../randoms/get-random-integer-in-a-range";

/**
 *
 */
function getInputPosition(
  numberOfOperands: number,
  missing: string | undefined
) {
  let input;

  try {
    if (missing === arithmeticMissing.random) {
      input = randomInteger(0, numberOfOperands);
    } else if (missing === arithmeticMissing.first) {
      input = 0;
    } else if (missing === arithmeticMissing.last) {
      input = numberOfOperands - 1;
    } else if (missing === arithmeticMissing.result) {
      input = numberOfOperands;
    }

    return input;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else if (typeof e === "string") {
      throw new Error(e);
    }
  }
}

export default getInputPosition;
