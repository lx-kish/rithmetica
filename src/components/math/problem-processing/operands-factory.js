import upToTen from '../operands-generators/up-to-ten';
import singleDigitOperands from '../operands-generators/single-digit-operands';
import doubleAndSingleDigits from '../operands-generators/double-and-single-digits';
import doubleDigitAndTens from '../operands-generators/double-digit-and-tens';
import doubleDigitOperands from '../operands-generators/double-digit-operands';
import doubleDigitTidyngUp from '../operands-generators/double-digit-tidying-up';

/**
 * 
 */
const operandsFactory = (type) => {

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
      case 'two- and single- digit':
        processor = doubleAndSingleDigits;
        break;
      case 'two-digit and tens':
        processor = doubleDigitAndTens;
        break;
      case 'two-digit operands':
        processor = doubleDigitOperands;
        break;
      case 'two-digit tidying up':
        processor = doubleDigitTidyngUp;
        break;
      // case 'tens withing thousand':
      //   processor = upToTen;
      //   break;
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