import randomInteger from "../../../randoms/get-random-integer-in-a-range";

import processFractionOperands from "../process-fractions-operands";

import { IFractionProblemOperands } from "../../../../../TS/interfaces/interfaces";

/**
 *
 */
function singleDigitFractions(operation: string, numberOfOperands: number) {
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
      resultDenominator = 0,
      // numerators
      resultNumerator = 0,
      firstNumerator = 0,
      secondNumerator = 0,
      interimNumerator1 = 0,
      interimNumerator2 = 0,
      interimDenominator1 = 0,
      interimDenominator2 = 0;

    // while (!foundRightNumbers) {
    firstDenominator = randomInteger(2, 9);

    secondDenominator = randomInteger(2, 9);

    firstNumerator = randomInteger(1, firstDenominator - 1);

    secondNumerator = randomInteger(1, secondDenominator - 1);

    interimDenominator1 = firstDenominator;

    interimNumerator1 = firstNumerator;

    interimDenominator2 =
      operation === "×" ? secondDenominator : secondNumerator;

    interimNumerator2 = operation === "×" ? secondNumerator : secondDenominator;

    resultDenominator = interimDenominator1 * interimDenominator2;

    resultNumerator = interimNumerator1 * interimNumerator2;

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

export default singleDigitFractions;
