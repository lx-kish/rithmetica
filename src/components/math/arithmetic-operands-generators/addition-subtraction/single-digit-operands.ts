import randomInteger from "../../randoms/get-random-integer-in-a-range";

import { operations } from "../../../../TS/constatnts/constants";

/**
 *
 */
const singleDigitOperands = (operation: string, numberOfOperands: number) => {
  const operands: number[] = [];

  try {
    if (
      operation !== operations.addition &&
      operation !== operations.subtraction
    )
      throw new Error(
        `Unsupported operation ${operation} passed to the "Single digit operands" generator!`
      );

    if (typeof numberOfOperands !== "number" || numberOfOperands < 2)
      throw new Error(
        `Not applicable number of operands ${numberOfOperands} has been passed to the "Single digit operands" generator!`
      );

    // 1. Generate problem maximum with limits min=0+numberOfOperands, max=10
    let problemMaximum = 0;

    let operand = 0;

    // 2. Loop with length <numberOfOperands>-1
    for (let i = 0; i < numberOfOperands; i++) {
      // 3. Generate operand with limits min=0 (or 1), max=sum-problemTotal
      operand = randomInteger(1, 9);
      problemMaximum += operand;

      // 4. Push operand into problems array
      operands.push(operand);
    }

    // 5. Push the problem maximum value to the appropriate place depend on operation (addition/subtraction)
    operands.splice(operation === "+" ? operands.length : 0, 0, problemMaximum);
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

export default singleDigitOperands;
