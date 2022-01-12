import upToTen from '../operands-generators/addition-subtraction/up-to-ten';
import singleDigitOperandsAdditionSubtraction from '../operands-generators/addition-subtraction/single-digit-operands';
import twoAndSingleDigits from '../operands-generators/addition-subtraction/two-and-single-digits';
import twoDigitAndTens from '../operands-generators/addition-subtraction/two-digit-and-tens';
import twoDigitOperands from '../operands-generators/addition-subtraction/two-digit-operands';
import twoDigitTidyngUp from '../operands-generators/addition-subtraction/two-digit-tidying-up';
import tensWithinThousands from '../operands-generators/addition-subtraction/tens-within-thousand';
import hundredsWithinThousands from '../operands-generators/addition-subtraction/hundreds-within-thousand';
import singleDigitStripDiagram from '../operands-generators/multiplication-division/single-digit-strip-diagram';
import equalGroups from '../operands-generators/multiplication-division/equal-groups';
import array from '../operands-generators/multiplication-division/array';
import singleDigitOperandsMultiplicationDivision from '../operands-generators/multiplication-division/single-digit-operands';
import singleDigitAndUpToTwenty from '../operands-generators/multiplication-division/single-digit-and-up-to-twenty';
import twoDigitPercentage from '../operands-generators/percentage/two-digit-percentage';

/**
 * 
 */
const operandsFactory = (name: string, operation: string): (operation: string, numberOfOperands: number) => number[] => {

  try {

    if (name === 'up to ten') return upToTen;
    if (name === 'single digit operands' && (operation === "+" || operation === "-")) return singleDigitOperandsAdditionSubtraction;
    if (name === 'two- and single- digit') return twoAndSingleDigits;
    if (name === 'two-digit and tens') return twoDigitAndTens;
    if (name === 'two-digit operands') return twoDigitOperands;
    if (name === 'two-digit tidying up') return twoDigitTidyngUp;
    if (name === 'tens within thousand') return tensWithinThousands;
    if (name === 'hundreds within thousand') return hundredsWithinThousands;
    if (name === 'single digit strip diagram') return singleDigitStripDiagram;
    if (name === 'equal gropus') return equalGroups;
    if (name === 'array') return array;
    if (name === 'single digit operands' && (operation === "×" || operation === "÷")) return singleDigitOperandsMultiplicationDivision;
    if (name === 'single digit and up to twenty') return singleDigitAndUpToTwenty;
    if (name === 'two-digit percentage') return twoDigitPercentage;
    throw (new Error(`No processor found for case ${name}!`));
  }
  catch (e: any) {
    throw new Error(e.message);
  }
};

export default operandsFactory;