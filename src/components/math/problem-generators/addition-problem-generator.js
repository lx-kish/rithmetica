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
module.exports = (problemType, numberOfAddends, numberOfProblems) => {
  try {

    let problems = [];

    let problem;

    for (let k = 0; k < numberOfProblems; k++) {

      problem = [];

      switch (problemType) {
        case 'up-to-10':
          /**
           * 1. Generate sum with limits min=0+numberOfAddends, max=10
           * 2. Loop with length <numberOfAddends>-1
           * 3. Generate addend with limits min=0, max=sum-problemsTotal
           * 4. Push addend into problems array
           */

          const sum = randomInteger(0 + parseInt(numberOfAddends), 10);

          const addends = [];
          let problemSum = 0;

          for (let i = 0; i < numberOfAddends - 1; i++) {

            // console.log(sum, problemSum, problem.length);
            addends.push(randomInteger(0, parseInt(sum) - parseInt(problemSum)));
            // Calculating the sum
            let j = addends.length;
            while (j--) problemSum += parseInt(addends[j])
          }
          addends.push(parseInt(sum) - parseInt(problemSum));

          // console.log('%c sum from addition problem generator ===> ', 'color: orange; font-weight: bold;', sum)
          // console.log('%c generated numbers from "addition problem generator" ===> ', 'color: orangered; font-weight: bold;', addends);

          for (let i = 0; i < addends.length; i++) {
            // console.log('inside problem pushing');
            problem.push({
              type: 'operand',
              value: addends[i]
            });
            problem.push({
              type: 'sign',
              value: i === addends.length - 1 ? '=' : '+'
            })
          }

          problem.push({
            type: 'input',
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
    // for (let i = 0; i < numberOfAddends - 1; i++) {

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