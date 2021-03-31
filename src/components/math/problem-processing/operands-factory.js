import upToTen from '../operands-generators/up-to-ten';
import singleDigitOperands from '../operands-generators/single-digit-operands';
import doubleAndSingleDigits from '../operands-generators/double-and-single-digits';
import doubleDigitAndTens from '../operands-generators/double-digit-and-tens';
import doubleDigitOperands from '../operands-generators/double-digit-operands';
import doubleDigitTidyngUp from '../operands-generators/double-digit-tidying-up';
// const upToTen = require('../operands-generators/up-to-ten');
// const singleDigitOperands = require('../operands-generators/single-digit-operands');
// const doubleAndSingleDigits = require('../operands-generators/double-and-single-digits');
// const doubleDigitAndTens = require('../operands-generators/double-digit-and-tens');
// const doubleDigitOperands = require('../operands-generators/double-digit-operands');
// const doubleDigitTidyngUp = require('../operands-generators/double-digit-tidying-up');

/**
 * 
 */
const operandsFactory = (type) => {
// module.exports = (type) => {
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
      case 'double digit and tens':
        processor = doubleDigitAndTens;
        break;
      case 'double digit operands':
        processor = doubleDigitOperands;
        break;
      case 'double digit tidying up':
        processor = doubleDigitTidyngUp;
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
};

export default operandsFactory;