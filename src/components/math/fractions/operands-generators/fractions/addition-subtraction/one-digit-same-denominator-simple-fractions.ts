import randomInteger from "../../../../randoms/get-random-integer-in-a-range";
import getFactors from "../../../../../../utils/get-factors/get-factors";
import getGreatestCommonNumber from "../../../../../../utils/get-greatest-common-number/get-greatest-common-number";

import processFractionOperands from "./process-fractions-operands";

/**
 * 
 */
const oneDigitSameDenominatorSimpleFractions = (operation: string, numberOfOperands: number) => {

  let operands: number[] = [];

  try {

    /**
     * 1. define denominator (from 2 to 9).
     * 2. define 2 numerators (a) less, than denominator; b) if subtraction, the last less than the first)
     * 3. check, if can be simplified
     * 4. answer is the next step if cannot be simplified
     * 5. + one extra step for simplifying if can be simplified
     */

    // denominators
    let firstDenominator = 0,
      secondDenominator = 0,
      commonDenominator = 0,
      resultDenominator = 0,
      theBiggestNumber = 0,
      theSecondRandomNumber = 0,
      theThirdRandomNumber = 0,
      // numerators
      resultNumerator = 0,
      firstNumerator = 0,
      secondNumerator = 0;

    let foundRightNumbers = false;

    while (!foundRightNumbers) {

      firstDenominator = randomInteger(3, 9);

      secondDenominator = firstDenominator;

      commonDenominator = firstDenominator;

      resultDenominator = commonDenominator;

      // numerators
      theBiggestNumber = randomInteger(2, resultDenominator - 1);

      theSecondRandomNumber = randomInteger(1, theBiggestNumber - 1);

      theThirdRandomNumber = theBiggestNumber - theSecondRandomNumber;

      resultNumerator = theBiggestNumber;

      firstNumerator = theSecondRandomNumber;

      secondNumerator = theThirdRandomNumber;

      if (operation === "-") {
        firstNumerator = theBiggestNumber;
        secondNumerator = theSecondRandomNumber;
        resultNumerator = theThirdRandomNumber;
      }

      // check if the result fraction can be reduced - it shouldn't be
      // if it can, then call recurently
      let greatestCommonFactor = 0;
      greatestCommonFactor = getGreatestCommonNumber(getFactors(resultNumerator), getFactors(resultDenominator));
      if (greatestCommonFactor <= 1) foundRightNumbers = true;
    }

    operands = processFractionOperands(
      operation,
      firstDenominator,
      secondDenominator,
      commonDenominator,
      resultDenominator,
      firstNumerator,
      secondNumerator,
      resultNumerator
    );

  }
  catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else if (typeof e === "string") {
      throw new Error(e);
    }
  }

  return operands;
};

export default oneDigitSameDenominatorSimpleFractions;