import getGreatestCommonDivisor from "../../../../../utils/get-greatest-common-divisor/get-greatest-common-divisor";

import { FractionOperandsType } from "../../../../../TS/types/FractionOperandsType";
/**
 *
 */
const processFractionsOperands = (
  operation: string,
  firstDenominator: number,
  secondDenominator: number,
  resultDenominator: number,
  firstNumerator: number,
  secondNumerator: number,
  interimNumerator1: number,
  interimNumerator2: number,
  interimDenominator1: number,
  interimDenominator2: number,
  resultNumerator: number
): FractionOperandsType => {
  const operands: FractionOperandsType = {};

  try {
    // 1. check if it's a mixed fraction or just an integer
    let integer = 0;
    let remainedNumerator = resultNumerator;
    let remainedDenominator = resultDenominator;

    // 1.1 check if it's only an integer part, x/y = 1 ===> removed, checking at 1.4

    // 1.2 check if it's zero in result, x/y - x/y
    if (operation === "-" && !(interimNumerator1 - interimNumerator2)) {
      // 1
      integer = 0;
      resultNumerator = 0;
      resultDenominator = 0;
      remainedNumerator = 0;
      remainedDenominator = 0;
    }

    // 1.3 check if it's mixed fraction
    if (resultNumerator > resultDenominator) {
      //mixed
      integer = Math.trunc(resultNumerator / resultDenominator);
      remainedNumerator = resultNumerator % resultDenominator;
      remainedDenominator = resultDenominator;
    }

    // 1.4 if the result is the whole number without a remainder, set the numerators and denominators as 0
    if (!(resultNumerator % resultDenominator)) {
      integer = resultNumerator / resultDenominator;
      remainedNumerator = 0;
      remainedDenominator = 0;
    }

    // 2. checked if it can be simplified
    let greatestCommonDivisor = 0,
      simplifiedNumerator = 0,
      simplifiedDenominator = 0;

    if (remainedDenominator) {
      greatestCommonDivisor = [
        remainedNumerator ? remainedNumerator : resultNumerator,
        remainedDenominator,
      ].reduce(getGreatestCommonDivisor);
    }

    if (greatestCommonDivisor > 1) {
      simplifiedNumerator =
        (remainedNumerator ? remainedNumerator : resultNumerator) /
        greatestCommonDivisor;
      simplifiedDenominator = remainedDenominator / greatestCommonDivisor;
    }

    // no need to repeat the same numbers...
    if (
      remainedNumerator === resultNumerator &&
      remainedDenominator === resultDenominator
    ) {
      remainedNumerator = 0;
      remainedDenominator = 0;
    }

    // first fraction
    operands.firstNumerator = firstNumerator; // [0]
    operands.firstDenominator = firstDenominator; // [1]

    // second fraction
    operands.secondNumerator = secondNumerator; // [2]
    operands.secondDenominator = secondDenominator; // [3]

    // get common denominator
    operands.interimNumerator1 = interimNumerator1; // [4]
    operands.interimNumerator2 = interimNumerator2; // [5]
    operands.interimDenominator1 = interimDenominator1; // [6]
    operands.interimDenominator2 = interimDenominator2; // [7]

    // get row result
    operands.resultNumerator = resultNumerator; // [8]
    operands.resultDenominator = resultDenominator; // [9]

    // extract integer (possibly not happens)
    operands.integer = integer; // [10]
    operands.remainedNumerator = remainedNumerator; // [11]
    operands.remainedDenominator = remainedDenominator; // [12]

    // simplifying (possibly not happens)
    operands.simplifiedDenominator = simplifiedDenominator
      ? integer
      : simplifiedDenominator; // [13] // if whole, then 0
    operands.simplifiedNumerator = simplifiedNumerator; // [14]
    operands.simplifiedDenominator = simplifiedDenominator; // [15]
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else if (typeof e === "string") {
      throw new Error(e);
    }
  }

  return operands;
};

export default processFractionsOperands;
