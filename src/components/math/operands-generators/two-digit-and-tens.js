import randomInteger from '../randoms/get-random-integer-in-a-range';

/**
 * 
 */
const doubleDigitAndTens = (operation, numberOfOperands) => {

  try {
    // console.log(
    //   '%c arguments of addition-problem-generator ===> ',
    //   'color: orangered; font-weight: bold;',
    //   problemType,
    //   numberOfOperands,
    //   numberOfProblems
    // );

    // 1. Generate problem maximum with limits min=0+numberOfOperands, max=10
    let problemMaximum = 0;

    const operands = [];
    let operand = 0;

    // 2. Loop with length <numberOfOperands>-1
    for (let i = 0; i < numberOfOperands; i++) {

      // 3. Generate operand with limits min=0 (or 1), max=sum-problemTotal
      if (i > 0) {
        operand = randomInteger(1, 9) * 10;
        problemMaximum += parseInt(operand);
      } else {
        operand = randomInteger(11, 99);
        problemMaximum += parseInt(operand);
      }

      // 4. Push operand into problems array
      operands.push(operand);
    }

    // in case of addition sort array to add less to the bigger
    if (operation === 'subtraction') operands.sort((a, b) => a - b);

    // 5. Push the problem maximum value to the appropriate place depend on operation (addition/subtraction)
    operands.splice(
      operation === 'addition' ? operands.length : 0,
      0,
      problemMaximum
    );

    // console.log(
    //   `%c operands from "double-and-single-digits" ===> `,
    //   'color: orange; font-weight: bold;',
    //   operands
    // );

    return operands;
  }
  catch (e) {
    throw new Error(e);
  }
};

export default doubleDigitAndTens;