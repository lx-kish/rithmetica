import randomInteger from "../../../randoms/get-random-integer-in-a-range";
import getLeastCommonMultiple from "../../../../../utils/get-least-common-multiple/get-least-common-multiple";

import processFractionOperands from "../process-fractions-operands";

import { IFractionProblemOperands } from "../../../../../TS/interfaces/interfaces";

/**
 *
 */
function singleDigitDifferentDenominatorsImproperFractions(
  operation: string,
  numberOfOperands: number
) {
  let operands: IFractionProblemOperands = {
    operation: "",
    firstDenominator: 0,
    secondDenominator: 0,
    resultDenominator: 0,
    firstNumerator: 0,
    secondNumerator: 0,
    interimNumerator1: 0,
    interimNumerator2: 0,
    interimDenominator1: 0,
    interimDenominator2: 0,
    commonDenominator: 0,
    integer: 0,
    remainedNumerator: 0,
    remainedDenominator: 0,
    resultNumerator: 0,
    simplifiedNumerator: 0,
    simplifiedDenominator: 0,
  };
  // let operands: IFractionProblemOperands = {};

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
      interimNumerator1 = 0,
      interimNumerator2 = 0,
      interimDenominator1 = 0,
      interimDenominator2 = 0;

    // factor
    while (!resultNumerator) {
      // make first and second denominators unequal
      while (firstDenominator === secondDenominator) {
        firstDenominator = randomInteger(2, 9);

        secondDenominator = randomInteger(2, 9);
      }

      commonDenominator = [firstDenominator, secondDenominator].reduce(
        getLeastCommonMultiple
      );

      interimDenominator1 = commonDenominator;

      resultDenominator = commonDenominator;

      firstNumerator = randomInteger(
        firstDenominator + 1,
        firstDenominator + firstDenominator - 1
      );

      secondNumerator = randomInteger(
        secondDenominator + 1,
        secondDenominator + secondDenominator - 1
      );

      interimNumerator1 =
        (commonDenominator / firstDenominator) * firstNumerator;

      interimNumerator2 =
        (commonDenominator / secondDenominator) * secondNumerator;

      resultNumerator = interimNumerator1 + interimNumerator2;

      if (operation === "-") {
        // switch values if difference is negative
        if (interimNumerator1 < interimNumerator2) {
          //switch values of 2 variables without using the third one
          // make firstNumerator as a sum of first and second numerators
          firstNumerator = firstNumerator + secondNumerator;
          // new secondNumerator equal sum - secondNumerator
          secondNumerator = firstNumerator - secondNumerator;
          // new firstNumerator equal sum - new secondNumerator
          firstNumerator = firstNumerator - secondNumerator;

          // repeat for the interim numerators
          interimNumerator1 = interimNumerator1 + interimNumerator2;
          interimNumerator2 = interimNumerator1 - interimNumerator2;
          interimNumerator1 = interimNumerator1 - interimNumerator2;

          // repeat the same for the denominators
          firstDenominator = firstDenominator + secondDenominator;
          secondDenominator = firstDenominator - secondDenominator;
          firstDenominator = firstDenominator - secondDenominator;
        }

        // and compute the difference result
        resultNumerator = interimNumerator1 - interimNumerator2;
      }
    }

    operands = processFractionOperands(
      operation,
      firstDenominator,
      secondDenominator,
      resultDenominator,
      firstNumerator,
      secondNumerator,
      interimNumerator1,
      interimNumerator2,
      interimDenominator1,
      interimDenominator2,
      resultNumerator
    );
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else if (typeof e === "string") {
      throw new Error(e);
    }
  }

  return operands;
}

export default singleDigitDifferentDenominatorsImproperFractions;
