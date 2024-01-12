import randomInteger from "../../../../randoms/get-random-integer-in-a-range";
import getGreatestCommonDivisor from "../../../../../../utils/get-greatest-common-divisor/get-greatest-common-divisor";

import processFractionOperands from "../process-fractions-operands";

import { FractionOperandsType } from "../../../../../../TS/types/FractionOperandsType";

/**
 *
 */
const oneDigitSameDenominatorSimpleFractions = (
  operation: string,
  numberOfOperands: number
) => {
  let operands: FractionOperandsType = {};

  try {
    /**
     *
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
      secondNumerator = 0,
      interimDenominator1 = 0,
      interimDenominator2 = 0;

    let foundRightNumbers = false;

    while (!foundRightNumbers) {
      firstDenominator = randomInteger(3, 9);

      secondDenominator = firstDenominator;

      interimDenominator1 = firstDenominator;

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
      let greatestCommonDivisor = 0;
      greatestCommonDivisor = [resultNumerator, resultDenominator].reduce(
        getGreatestCommonDivisor
      );
      if (greatestCommonDivisor <= 1) foundRightNumbers = true;
    }

    operands = processFractionOperands(
      operation,
      firstDenominator,
      secondDenominator,
      commonDenominator,
      resultDenominator,
      firstNumerator,
      secondNumerator,
      firstNumerator,
      secondNumerator,
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
};

export default oneDigitSameDenominatorSimpleFractions;
