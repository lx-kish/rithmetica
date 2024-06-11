import randomInteger from "../../randoms/get-random-integer-in-a-range";

/**
 *
 */
const hundredsWithinThousand = (
  operation: string,
  numberOfOperands: number
) => {
  const operands: number[] = [];

  try {
    let hundredsMax = 0;
    let hundredsLowest = 0;
    let hundredsHighest = 0;

    let hundredsLeft = 0;

    let hundreds = 0;
    let operand = 0;

    // 1. Generate maximum hundreds of the problem within the following boundaries:
    operation === "+"
      ? (hundredsLowest = numberOfOperands)
      : (hundredsLowest = 1);

    hundredsMax = randomInteger(hundredsLowest, 9);

    hundredsLeft = hundredsMax;

    // 2. Loop with length <numberOfOperands>-1
    for (let i = 0; i < numberOfOperands - 1; i++) {
      // 3. Generate hundreds operands with limits:
      operation === "+"
        ? (hundredsLowest = numberOfOperands - 1)
        : (hundredsLowest = 1);

      operation === "+"
        ? (hundredsHighest = hundredsLeft - 1)
        : (hundredsHighest = hundredsLeft);

      hundreds = randomInteger(hundredsLowest, hundredsHighest);

      operand = hundreds * 100;
      hundredsLeft -= hundreds;

      // 4. Push operand into problems array
      operands.push(operand);
    }

    let tens = randomInteger(0, 9) * 10;
    let units = randomInteger(1, 9);
    let problemMin = hundredsLeft * 100 + tens + units;
    let problemMax = hundredsMax * 100 + tens + units;

    // push the result value at the end depends on operation
    operands.push(operation === "+" ? problemMax : problemMin);

    // 5. Push the problem maximum value to the appropriate place depend on operation (addition/subtraction)
    operands.splice(0, 0, operation === "+" ? problemMin : problemMax);

    return operands;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else if (typeof e === "string") {
      throw new Error(e);
    }
  }
};

export default hundredsWithinThousand;
