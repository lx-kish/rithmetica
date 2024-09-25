import randomInteger from "../../../randoms/get-random-integer-in-a-range";

import processFractionsOperands from "../process-fractions-operands";

import { IFractionProblemOperands } from "../../../../../TS/interfaces/interfaces";
import { operations } from "../../../../../TS/constatnts/constants";

/**
 *
 */
function singleDigitSameDenominatorMixedSimplifiedFractions(
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
      resultDenominator = 0,
      simplifiedDenominator = 0,
      SimplifiedNumerator = 0,
      // numerators
      resultNumerator = 0,
      firstNumerator = 0,
      secondNumerator = 0,
      interimDenominator1 = 0,
      interimDenominator2 = 0,
      // factor
      factor = 0;

    simplifiedDenominator = randomInteger(2, 4);

    SimplifiedNumerator = randomInteger(
      simplifiedDenominator + 1,
      simplifiedDenominator * 2 - 2
    );

    factor = simplifiedDenominator < 4 ? randomInteger(2, 3) : 2;

    resultDenominator = simplifiedDenominator * factor;

    firstDenominator = resultDenominator;

    secondDenominator = resultDenominator;

    interimDenominator1 = resultDenominator;

    resultNumerator = SimplifiedNumerator * factor;

    firstNumerator = randomInteger(
      resultNumerator - resultDenominator + 1,
      resultDenominator - 1
    );

    secondNumerator = resultNumerator - firstNumerator;

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

export default singleDigitSameDenominatorMixedSimplifiedFractions;
