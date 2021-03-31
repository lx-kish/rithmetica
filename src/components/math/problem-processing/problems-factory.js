import getInputPosition from './get-input-position';
import operandsFactory from './operands-factory';

/**
 * 
 */
const problemsFactory = (type, operation, numberOfOperands = 2, missing, quantity) => {

  try {
    // console.log(
    //   '%c arguments of addition-problem-generator ===> ',
    //   'color: orangered; font-weight: bold;',
    //   problemType,
    //   numberOfOperands,
    //   numberOfProblems
    // );

    const processor = operandsFactory(type);

    let problems = [];

    let problem;

    for (let q = 0; q < quantity; q++) {

      problem = [];

      const operands = processor(operation, numberOfOperands);
      
      // 6. Identify missing.
      let input = getInputPosition(numberOfOperands, missing);

      // 7. Formatting the problem with the defined operands and operator.
      for (let i = 0; i < operands.length; i++) {

        if (i > 0) {
          problem.push({
            type: 'sign',
            value: i === operands.length - 1 ?
              '=' :
              operation === 'addition' ? '+' : '-'
          });
        }
        problem.push({
          type: input === i ? 'input' : 'operand',
          value: operands[i]
        });
      }

      console.log(`%c ${operation} problem from "problems-builder" ===> `, 'color: blue; font-weight: bold;', problem);

      problems.push(problem);
    }

    console.log('%c problems from "problems-builder" ===> ', 'color: orange; font-weight: bold;', problems);

    return problems;
  }
  catch (e) {
    throw new Error(e);
  }
};

export default problemsFactory;