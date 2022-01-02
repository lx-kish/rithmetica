import randomInteger from '../randoms/get-random-integer-in-a-range';

/**
 * 
 */
const upToTen = (operation: string, numberOfOperands: number) => {

  try {

    // to prevent a lot of randomized zeros generated
    let zero = 1;

    // 1. Generate problem maximum with limits min=0+numberOfOperands, max=10
    const problemMaximum = randomInteger(0 + numberOfOperands, 10);

    const operands: number[] = [];
    let operand = 0;
    let problemSum = 0;

    // 2. Loop with length <numberOfOperands>-1
    for (let i = 0; i < numberOfOperands - 1; i++) {

      // 3. Generate operand with limits min=0 (or 1), max=sum-problemTotal
      operand = randomInteger(zero, problemMaximum - problemSum);
      problemSum += operand;

      // 4. Push operand into problems array
      operands.push(operand);

      // changing zero value 0/1 for each tick
      zero = 1 - zero;
    }
    operands.push(problemMaximum - problemSum);

    // 5. Push the problem maximum value to the appropriate place depend on operation (addition/subtraction)
    operands.splice(
      operation === 'addition' ? operands.length : 0,
      0,
      problemMaximum
    );

    return operands;
  }
  catch (e: any) {
    throw new Error(e.message);
  }
};

export default upToTen;