const problemsBuilder = require('./problem-processing/problems-builder');

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

      problems.push(...problemsBuilder(
        type.type,
        type.operation,
        type.numberOfOperands,
        type.missing,
        type.quantity
      ));

    });

    console.log('%c problems from problem-controller ===> ', 'color: yellowgreen; font-weight: bold;', problems, ' time stamp ===> ', new Date / 1e3 | 0);
    return problems;
  }
  catch (e) {
    throw new Error(e);
  }
}