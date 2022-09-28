import sameDenominatorFractions from '../operands-generators/fractions/addition-subtraction/same-denominator-fractions';
import sameDenominatorMixedFractions from '../operands-generators/fractions/addition-subtraction/same-denominator-mixed-fractions';
import differentDenominatorsFractions from '../operands-generators/fractions/addition-subtraction/different-denominators-fractions';
import differentDenominatorsMixedFractions from '../operands-generators/fractions/addition-subtraction/different-denominators-mixed-fractions';
import twoDigitPercentage from '../operands-generators/percentage/two-digit-percentage';

/**
 * 
 */
const operandsFactory = (name: string, operation: string): (operation: string, numberOfOperands: number) => number[] | undefined => {

  try {

    if (name === 'same denominator fractions') return sameDenominatorFractions;
    if (name === 'same denominator mixed fractions') return sameDenominatorMixedFractions;
    if (name === 'different denominators fractions') return differentDenominatorsFractions;
    if (name === 'different denominators mixed fractions') return differentDenominatorsMixedFractions;
    if (name === 'two-digit percentage') return twoDigitPercentage;
    throw (new Error(`No processor found for case ${name}!`));
  }
  catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else if (typeof e === "string") {
      throw new Error(e);
    }
  }
  return Array;
};

export default operandsFactory;