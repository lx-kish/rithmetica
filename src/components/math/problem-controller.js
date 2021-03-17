const additionProblemGenerator = require('./problem-generators/addition-problem-generator');

/**
 * 
 */
module.exports = (problemDescriptions) => {
  try {
    // console.log(
    //   '%c arguments of problem-controller ===> ',
    //   'color: orangered; font-weight: bold;',
    //   problemDescriptions
    // );
    const problems = [];
    problemDescriptions.forEach(type => {
      problems.push(...additionProblemGenerator(
        // type.operation,
        type.type,
        type.numberOfOperands,
        type.missing,
        type.quantity
      ))
    });

    console.log('%c problems from problem-controller ===> ', 'color: yellowgreen; font-weight: bold;', problems);
    return problems;
  }
  catch (e) {
    throw new Error(e);
  }
}