import randomInteger from "../../../randoms/get-random-integer-in-a-range";
import getGreatestCommonDivisor from "../../../../../utils/get-greatest-common-divisor/get-greatest-common-divisor";

import processFractionsOperands from "../process-fractions-operands";

import { IFractionProblemOperands } from "../../../../../TS/interfaces/interfaces";
import { operations } from "../../../../../TS/constatnts/constants";

/**
 *
 */
function singleDigitSameDenominatorSimpleFractions(
  operation: string,
  numberOfOperands: number
) {
  let operands: IFractionProblemOperands = {
    operation,
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
    if (
      operation !== operations.addition &&
      operation !== operations.subtraction
    )
      throw new Error(
        `Unsupported operation ${operation} passed to the "1-digit different denominators fractions" generator!`
      );

    // denominators
    let firstDenominator = 0,
      secondDenominator = 0,
      resultDenominator = 0,
      theBiggestNumber = 0,
      theSecondRandomNumber = 0,
      theThirdRandomNumber = 0,
      // numerators
      resultNumerator = 0,
      firstNumerator = 0,
      secondNumerator = 0,
      interimDenominator1 = 0,
      interimDenominator2 = 0;

    let foundRightNumbers = false;

    while (!foundRightNumbers) {
      firstDenominator = randomInteger(3, 9);

      secondDenominator = firstDenominator;

      interimDenominator1 = firstDenominator;

      resultDenominator = firstDenominator;

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
      let greatestCommonDivisor = 0;
      greatestCommonDivisor = [resultNumerator, resultDenominator].reduce(
        getGreatestCommonDivisor
      );
      if (greatestCommonDivisor <= 1) foundRightNumbers = true;
    }

    operands = processFractionsOperands({
      operation,
      firstDenominator,
      secondDenominator,
      resultDenominator,
      firstNumerator,
      secondNumerator,
      interimNumerator1: firstNumerator,
      interimNumerator2: secondNumerator,
      interimDenominator1,
      interimDenominator2,
      resultNumerator,
    });
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else if (typeof e === "string") {
      throw new Error(e);
    }
  } finally {
    return operands;
  }
}

export default singleDigitSameDenominatorSimpleFractions;
