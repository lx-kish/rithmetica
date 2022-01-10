import randomInteger from '../../randoms/get-random-integer-in-a-range';

/**
 * 
 */
const stripDiargam = (operation: string, numberOfOperands: number) => {

  try {

    // 1. Generate problem maximum with limits min=0+numberOfOperands, max=10
    let problemMaximum = 0;

    const operands: number[] = [];
    let operand = 0;

    // 2. Loop with length <numberOfOperands>-1
    for (let i = 0; i < numberOfOperands; i++) {

      // 3. Generate operand with limits min=0 (or 1), max=sum-problemTotal
      operand = randomInteger(2, 9);
      problemMaximum += operand;

      // 4. Push operand into problems array
      operands.push(operand);
    }

    // 5. Push the problem maximum value to the appropriate place depend on operation (addition/subtraction)
    operands.splice(
      operation === '+' ? operands.length : 0,
      0,
      problemMaximum
    );

    return operands;
  }
  catch (e: any) {
    throw new Error(e.message);
  }
};

export default stripDiargam;