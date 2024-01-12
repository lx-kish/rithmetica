import oneDigitSameDenominatorSimpleFractions from "../operands-generators/fractions/addition-subtraction/one-digit-same-denominator-simple-fractions";
import oneDigitSameDenominatorMixedFractions from "../operands-generators/fractions/addition-subtraction/one-digit-same-denominator-mixed-fractions";
import oneDigitSameDenominatorMixedSimplifiedFractions from "../operands-generators/fractions/addition-subtraction/one-digit-same-denominator-mixed-simplified-fractions";
import differentDenominatorsFractions from "../operands-generators/fractions/addition-subtraction/different-denominators-fractions";
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
  // ): ((operation: string, numberOfOperands: number) => number[] | undefined) => {
  try {
    if (name === "1-digit same denominator simple fractions")
      return oneDigitSameDenominatorSimpleFractions;
    if (name === "1-digit same denominator mixed fractions")
      return oneDigitSameDenominatorMixedFractions;
    if (name === "1-digit same denominator mixed simplified fractions")
      return oneDigitSameDenominatorMixedSimplifiedFractions;
    if (name === "different denominators fractions")
      return differentDenominatorsFractions;
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
