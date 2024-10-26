import randomInteger from "../../../randoms/get-random-integer-in-a-range";
import getGreatestCommonDivisor from "../../../../../utils/get-greatest-common-divisor/get-greatest-common-divisor";

import { operations } from "../../../../../TS/constants/constants";

/**
 *
 */
const sameDenominatorFractions = (
  operation: string,
  numberOfOperands: number
) => {
  const operands: number[] = [];

  try {
    if (
      operation !== operations.addition &&
      operation !== operations.subtraction
    )
      throw new Error(
        `Unsupported operation ${operation} passed to the "Same denominator fractions" generator!`
      );

    if (typeof numberOfOperands !== "number" || numberOfOperands !== 2)
      throw new Error(
        `Not applicable number of operands ${numberOfOperands} has been passed to the "Same denominator fractions" generator!`
      );

    // denominators
    const firstDenominator = randomInteger(3, 9);

    const secondDenominator = firstDenominator;

    const interimDenominator = firstDenominator;

    let resultDenominator = firstDenominator;

    // numerators
    const firstNumerator = randomInteger(1, firstDenominator - 1);

    let secondNumerator = randomInteger(1, firstDenominator - 1);

    let resultNumerator = firstNumerator + secondNumerator;

    if (operation === "-") {
      secondNumerator = randomInteger(1, firstNumerator - 1);
      resultNumerator = firstNumerator - secondNumerator;
    }

    const interimNumerator1 = firstNumerator;

    const interimNumerator2 = secondNumerator;

    // 1. check if it's a mixed fraction or just an integer
    let integer = 0;
    let remainedNumerator = resultNumerator;
    let remainedDenominator = resultDenominator;

    // 1.1 check if it's only an integer part, x/y = 1
    if (!(resultNumerator - resultDenominator)) {
      // 1
      integer = 1;
      remainedNumerator = 0;
      remainedDenominator = 0;
    }

    // // 1.2 check if it's zero in result, x/y - x/y
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

    // 2. checked if it can be simplified
    let greatestCommonFactor = 0,
      simplifiedNumerator = 0,
      simplifiedDenominator = 0;

    if (remainedDenominator) {
      greatestCommonFactor = [
        remainedNumerator ? remainedNumerator : resultNumerator,
        remainedDenominator,
      ].reduce(getGreatestCommonDivisor);
    }
    if (greatestCommonFactor > 1) {
      simplifiedNumerator =
        (remainedNumerator ? remainedNumerator : resultNumerator) /
        greatestCommonFactor;
      simplifiedDenominator = remainedDenominator / greatestCommonFactor;
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
    operands.push(firstNumerator); // [0]
    operands.push(firstDenominator); // [1]

    // second fraction
    operands.push(secondNumerator); // [2]
    operands.push(secondDenominator); // [3]

    // get common denominator
    operands.push(interimNumerator1); // [4]
    operands.push(interimNumerator2); // [5]
    operands.push(interimDenominator); // [6]

    // get row result
    operands.push(resultNumerator); // [7]
    operands.push(resultDenominator); // [8]

    // extract integer (possibly not happens)
    operands.push(integer); // [9]
    operands.push(remainedNumerator); // [10]
    operands.push(remainedDenominator); // [11]

    // simplifying (possibly not happens)
    operands.push(simplifiedDenominator ? integer : simplifiedDenominator); // [12] // if whole, then 0
    operands.push(simplifiedNumerator); // [13]
    operands.push(simplifiedDenominator); // [14]
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else if (typeof e === "string") {
      throw new Error(e);
    }
  } finally {
    return operands;
  }
};

export default sameDenominatorFractions;
