import randomInteger from '../randoms/get-random-integer-in-a-range';

/**
 * 
 */
const hundredsWithinThousand = (operation: string, numberOfOperands: number) => {

  try {
    console.log(
      '%c arguments of addition-problem-generator ===> ',
      'color: orangered; font-weight: bold;',
      operation,
      numberOfOperands,
    );

    let hundredsMax = 0;

    const operands: number[] = [];
    let hundredsLeft = 0;

    let hundreds = 0;
    let operand = 0;

    // 1. Generate maximum hundreds of the problem within the following boundaries:
    // min=(numberOfOperands-1),
    // max=9
    hundredsMax = randomInteger((numberOfOperands - 1), 9);

    hundredsLeft = hundredsMax;

    // 2. Loop with length <numberOfOperands>-1
    for (let i = 0; i < numberOfOperands-1; i++) {

      // 3. Generate hundreds operands with limits:
      // max=hundredsLeft, 
      // min=numberOfOperands-1-i
      hundreds = randomInteger(numberOfOperands - 1 - i, hundredsLeft);

      operand = hundreds * 100;
      hundredsLeft -= hundreds;

      // 4. Push operand into problems array
      operands.push(operand);
    }

    let tens = randomInteger(0, 9) * 10;
    let units = randomInteger(1, 9);
    let problemMin = hundredsLeft * 100 + tens * 10 + units;
    let problemMax = hundredsMax * 100 + tens * 10 + units;

    // push the result value at the end depends on operation
    operands.push(
      operation === 'addition' ?
        problemMax :
        problemMin
    );

    // 5. Push the problem maximum value to the appropriate place depend on operation (addition/subtraction)
    operands.splice(
      0,
      0,
      operation === 'addition' ?
        problemMax :
        problemMin
    );

    console.log(
      `%c operands from "tens-within-thousand", ${operation} ===> `,
      'color: orange; font-weight: bold;',
      operands
    );

    return operands;
  }
  catch (e) {
    throw new Error(e);
  }
};

export default hundredsWithinThousand;