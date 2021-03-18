const randomInteger = require('../randoms/random-integer-in-a-range');

/**
 * 
 */
module.exports = (operation, numberOfOperands = 2, missing, quantity) => {
  try {
    // console.log(
    //   '%c arguments of addition-problem-generator ===> ',
    //   'color: orangered; font-weight: bold;',
    //   problemType,
    //   numberOfOperands,
    //   numberOfProblems
    // );
    let problems = [];

    let problem;

    for (let q = 0; q < quantity; q++) {

      problem = [];

      // to prevent a lot of randomized zeros generated
      // let zero = 1;

      // 1. Generate problem maximum with limits min=0+numberOfOperands, max=10
      let problemMaximum = 0;

      const operands = [];
      let operand = 0;
      // let problemSum = 0;

      if (operation === 'addition') {
        // case 'addition':
        /**
         * 1. Generate problem maximum with limits min=0+numberOfOperands, max=10
         * 2. Loop with length <numberOfOperands>-1
         * 3. Generate operand with limits min=0, max=sum-problemTotal
         * 4. Push operand into problems array
         * 5. Push the last operand as a difference between sum and the rest operands.
         * 6. Identify missing.
         * 7. Formatting the problem with the defined operands and operator.
         */

        // 2. Loop with length <numberOfOperands>-1
        for (let i = 0; i < numberOfOperands - 1; i++) {

          // 3. Generate operand with limits min=0 (or 1), max=sum-problemTotal
          operand = randomInteger(1, 9);
          problemMaximum += parseInt(operand);

          // 4. Push operand into problems array
          operands.push(operand);
        }

        // 5. Push the last operand as a difference between sum and the rest operands.
        operands.push(problemMaximum);

        // 6. Identify missing.
        let input;
        // let input = parseInt(numberOfOperands); // 'result'
        if (missing === 'random') {
          input = randomInteger(0, parseInt(numberOfOperands))
        } else if (missing === 'first') {
          input = 0;
        } else if (missing === 'last') {
          input = parseInt(numberOfOperands) - 1;
        }

        // 7. Formatting the problem with the defined operands and operator.
        for (let i = 0; i < operands.length; i++) {
          // console.log('inside problem pushing');
          problem.push({
            type: input === i ? 'input' : 'operand',
            value: operands[i]
          });
          problem.push({
            type: 'sign',
            value: i === operands.length - 1 ? '=' : '+'
          })
        }

        problem.push({
          type: missing === 'result' || input === parseInt(numberOfOperands) ? 'input' : 'operand',
          value: problemMaximum
        });

        console.log('%c addition problem from "up-to-10" ===> ', 'color: green; font-weight: bold;', problem);

        // break;
      }
      else if (operation === 'subtraction') {
        // case 'subtraction':
        /**
         * 1. Generate minuend with limits min=0 (but 1 is better) + numberOfOperands, max=10
         * 2. Loop with length <numberOfOperands>-1
         * 3. Generate addend with limits min=0, max=sum-problemTotal
         * 4. Push addend into problems array
         * 5. Push the last addend as a difference between sum and the rest addends.
         * 6. Identify missing.
         * 7. Formatting the problem with the defined operands and operator.
         */

        // 2. Loop with length <numberOfOperands>-1
        for (let i = 0; i < numberOfOperands - 1; i++) {

          // 3. Generate operand with limits min=0 (or 1), max=sum-problemTotal
          operand = randomInteger(1, 9);
          problemMaximum += parseInt(operand);

          // 4. Push operand into problems array
          operands.push(operand);
        }

        // 5. Push the last operand as a difference between sum and the rest operands.
        // operands.push(problemMaximum);

        // 6. Identify missing.
        let input;
        // let input = parseInt(numberOfOperands) - 1; // 'result'
        if (missing === 'random') {
          input = randomInteger(0, parseInt(numberOfOperands)) - 1;
        } else if (missing === 'last') {
          input = parseInt(numberOfOperands) - 2;
        } else if (missing === 'result') {
          input = parseInt(numberOfOperands) - 1; //1
        }

        // 7. Formatting the problem with the defined operands and operator.
        problem.push({
          type: missing === 'first' || input === -1 ? 'input' : 'operand',
          value: problemMaximum
        });
        problem.push({
          type: 'sign',
          value: '-'
        })

        for (let i = 0; i < operands.length; i++) {

          // console.log(
          //   "(missing === 'result' && i === operands.length) || input === i ===> ",
          //   (missing === 'result' && i === operands.length) || input === i,
          //   " missing =",
          //   missing,
          //   " i =",
          //   i,
          //   " input =",
          //   input,
          //   " operands.length =",
          //   operands.length, 
          //   " operands[i] =",
          //   operands[i],
          //   " operands =",
          //   operands
          // );

          problem.push({
            type: (missing === 'result' && i === operands.length - 1) || input === i ? 'input' : 'operand',
            value: operands[i]
          });

          if (i < operands.length - 1)
            problem.push({
              type: 'sign',
              value: i === operands.length - 2 ? '=' : '-'
            })
        }

        console.log('%c subtraction problem from "up-to-10" ===> ', 'color: blue; font-weight: bold;', problem);

      }

      problems.push(problem);
    }

    console.log('%c problems from "up-to-10" ===> ', 'color: orange; font-weight: bold;', problems);

    return problems;
  }
  catch (e) {
    throw new Error(e);
  }
}