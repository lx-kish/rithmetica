import upToTen from '../operands-generators/up-to-ten';
import singleDigitOperands from '../operands-generators/single-digit-operands';
import twoAndSingleDigits from '../operands-generators/two-and-single-digits';
import twoDigitAndTens from '../operands-generators/two-digit-and-tens';
import twoDigitOperands from '../operands-generators/two-digit-operands';
import twoDigitTidyngUp from '../operands-generators/two-digit-tidying-up';
import tensWithinThousands from '../operands-generators/tens-within-thousand';
import hundredsWithinThousands from '../operands-generators/hundreds-within-thousand';

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

    if (type === 'up to ten') return upToTen;
    if (type === 'single digit operands') return singleDigitOperands;
    if (type === 'two- and single- digit') return twoAndSingleDigits;
    if (type === 'two-digit and tens') return twoDigitAndTens;
    if (type === 'two-digit operands') return twoDigitOperands;
    if (type === 'two-digit tidying up') return twoDigitTidyngUp;
    if (type === 'tens within thousand') return tensWithinThousands;
    if (type === 'hundreds within thousand') return hundredsWithinThousands;
    throw(new Error(`No processor found for case ${type}!`));

  }
  catch (e) {
    throw new Error(e);
  }
};

export default operandsFactory;