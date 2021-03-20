const upToTen = require('../operands-generators/up-to-ten');
const singleDigitOperands = require('../operands-generators/single-digit-operands');
const doubleAndSingleDigits = require('../operands-generators/double-and-single-digits');

/**
 * 
 */
module.exports = (type) => {
  try {
    // console.log(
    //   '%c arguments of problem-controller ===> ',
    //   'color: orangered; font-weight: bold;',
    //   problemDescriptions
    // );

    let processor;

    switch (type) {
      case 'up to ten':
        processor = upToTen;
        break;
      case 'single digit operands':
        processor = singleDigitOperands;
        break;
      case 'double and single digit':
        processor = doubleAndSingleDigits;
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

    console.log('%c processor from get-processor ===> ', 'color: violet; font-weight: bold;', processor);
    return processor;
  }
  catch (e) {
    throw new Error(e);
  }
}