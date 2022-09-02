import randomInteger from '../../randoms/get-random-integer-in-a-range';

/**
 * 
 */
const singleDigitOperands = (operation: string, numberOfOperands: number) => {

  const operands: number[] = [];

  try {

    // 1. Generate problem maximum with limits min=0+numberOfOperands, max=10
    let product = 0;

    let operand = 0;

    // 2. Loop with length <numberOfOperands>-1
    for (let i = 0; i < 2; i++) {

      // 3. Generate operand with limits min=0 (or 1), max=sum-problemTotal
      operand = randomInteger(2, 9);
      product = product === 0 ? operand : product * operand;

      // 4. Push operand into problems array
      operands.push(operand);
    }

    // 5. Push the problem maximum value to the appropriate place depend on operation (addition/subtraction)
    operands.splice(
      operation === '×' ? operands.length : 0,
      0,
      product
    );

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

export default singleDigitOperands;