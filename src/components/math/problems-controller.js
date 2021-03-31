import problemsFactory  from './problem-processing/problems-factory';
// const problemsFactory = require('./problem-processing/problems-factory');

/**
 * 
 */
 const problemsController = (problemDescriptions) => {
// module.exports = (problemDescriptions) => {
  try {
    // console.log(
    //   '%c arguments of problem-controller ===> ',
    //   'color: orangered; font-weight: bold;',
    //   problemDescriptions
    // );
    const problems = [];

    problemDescriptions.forEach(type => {

      problems.push(...problemsFactory(
        type.type,
        type.operation,
        type.numberOfOperands,
        type.missing,
        type.quantity
      ));

    });

    console.log('%c problems from problem-controller ===> ', 'color: yellowgreen; font-weight: bold;', problems, ' time stamp ===> ', new Date() / 1e3 | 0);
    return problems;
  }
  catch (e) {
    throw new Error(e);
  }
};

export default problemsController;