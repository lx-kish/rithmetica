import upToTen from '../operands-generators/up-to-ten';
import singleDigitOperands from '../operands-generators/single-digit-operands';
import twoAndSingleDigits from '../operands-generators/two-and-single-digits';
import twoDigitAndTens from '../operands-generators/two-digit-and-tens';
import twoDigitOperands from '../operands-generators/two-digit-operands';
import twoDigitTidyngUp from '../operands-generators/two-digit-tidying-up';

/**
 * 
 */
const operandsFactory = (type: string): (operation: string, numberOfOperands: number) => number[] => {

  try {
    // console.log(
    //   '%c arguments of problem-controller ===> ',
    //   'color: orangered; font-weight: bold;',
    //   problemDescriptions
    // );

    // let processor: (operation: Operation, numberOfOperands: number) => number[];

    if (type === 'up to ten') return upToTen;
    if (type === 'single digit operands') return singleDigitOperands;
    if (type === 'two- and single- digit') return twoAndSingleDigits;
    if (type === 'two-digit and tens') return twoDigitAndTens;
    if (type === 'two-digit operands') return twoDigitOperands;
    if (type === 'two-digit tidying up') return twoDigitTidyngUp;
    throw(new Error(`No processor found for case ${type}!`));
    // switch (type) {
    //   case 'up to ten':
    //     return upToTen;
    //     // processor = upToTen;
    //     break;
    //   case 'single digit operands':
    //     return singleDigitOperands;
    //     // processor = singleDigitOperands;
    //     break;
    //   case 'two- and single- digit':
    //     return twoAndSingleDigits;
    //     // processor = twoAndSingleDigits;
    //     break;
    //   case 'two-digit and tens':
    //     return twoDigitAndTens;
    //     // processor = twoDigitAndTens;
    //     break;
    //   case 'two-digit operands':
    //     return twoDigitOperands;
    //     // processor = twoDigitOperands;
    //     break;
    //   case 'two-digit tidying up':
    //     return twoDigitTidyngUp;
    //     // processor = twoDigitTidyngUp;
    //     break;
    //   // case 'tens withing thousand':
    //   //   processor = upToTen;
    //   //   break;
    //   default:
    //     throw(new Error(`No processor found for case ${type}!`));
    //     break;
    // }

    // console.log(
    //   '%c processor from get-processor ===> ',
    //   'color: violet; font-weight: bold;',
    //   processor
    // );

    // return processor;
  }
  catch (e) {
    throw new Error(e);
  }
};

export default operandsFactory;