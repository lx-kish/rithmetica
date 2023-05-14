import randomInteger from "../../../../randoms/get-random-integer-in-a-range";
import getLeastCommonMultiple from "../../../../../../utils/get-least-common-multiple/get-least-common-multiple";

import processFractionOperands from "./process-fractions-operands";

/**
 * 
 */
const differentDenominatorsFractions = (operation: string, numberOfOperands: number) => {

  let operands: number[] = [];

  try {

    /**
     *
     */

    // denominators
    let firstDenominator = 0,
      secondDenominator = 0,
      commonDenominator = 0,
      resultDenominator = 0,

      // numerators
      resultNumerator = 0,
      firstNumerator = 0,
      secondNumerator = 0,
      firstInterimNumerator = 0,
      secondInterimNumerator = 0,

      // factor
      factor = 0;

    firstDenominator = randomInteger(2, 9);

    secondDenominator = randomInteger(2, 9);

    commonDenominator = [firstDenominator, secondDenominator].reduce(getLeastCommonMultiple);

    resultDenominator = commonDenominator;

    firstNumerator = randomInteger(1, firstDenominator - 1);

    secondNumerator = randomInteger(1, secondDenominator - 1);

    firstInterimNumerator = commonDenominator / firstDenominator * firstNumerator;

    secondInterimNumerator = commonDenominator / secondDenominator * secondNumerator;

    resultNumerator = firstInterimNumerator + secondInterimNumerator;

    if (operation === '-') {

      // switch values if difference is negative
      if (firstInterimNumerator < secondInterimNumerator) {

        //switch values of 2 variables without using the third one
        // make firstNumerator as a sum of first and second numerators
        firstNumerator = firstNumerator + secondNumerator;
        // new secondNumerator equal sum - secondNumerator
        secondNumerator = firstNumerator - secondNumerator;
        // new firstNumerator equal sum - new secondNumerator
        firstNumerator = firstNumerator - secondNumerator;

        // repeat for the interim numerators
        firstInterimNumerator = firstInterimNumerator + secondInterimNumerator;
        secondInterimNumerator = firstInterimNumerator - secondInterimNumerator;
        firstInterimNumerator = firstInterimNumerator - secondInterimNumerator;

        // repeat the same for the denominators
        firstDenominator = firstDenominator + secondDenominator;
        secondDenominator = firstDenominator - secondDenominator;
        firstDenominator = firstDenominator - secondDenominator;
      }

      // and compute the difference result
      resultNumerator = firstInterimNumerator - secondInterimNumerator;
    }

    operands = processFractionOperands(
      operation,
      firstDenominator,
      secondDenominator,
      commonDenominator,
      resultDenominator,
      firstNumerator,
      secondNumerator,
      firstInterimNumerator,
      secondInterimNumerator,
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

export default differentDenominatorsFractions;