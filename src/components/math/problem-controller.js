const additionProblemGenerator = require('./problem-generators/addition-problem-generator');

/**
 * 
 */
module.exports = (problemDescriptions) => {
  try {

    const problems = [];
    problemDescriptions.forEach(type => {
      problems.push(...additionProblemGenerator(
            // type.operation,
            type.type,
            type.numberOfAddends,
            type.numberOfProblems
          ))
    });

    // console.log('%c problems from problem-controller ===> ', 'color: yellowgreen; font-weight: bold;', problems);
    return problems;
  }
  catch (e) {
    throw new Error(e);
  }
}