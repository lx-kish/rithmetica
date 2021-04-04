import upToTen from '../operands-generators/up-to-ten';
import singleDigitOperands from '../operands-generators/single-digit-operands';
import twoAndSingleDigits from '../operands-generators/two-and-single-digits';
import twoDigitAndTens from '../operands-generators/two-digit-and-tens';
import twoDigitOperands from '../operands-generators/two-digit-operands';
import twoDigitTidyngUp from '../operands-generators/two-digit-tidying-up';

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
        processor = twoAndSingleDigits;
        break;
      case 'two-digit and tens':
        processor = twoDigitAndTens;
        break;
      case 'two-digit operands':
        processor = twoDigitOperands;
        break;
      case 'two-digit tidying up':
        processor = twoDigitTidyngUp;
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