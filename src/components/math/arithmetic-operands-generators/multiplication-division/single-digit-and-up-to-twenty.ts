import randomInteger from "../../randoms/get-random-integer-in-a-range";

import { operations } from "../../../../TS/constants/constants";

/**
 *
 */
const singleDigitAndUpToTwenty = (
  operation: string,
  numberOfOperands: number
) => {
  const operands: number[] = [];

  try {
    if (
      operation !== operations.multiplication &&
      operation !== operations.division
    )
      throw new Error(
        `Unsupported operation ${operation} passed to the "Single digit and up to twenty" generator!`
      );

    if (typeof numberOfOperands !== "number" || numberOfOperands !== 2)
      throw new Error(
        `Not applicable number of operands ${numberOfOperands} has been passed to the "Single digit and up to twenty" generator!`
      );

    // 1. Generate problem maximum with limits min=0+numberOfOperands, max=10
    let operand = 0;
    let product = 0;

    // 3. Generate operand with limits min=0 (or 1), max=sum-problemTotal
    operand = randomInteger(2, 9);
    product = operand;
    // 4. Push operand into problems array
    operands.push(operand);
    operand = randomInteger(11, 20);
    operands.push(operand);
    product = product === 0 ? operand : product * operand;
    // }

    // 5. Push the problem maximum value to the appropriate place depend on operation (addition/subtraction)
    operands.splice(operation === "×" ? operands.length : 0, 0, product);
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

export default singleDigitAndUpToTwenty;
