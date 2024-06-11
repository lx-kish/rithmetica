// Arithmetic operands generators
import upToTen from "./arithmetic-operands-generators/addition-subtraction/up-to-ten";
import singleDigitOperandsAdditionSubtraction from "./arithmetic-operands-generators/addition-subtraction/single-digit-operands";
import twoAndSingleDigits from "./arithmetic-operands-generators/addition-subtraction/two-and-single-digits";
import twoDigitAndTens from "./arithmetic-operands-generators/addition-subtraction/two-digit-and-tens";
import twoDigitOperands from "./arithmetic-operands-generators/addition-subtraction/two-digit-operands";
import twoDigitTidyngUp from "./arithmetic-operands-generators/addition-subtraction/two-digit-tidying-up";
import tensWithinThousands from "./arithmetic-operands-generators/addition-subtraction/tens-within-thousand";
import hundredsWithinThousands from "./arithmetic-operands-generators/addition-subtraction/hundreds-within-thousand";
// import singleDigitStripDiagram from '../operands-generators/multiplication-division/strip-diagram';
// import equalGroups from "../arithmetic-operands-generators/multiplication-division/equal-groups";
// import array from "../arithmetic-operands-generators/multiplication-division/array";
import singleDigitOperandsMultiplicationDivision from "./arithmetic-operands-generators/multiplication-division/single-digit-operands";
import singleDigitAndUpToTwenty from "./arithmetic-operands-generators/multiplication-division/single-digit-and-up-to-twenty";

// Fraction operands generators
import singleDigitSameDenominatorSimpleFractions from "./fractions-operands-generators/fractions/addition-subtraction/single-digit-same-denominator-simple-fractions";
import singleDigitsingleDigitSameDenominatorMixedFractions from "./fractions-operands-generators/fractions/addition-subtraction/single-digit-same-denominator-mixed-fractions";
import singleDigitSameDenominatorMixedSimplifiedFractions from "./fractions-operands-generators/fractions/addition-subtraction/single-digit-same-denominator-mixed-simplified-fractions";
import singleDigitDifferentDenominatorsFractions from "./fractions-operands-generators/fractions/addition-subtraction/single-digit-different-denominators-fractions";
import singleDigitDifferentDenominatorsImproperFractions from "./fractions-operands-generators/fractions/addition-subtraction/single-digit-different-denominators-improper-fractions";
import singleDigitFractions from "./fractions-operands-generators/fractions/multitpication-division/single-digit-fractions";
import singleDigitDecimals from "./fractions-operands-generators/decimals/addition-subtraction/single-digit-decimal";
import twoDigitPercentage from "./fractions-operands-generators/percentage/two-digit-percentage";

import { arithmeticMissing, routes } from "../../TS/constatnts/constants";
import { IProblemType } from "../../TS/interfaces/interfaces";

const ProblemTypes: IProblemType[] = [
  // **********   Arithmetic task types   **********
  {
    // 2 + 3 = 5; 6 - 4 = 2
    page: routes.arithmetic,
    operation: "+",
    name: "up to ten",
    type: "equation",
    missing: arithmeticMissing.random,
    processor: upToTen,
  },
  {
    page: routes.arithmetic,
    operation: "+",
    name: "single digit operands",
    type: "equation",
    missing: arithmeticMissing.random,
    processor: singleDigitOperandsAdditionSubtraction,
  }, // 8 + 7 = 15; 9 - 3 = 6
  {
    page: routes.arithmetic,
    operation: "+",
    name: "two- and single- digit",
    type: "equation",
    missing: arithmeticMissing.random,
    processor: twoAndSingleDigits,
  }, // 23 + 9 = 32; 17 - 8 = 9
  {
    page: routes.arithmetic,
    operation: "+",
    name: "two-digit and tens",
    type: "equation",
    missing: arithmeticMissing.random,
    processor: twoDigitAndTens,
  }, // 23 + 10 = 33; 56 - 20 = 36
  {
    page: routes.arithmetic,
    operation: "+",
    name: "two-digit operands",
    type: "equation",
    missing: arithmeticMissing.random,
    processor: twoDigitOperands,
  }, // 75 + 46 = 121; 85 - 37 = 48
  {
    page: routes.arithmetic,
    operation: "+",
    name: "two-digit tidying up",
    type: "equation",
    missing: arithmeticMissing.random,
    processor: twoDigitTidyngUp,
  }, // 89 + 93 = 182; 79 - 32 = 47
  {
    page: routes.arithmetic,
    operation: "+",
    name: "tens within thousand",
    type: "equation",
    missing: arithmeticMissing.random,
    processor: tensWithinThousands,
  }, // 374 + 60 = 434; 347 - 60 = 287
  {
    page: routes.arithmetic,
    operation: "+",
    name: "hundreds within thousand",
    type: "equation",
    missing: arithmeticMissing.random,
    processor: hundredsWithinThousands,
  }, // 374 + 200 = 574; 574 - 200 = 374
  {
    // 2 + 3 = 5; 6 - 4 = 2
    page: routes.arithmetic,
    operation: "-",
    name: "up to ten",
    type: "equation",
    missing: arithmeticMissing.random,
    processor: upToTen,
  },
  {
    page: routes.arithmetic,
    operation: "-",
    name: "single digit operands",
    type: "equation",
    missing: arithmeticMissing.random,
    processor: singleDigitOperandsAdditionSubtraction,
  }, // 8 + 7 = 15; 9 - 3 = 6
  {
    page: routes.arithmetic,
    operation: "-",
    name: "two- and single- digit",
    type: "equation",
    missing: arithmeticMissing.random,
    processor: twoAndSingleDigits,
  }, // 23 + 9 = 32; 17 - 8 = 9
  {
    page: routes.arithmetic,
    operation: "-",
    name: "two-digit and tens",
    type: "equation",
    missing: arithmeticMissing.random,
    processor: twoDigitAndTens,
  }, // 23 + 10 = 33; 56 - 20 = 36
  {
    page: routes.arithmetic,
    operation: "-",
    name: "two-digit operands",
    type: "equation",
    missing: arithmeticMissing.random,
    processor: twoDigitOperands,
  }, // 75 + 46 = 121; 85 - 37 = 48
  {
    page: routes.arithmetic,
    operation: "-",
    name: "two-digit tidying up",
    type: "equation",
    missing: arithmeticMissing.random,
    processor: twoDigitTidyngUp,
  }, // 89 + 93 = 182; 79 - 32 = 47
  {
    page: routes.arithmetic,
    operation: "-",
    name: "tens within thousand",
    type: "equation",
    missing: arithmeticMissing.random,
    processor: tensWithinThousands,
  }, // 374 + 60 = 434; 347 - 60 = 287
  {
    page: routes.arithmetic,
    operation: "-",
    name: "hundreds within thousand",
    type: "equation",
    missing: arithmeticMissing.random,
    processor: hundredsWithinThousands,
  }, // 374 + 200 = 574; 574 - 200 = 374
  // "three-digit operands", // 374 + 782 = 1156; 774 - 382 = 392
  // "three-digit tiding up", // 498 + 703 = 1201; 703 - 498 = 205
  // {
  //   page: routes.arithmetic,
  //   operation: "×",
  //   name: "equal groups",
  //   type: "equal-groups",
  //   missing: arithmeticMissing.result,
  // }, // 5 + 5 + 5 = 15
  // {
  //   page: routes.arithmetic,
  //   operation: "×",
  //   name: "array",
  //   type: "array",
  //   missing: arithmeticMissing.result,
  // }, // 5 + 5 + 5 = 15
  // {
  //   page: routes.arithmetic,
  //   operation: "×",
  //   name: "single digit strip diagram",
  //   type: "strip-diagram",
  //   missing: arithmeticMissing.result,
  //   processor: singleDigitStripDiagram,
  // }, // 5 + 5 + 5 = 15
  {
    page: routes.arithmetic,
    operation: "×",
    name: "single digit operands",
    type: "equation",
    missing: arithmeticMissing.random,
    processor: singleDigitOperandsMultiplicationDivision,
  }, // 8 + 7 = 15; 9 - 3 = 6
  {
    page: routes.arithmetic,
    operation: "×",
    name: "single digit and up to twenty",
    type: "equation",
    missing: arithmeticMissing.random,
    processor: singleDigitAndUpToTwenty,
  }, // 8 + 7 = 15; 9 - 3 = 6
  // {
  //   page: routes.arithmetic,
  //   operation: "÷",
  //   name: "equal groups",
  //   type: "equal-groups",
  //   missing: arithmeticMissing.result,
  // }, // 5 + 5 + 5 = 15
  // {
  //   page: routes.arithmetic,
  //   operation: "÷",
  //   name: "array",
  //   type: "array",
  //   missing: arithmeticMissing.result,
  // }, // 5 + 5 + 5 = 15
  // {
  //   page: routes.arithmetic,
  //   operation: "÷",
  //   name: "single digit strip diagram",
  //   type: "strip-diagram",
  //   missing: arithmeticMissing.result,
  // }, // 5 + 5 + 5 = 15
  {
    page: routes.arithmetic,
    operation: "÷",
    name: "single digit operands",
    type: "equation",
    missing: arithmeticMissing.random,
    processor: singleDigitOperandsMultiplicationDivision,
  }, // 8 + 7 = 15; 9 - 3 = 6
  {
    page: routes.arithmetic,
    operation: "÷",
    name: "single digit and up to twenty",
    type: "equation",
    missing: arithmeticMissing.random,
    processor: singleDigitAndUpToTwenty,
  }, // 8 + 7 = 15; 9 - 3 = 6
  // {
  //   page: routes.arithmetic,
  //   operation: "%",
  //   name: "two-digit percentage",
  //   type: "linear",
  //   missing: arithmeticMissing.result,
  // }, // 17% of 36
  // {
  //   page: routes.arithmetic,
  //   operation: "½",
  //   name: "two-digit percentage",
  //   type: "linear",
  //   missing: arithmeticMissing.result,
  // }, // 17% of 36 ½¾

  // **********   fractions task types   **********
  {
    page: routes.fractions,
    section: "½",
    operation: "+",
    name: "1-digit same denominator simple fractions",
    type: "fractionsAddSubtract",
    processor: singleDigitSameDenominatorSimpleFractions,
  }, // 2 + 3 = 5; 6 - 4 = 2
  {
    page: routes.fractions,
    section: "½",
    operation: "+",
    name: "1-digit same denominator mixed fractions",
    type: "fractionsAddSubtract",
    processor: singleDigitsingleDigitSameDenominatorMixedFractions,
  }, // 8 + 7 = 15; 9 - 3 = 6
  {
    page: routes.fractions,
    section: "½",
    operation: "+",
    name: "1-digit same denominator mixed simplified fractions",
    type: "fractionsAddSubtract",
    processor: singleDigitSameDenominatorMixedSimplifiedFractions,
  }, // 8 + 7 = 15; 9 - 3 = 6
  {
    page: routes.fractions,
    section: "½",
    operation: "+",
    name: "1-digit different denominators fractions",
    type: "fractionsAddSubtract",
    processor: singleDigitDifferentDenominatorsFractions,
  }, // 2 + 3 = 5; 6 - 4 = 2
  // {
  //   page: routes.fractions,
  //   section: "½",
  //   operation: "+",
  //   name: "different denominators mixed fractions",
  //   type: "fractionsAddSubtract",
  // }, // 8 + 7 = 15; 9 - 3 = 6
  {
    page: routes.fractions,
    section: "½",
    operation: "+",
    name: "1-digit different denominators improper fractions",
    type: "fractionsAddSubtract",
    processor: singleDigitDifferentDenominatorsImproperFractions,
  }, // 2 + 3 = 5; 6 - 4 = 2
  {
    page: routes.fractions,
    section: "½",
    operation: "-",
    name: "1-digit same denominator simple fractions",
    type: "fractionsAddSubtract",
    processor: singleDigitSameDenominatorSimpleFractions,
  }, // 2 + 3 = 5; 6 - 4 = 2
  // {
  //   page: routes.fractions,
  //   section: "½",
  //   operation: "-",
  //   name: "same denominator mixed fractions",
  //   type: "fractionsAddSubtract",
  // }, // 8 + 7 = 15; 9 - 3 = 6
  {
    page: routes.fractions,
    section: "½",
    operation: "-",
    name: "1-digit different denominators fractions",
    type: "fractionsAddSubtract",
    processor: singleDigitDifferentDenominatorsFractions,
  }, // 2 + 3 = 5; 6 - 4 = 2
  // {
  //   page: routes.fractions,
  //   section: "½",
  //   operation: "-",
  //   name: "different denominators mixed fractions",
  //   type: "fractionsAddSubtract",
  // }, // 8 + 7 = 15; 9 - 3 = 6
  {
    page: routes.fractions,
    section: "½",
    operation: "-",
    name: "1-digit different denominators improper fractions",
    type: "fractionsAddSubtract",
    processor: singleDigitDifferentDenominatorsImproperFractions,
  }, // 2 + 3 = 5; 6 - 4 = 2
  {
    page: routes.fractions,
    section: "½",
    operation: "×",
    name: "1-digit fractions",
    type: "fractionsMultiplyDivide",
    processor: singleDigitFractions,
  }, // 5 + 5 + 5 = 15
  {
    page: routes.fractions,
    section: "½",
    operation: "÷",
    name: "1-digit fractions",
    type: "fractionsMultiplyDivide",
    processor: singleDigitFractions,
  }, // 5 + 5 + 5 = 15
  {
    page: routes.fractions,
    section: ".1",
    operation: "+",
    name: "1-digit decimals",
    type: "decimalsAddSubtract",
    processor: singleDigitDecimals,
  }, // 5 + 5 + 5 = 15
  {
    page: routes.fractions,
    section: ".1",
    operation: "-",
    name: "1-digit decimals",
    type: "decimalsAddSubtract",
    processor: singleDigitDecimals,
  }, // 5 + 5 + 5 = 15
  {
    page: routes.fractions,
    section: "%",
    operation: "+",
    name: "two-digit percentage",
    type: "percentageAddSubtract",
    processor: twoDigitPercentage,
  }, // 17% of 36
  {
    page: routes.fractions,
    section: "%",
    operation: "-",
    name: "two-digit percentage",
    type: "percentageAddSubtract",
    processor: twoDigitPercentage,
  }, // 17% of 36
  // {
  //   page: routes.fractions,
  //   operation: "½",
  //   name: "two-digit percentage",
  //   type: "linear",
  //   missing: "result",
  // }, // 17% of 36 ½¾
  // {
  //   page: routes.fractions,
  //   operation: "․1",
  //   name: "two-digit percentage",
  //   type: "linear",
  //   missing: "result",
  // }, // 17% of 36 ½¾
];

export default ProblemTypes;
