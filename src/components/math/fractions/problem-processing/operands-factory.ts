import singleDigitSameDenominatorSimpleFractions from "../operands-generators/fractions/addition-subtraction/single-digit-same-denominator-simple-fractions";
import oneDigitsingleDigitSameDenominatorMixedFractions from "../operands-generators/fractions/addition-subtraction/single-digit-same-denominator-mixed-fractions";
import singleDigitSameDenominatorMixedSimplifiedFractions from "../operands-generators/fractions/addition-subtraction/single-digit-same-denominator-mixed-simplified-fractions";
import singleDigitDifferentDenominatorsFractions from "../operands-generators/fractions/addition-subtraction/single-digit-different-denominators-fractions";
import singleDigitFractions from "../operands-generators/fractions/multitpication-division/single-digit-fractions";
// import differentDenominatorsMixedFractions from "../operands-generators/fractions/addition-subtraction/different-denominators-mixed-fractions";
// import twoDigitPercentage from "../operands-generators/percentage/two-digit-percentage";

import { FractionOperandsType } from "../../../../TS/types/FractionOperandsType";

/**
 *
 */
const operandsFactory = (
  name: string,
  operation: string
): ((operation: string, numberOfOperands: number) => FractionOperandsType) => {
  try {
    if (name === "1-digit same denominator simple fractions")
      return singleDigitSameDenominatorSimpleFractions;
    if (name === "1-digit same denominator mixed fractions")
      return oneDigitsingleDigitSameDenominatorMixedFractions;
    if (name === "1-digit same denominator mixed simplified fractions")
      return singleDigitSameDenominatorMixedSimplifiedFractions;
    if (name === "1-digit different denominators fractions")
      return singleDigitDifferentDenominatorsFractions;
    if (name === "1-digit fractions") return singleDigitFractions;
    // if (name === "different denominators mixed fractions")
    //   return differentDenominatorsMixedFractions;
    // if (name === "two-digit percentage") return twoDigitPercentage;
    throw new Error(`No processor found for case ${name}!`);
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else if (typeof e === "string") {
      throw new Error(e);
    }
  }
  return (
    operation: string,
    numberOfOperands: number
  ): FractionOperandsType => {
    return {};
  };
};

export default operandsFactory;
