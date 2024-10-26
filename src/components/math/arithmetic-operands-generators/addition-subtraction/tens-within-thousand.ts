import randomInteger from "../../randoms/get-random-integer-in-a-range";

import { operations } from "../../../../TS/constants/constants";

/**
 *
 */
const tensWithinThousand = (operation: string, numberOfOperands: number) => {
  const operands: number[] = [];

  try {
    if (
      operation !== operations.addition &&
      operation !== operations.subtraction
    )
      throw new Error(
        `Unsupported operation ${operation} passed to the "Tens within thousand" generator!`
      );

    if (typeof numberOfOperands !== "number" || numberOfOperands < 2)
      throw new Error(
        `Not applicable number of operands ${numberOfOperands} has been passed to the "Tens within thousand" generator!`
      );

    // 1. Generate problem maximum with limits min=0+numberOfOperands, max=10
    let problemMaximum = 0;

    let operand = 0;

    let hundreds = 0;
    let tens = 0;
    let units = 0;

    // 2. Loop with length <numberOfOperands>-1
    for (let i = 0; i < numberOfOperands; i++) {
      // 3. Generate operand with limits min=0 (or 1), max=sum-problemTotal
      if (i > 0) {
        // Defining minimum tens to add or subtract for changing hundreds
        const minTens = operation === "+" ? 10 - tens / 10 : tens / 10 + 1;

        operand = randomInteger(minTens, 9) * 10;
        problemMaximum += operand;
      }

      if (i === 0) {
        // subtrahent should be more than minuend's tens
        const maxTens = operation === "-" ? 7 : 9;

        hundreds = randomInteger(1, 8) * 100;
        tens = randomInteger(1, maxTens) * 10;
        units = randomInteger(1, 9);

        operand = hundreds + tens + units;
        problemMaximum += operand;
      }

      // 4. Push operand into problems array
      operands.push(operand);
    }

    // in case of addition sort array to add less to the bigger
    if (operation === "-") operands.sort((a, b) => a - b);

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

export default tensWithinThousand;
