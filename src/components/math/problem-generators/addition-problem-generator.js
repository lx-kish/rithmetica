const randomInteger = require('../randoms/random-integer-in-a-range');

////////////////////////
// Types of addition problems might be:
//
// up to 10 sum <up-to-10>
//
// single-digit addends <single-d-addends>
//
// single-digit addends big numbers only <single-d-addends-big>
//
// double-digit addends with sum of ones less than 10 <double-d-addends>
//
// double-digit addends with sum of ones more than 10 <double-d-addends-big>

/**
 * 
 */
module.exports = (problemType, numberOfOperands = 2, missing, numberOfProblems) => {
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
    for (let k = 0; k < numberOfProblems; k++) {

      problem = [];

      switch (problemType) {
        case 'up to ten':
          /**
           * 1. Generate sum with limits min=0+numberOfOperands, max=10
           * 2. Loop with length <numberOfOperands>-1
           * 3. Generate addend with limits min=0, max=sum-problemTotal
           * 4. Push addend into problems array
           * 5. Push the last addend as a difference between sum and the rest addends.
           * 6. Identify missing.
           * 7. Formatting the problem with the defined operands and operator.
           */

          // 1. Generate sum with limits min=0+numberOfOperands, max=10
          const sum = randomInteger(0 + parseInt(numberOfOperands), 10);

          const addends = [];
          let problemSum = 0;

          // 2. Loop with length <numberOfOperands>-1
          for (let i = 0; i < numberOfOperands - 1; i++) {

            // 3. Generate addend with limits min=0, max=sum-problemTotal
            // 4. Push addend into problems array
            addends.push(randomInteger(0, parseInt(sum) - parseInt(problemSum)));

            // Calculating the sum
            let j = addends.length;
            while (j--) problemSum += parseInt(addends[j])
          }

          // 5. Push the last addend as a difference between sum and the rest addends.
          addends.push(parseInt(sum) - parseInt(problemSum));

          // 6. Identify missing.
          let input;
          if (missing === 'random') {
            input = randomInteger(0, parseInt(numberOfOperands))
          } else if (missing === 'first') {
            input = 0;
          } else if (missing === 'last') {
            input = 1;
          }

          // 7. Formatting the problem with the defined operands and operator.
          for (let i = 0; i < addends.length; i++) {
            // console.log('inside problem pushing');
            problem.push({
              type: input === i ? 'input' : 'operand',
              value: addends[i]
            });
            problem.push({
              type: 'sign',
              value: i === addends.length - 1 ? '=' : '+'
            })
          }

          problem.push({
            type: missing === 'result' || input === 2 ? 'input' : 'operand',
            value: sum
          });

          console.log('%c problem "up-to-10" from "addition problem generator" ===> ', 'color: green; font-weight: bold;', problem);

          break;
        case 'single-d-addends':

          break;
        case 'sign':

          break;
        case 'input':

          break;

        default:
          break;
      }

      problems.push(problem);
    }
    // let problem = "";
    // let maxValue = 0;
    // let minValue = 0;
    // // const problem = "Math.floor(Math.random() * (max - min + 1)) + min";
    // for (let i = 0; i < numberOfOperands - 1; i++) {

    //   maxValue = Math.max(parseInt(maxSum), parseInt(problem));
    //   minValue = Math.max(parseInt(maxSum), parseInt(problem));
    //   problem += randomInteger(minValue);
    // }

    console.log('%c problems from addition problem generator ===> ', 'color: orange; font-weight: bold;', problems);

    return problems;
  }
  catch (e) {
    throw new Error(e);
  }
}