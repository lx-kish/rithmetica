import randomInteger from "../../../../randoms/get-random-integer-in-a-range";
// import getFactors from "../../../../../../utils/get-factors/get-factors";
// import getGreatestCommonNumber from "../../../../../../utils/get-greatest-common-number/get-greatest-common-number";

import processFractionOperands from "./process-fractions-operands";

/**
 * 
 */
const oneDigitSameDenominatorMixedSimplifiedFractions = (operation: string, numberOfOperands: number) => {

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
      simplifiedDenominator = 0,
      SimplifiedNumerator = 0,

      // numerators
      resultNumerator = 0,
      firstNumerator = 0,
      secondNumerator = 0,

      // factor
      factor = 0;

    simplifiedDenominator = randomInteger(2, 4);

    SimplifiedNumerator = randomInteger(simplifiedDenominator + 1, simplifiedDenominator * 2 - 2);

    factor = simplifiedDenominator < 4 ? randomInteger(2, 3) : 2;

    resultDenominator = simplifiedDenominator * factor;

    firstDenominator = resultDenominator;

    secondDenominator = resultDenominator; 
    
    commonDenominator = resultDenominator;

    resultNumerator = SimplifiedNumerator * factor;

    firstNumerator = randomInteger(resultNumerator - resultDenominator + 1, resultDenominator - 1);

    secondNumerator = resultNumerator - firstNumerator;

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

export default oneDigitSameDenominatorMixedSimplifiedFractions;