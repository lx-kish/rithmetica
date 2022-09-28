import randomInteger from "../../../../randoms/get-random-integer-in-a-range";
import getFactors from "../../../../../../utils/get-factors/get-factors";
import getGreatestCommonNumber from "../../../../../../utils/get-greatest-common-number/get-greatest-common-number";

/**
 * 
 */
const sameDenominatorFractions = (operation: string, numberOfOperands: number) => {

  const operands: number[] = [];

  try {

    /**
     * 1. define denominator (from 2 to 9).
     * 2. define 2 numerators (a) less, than denominator; b) if subtraction, the last less than the first)
     * 3. check, if can be simplified
     * 4. answer is the next step if cannot be simplified
     * 5. + one extra step for simplifying if can be simplified
     */

    // denominators
    const firstDenominator = randomInteger(2, 9);

    const secondDenominator = firstDenominator;

    const commonDenominator = firstDenominator;
    
    let resultDenominator = commonDenominator;

    // numerators
    const firstNumerator = randomInteger(1, firstDenominator - 1);

    let secondNumerator = randomInteger(1, firstDenominator - 1);

    let resultNumerator = firstNumerator + secondNumerator;

    if (operation === "-") {
      secondNumerator = randomInteger(1, firstNumerator - 1);
      resultNumerator = firstNumerator - secondNumerator;
    }

    const firstInterimNumerator = firstNumerator;

    const secondInterimNumerator = secondNumerator;

    // 1. check if it's a mixed fraction or just an integer
    let integer = 0;
    let remainedNumerator = resultNumerator;
    let remainedDenominator = resultDenominator;

    // 1.1 check if it's only an integer part, x/y = 1
    if (!(resultNumerator - resultDenominator)) { // 1
      integer = 1;
      remainedNumerator = 0;
      remainedDenominator = 0;
    }

    // // 1.2 check if it's zero in result, x/y - x/y
    if (operation === "-" && !(firstInterimNumerator - secondInterimNumerator)) { // 1
      integer = 0;
      resultNumerator = 0;
      resultDenominator = 0;
      remainedNumerator = 0;
      remainedDenominator = 0;
    }

    // 1.3 check if it's mixed fraction
    if (resultNumerator > resultDenominator) { //mixed
      integer = Math.trunc(resultNumerator / resultDenominator);
      remainedNumerator = resultNumerator % resultDenominator;
      // remainedNumerator = resultNumerator - integer * resultDenominator;
      remainedDenominator = resultDenominator;
    }

    // 2. checked if it can be simplified
    let greatestCommonFactor = 0, simplifiedNumerator = 0, simplifiedDenominator = 0;

    if (remainedDenominator) {
      greatestCommonFactor = getGreatestCommonNumber(getFactors(remainedNumerator ? remainedNumerator : resultNumerator), getFactors(remainedDenominator));
    }
    if (greatestCommonFactor > 1) {
      simplifiedNumerator = (remainedNumerator ? remainedNumerator : resultNumerator) / greatestCommonFactor;
      simplifiedDenominator = remainedDenominator / greatestCommonFactor;
    }

    // no need to repeat the same numbers...
    if (remainedNumerator === resultNumerator && remainedDenominator === resultDenominator) {
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
    operands.push(firstInterimNumerator); // [4]
    operands.push(secondInterimNumerator); // [5]
    operands.push(commonDenominator); // [6]

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

    // console.log(
    //   "%c :::::::::::::::: 109 line of same-denominator-fractions.ts ::::::::::::::::",
    //   "color: navy; font-weight: bold",
    //   "\n",
    //   "firstNumerator ===> ",
    //   firstNumerator,
    //   "\n",
    //   "firstDenominator ===> ",
    //   firstDenominator,
    //   "\n",
    //   "secondNumerator ===> ",
    //   secondNumerator,
    //   "\n",
    //   "secondDenominator ===> ",
    //   secondDenominator,
    //   "\n",
    //   "commonDenominator ===> ",
    //   commonDenominator,
    //   "\n",
    //   "integer ===> ",
    //   integer,
    //   "\n",
    //   "resultNumerator ===> ",
    //   resultNumerator,
    //   "\n",
    //   "resultDenominator ===> ",
    //   resultDenominator,
    //   "\n",
    //   "remainedNumerator ===> ",
    //   remainedNumerator,
    //   "\n",
    //   "remainedDenominator ? true : false ===> ",
    //   remainedDenominator ? true : false,
    //   "\n",
    //   "getFactors(remainedNumerator ? remainedNumerator : resultNumerator) ===> ",
    //   getFactors(remainedNumerator ? remainedNumerator : resultNumerator),
    //   "\n",
    //   "getFactors(remainedDenominator) ===> ",
    //   getFactors(remainedDenominator),
    //   "\n",
    //   "greatestCommonFactor ===> ",
    //   greatestCommonFactor,
    //   "\n",
    //   "simplifiedNumerator ===> ",
    //   simplifiedNumerator,
    //   "\n",
    //   "simplifiedDenominator ===> ",
    //   simplifiedDenominator,
    //   "\n",
    //   "operands ===> ",
    //   operands,
    //   "\n",
    // );

    return operands;
  }
  catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else if (typeof e === "string") {
      throw new Error(e);
    }
  }
};

export default sameDenominatorFractions;