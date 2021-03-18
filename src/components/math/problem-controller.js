const additionProblemGenerator = require('./problem-generators/addition-problem-generator');
const upToTen = require('./problem-generators/up-to-ten');
const singleDigitOperands = require('./problem-generators/single-digit-operands');

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
    
    let processor;

    problemDescriptions.forEach(type => {

      switch (type.type) {
        case 'up to ten':
          processor = upToTen;
          break;
        case 'single digit operands':
          processor = singleDigitOperands;
          break;
        case 'double and single digit':
          processor = upToTen;
          break;
        case 'operations with tens':
          processor = upToTen;
          break;
        case 'double digit operands':
          processor = upToTen;
          break;
        case 'tens withing thousand':
          processor = upToTen;
          break;
        default:
          break;
      }

      problems.push(...processor(
        type.operation,
        type.numberOfOperands,
        type.missing,
        type.quantity
      ));
      // problems.push(...additionProblemGenerator(
      //   type.type,
      //   type.numberOfOperands,
      //   type.missing,
      //   type.quantity
      // ));
    });

    console.log('%c problems from problem-controller ===> ', 'color: yellowgreen; font-weight: bold;', problems, ' time stamp ===> ', new Date / 1e3 | 0);
    return problems;
  }
  catch (e) {
    throw new Error(e);
  }
}