import arithmeticProblemsFactory from "./problems-processing/arithmetic-problem-processing/arithmetic-problems-factory";
import fractionsProblemsFactory from "./problems-processing/fractions-problem-processing/fractions-problems-factory";

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
import tenthAddSubtract from "./fractions-operands-generators/decimals/addition-subtraction/tenth-add-subtract";
import oneDigitDecimalsAddSubtract from "./fractions-operands-generators/decimals/addition-subtraction/one-digit-decimals-add-subtract";
import twoDigitPercentage from "./fractions-operands-generators/percentage/two-digit-percentage";

import {
  arithmeticMissing,
  operations,
  routes,
  sections,
  uiType,
} from "../../TS/constatnts/constants";
import { IProblemType } from "../../TS/interfaces/interfaces";

const ProblemTypes: IProblemType[] = [
  // **********   Arithmetic task types   **********
  {
    // 2 + 3 = 5; 6 - 4 = 2
    page: routes.arithmetic,
    operation: operations.addition,
    name: "up to ten",
    colPerRow: 2,
    missing: arithmeticMissing.random,
    uiType: uiType.arithmetic,
    factory: arithmeticProblemsFactory,
    processor: upToTen,
  },
  {
    page: routes.arithmetic,
    operation: operations.addition,
    name: "single digit operands",
    colPerRow: 2,
    missing: arithmeticMissing.random,
    uiType: uiType.arithmetic,
    factory: arithmeticProblemsFactory,
    processor: singleDigitOperandsAdditionSubtraction,
  }, // 8 + 7 = 15; 9 - 3 = 6
  {
    page: routes.arithmetic,
    operation: operations.addition,
    name: "two- and single- digit",
    colPerRow: 2,
    missing: arithmeticMissing.random,
    uiType: uiType.arithmetic,
    factory: arithmeticProblemsFactory,
    processor: twoAndSingleDigits,
  }, // 23 + 9 = 32; 17 - 8 = 9
  {
    page: routes.arithmetic,
    operation: operations.addition,
    name: "two-digit and tens",
    colPerRow: 2,
    missing: arithmeticMissing.random,
    uiType: uiType.arithmetic,
    factory: arithmeticProblemsFactory,
    processor: twoDigitAndTens,
  }, // 23 + 10 = 33; 56 - 20 = 36
  {
    page: routes.arithmetic,
    operation: operations.addition,
    name: "two-digit operands",
    colPerRow: 2,
    missing: arithmeticMissing.random,
    uiType: uiType.arithmetic,
    factory: arithmeticProblemsFactory,
    processor: twoDigitOperands,
  }, // 75 + 46 = 121; 85 - 37 = 48
  {
    page: routes.arithmetic,
    operation: operations.addition,
    name: "two-digit tidying up",
    colPerRow: 2,
    missing: arithmeticMissing.random,
    uiType: uiType.arithmetic,
    factory: arithmeticProblemsFactory,
    processor: twoDigitTidyngUp,
  }, // 89 + 93 = 182; 79 - 32 = 47
  {
    page: routes.arithmetic,
    operation: operations.addition,
    name: "tens within thousand",
    colPerRow: 2,
    missing: arithmeticMissing.random,
    uiType: uiType.arithmetic,
    factory: arithmeticProblemsFactory,
    processor: tensWithinThousands,
  }, // 374 + 60 = 434; 347 - 60 = 287
  {
    page: routes.arithmetic,
    operation: operations.addition,
    name: "hundreds within thousand",
    colPerRow: 2,
    missing: arithmeticMissing.random,
    uiType: uiType.arithmetic,
    factory: arithmeticProblemsFactory,
    processor: hundredsWithinThousands,
  }, // 374 + 200 = 574; 574 - 200 = 374
  {
    // 2 + 3 = 5; 6 - 4 = 2
    page: routes.arithmetic,
    operation: operations.subtraction,
    name: "up to ten",
    colPerRow: 2,
    missing: arithmeticMissing.random,
    uiType: uiType.arithmetic,
    factory: arithmeticProblemsFactory,
    processor: upToTen,
  },
  {
    page: routes.arithmetic,
    operation: operations.subtraction,
    name: "single digit operands",
    colPerRow: 2,
    missing: arithmeticMissing.random,
    uiType: uiType.arithmetic,
    factory: arithmeticProblemsFactory,
    processor: singleDigitOperandsAdditionSubtraction,
  }, // 8 + 7 = 15; 9 - 3 = 6
  {
    page: routes.arithmetic,
    operation: operations.subtraction,
    name: "two- and single- digit",
    colPerRow: 2,
    missing: arithmeticMissing.random,
    uiType: uiType.arithmetic,
    factory: arithmeticProblemsFactory,
    processor: twoAndSingleDigits,
  }, // 23 + 9 = 32; 17 - 8 = 9
  {
    page: routes.arithmetic,
    operation: operations.subtraction,
    name: "two-digit and tens",
    colPerRow: 2,
    missing: arithmeticMissing.random,
    uiType: uiType.arithmetic,
    factory: arithmeticProblemsFactory,
    processor: twoDigitAndTens,
  }, // 23 + 10 = 33; 56 - 20 = 36
  {
    page: routes.arithmetic,
    operation: operations.subtraction,
    name: "two-digit operands",
    colPerRow: 2,
    missing: arithmeticMissing.random,
    uiType: uiType.arithmetic,
    factory: arithmeticProblemsFactory,
    processor: twoDigitOperands,
  }, // 75 + 46 = 121; 85 - 37 = 48
  {
    page: routes.arithmetic,
    operation: operations.subtraction,
    name: "two-digit tidying up",
    colPerRow: 2,
    missing: arithmeticMissing.random,
    uiType: uiType.arithmetic,
    factory: arithmeticProblemsFactory,
    processor: twoDigitTidyngUp,
  }, // 89 + 93 = 182; 79 - 32 = 47
  {
    page: routes.arithmetic,
    operation: operations.subtraction,
    name: "tens within thousand",
    colPerRow: 2,
    missing: arithmeticMissing.random,
    uiType: uiType.arithmetic,
    factory: arithmeticProblemsFactory,
    processor: tensWithinThousands,
  }, // 374 + 60 = 434; 347 - 60 = 287
  {
    page: routes.arithmetic,
    operation: operations.subtraction,
    name: "hundreds within thousand",
    colPerRow: 2,
    missing: arithmeticMissing.random,
    uiType: uiType.arithmetic,
    factory: arithmeticProblemsFactory,
    processor: hundredsWithinThousands,
  }, // 374 + 200 = 574; 574 - 200 = 374
  // "three-digit operands", // 374 + 782 = 1156; 774 - 382 = 392
  // "three-digit tiding up", // 498 + 703 = 1201; 703 - 498 = 205
  // {
  //   page: routes.arithmetic,
  //   operation: operations.multiplication,
  //   name: "equal groups",
  //   colPerRow: 2,
  //   missing: arithmeticMissing.result,
  // }, // 5 + 5 + 5 = 15
  // {
  //   page: routes.arithmetic,
  //   operation: operations.multiplication,
  //   name: "array",
  //   colPerRow: 2,
  //   missing: arithmeticMissing.result,
  // }, // 5 + 5 + 5 = 15
  // {
  //   page: routes.arithmetic,
  //   operation: operations.multiplication,
  //   name: "single digit strip diagram",
  //   colPerRow: 2,
  //   missing: arithmeticMissing.result,
  //   processor: singleDigitStripDiagram,
  // }, // 5 + 5 + 5 = 15
  {
    page: routes.arithmetic,
    operation: operations.multiplication,
    name: "single digit operands",
    colPerRow: 2,
    missing: arithmeticMissing.random,
    uiType: uiType.arithmetic,
    factory: arithmeticProblemsFactory,
    processor: singleDigitOperandsMultiplicationDivision,
  }, // 8 + 7 = 15; 9 - 3 = 6
  {
    page: routes.arithmetic,
    operation: operations.multiplication,
    name: "single digit and up to twenty",
    colPerRow: 2,
    missing: arithmeticMissing.random,
    uiType: uiType.arithmetic,
    factory: arithmeticProblemsFactory,
    processor: singleDigitAndUpToTwenty,
  }, // 8 + 7 = 15; 9 - 3 = 6
  // {
  //   page: routes.arithmetic,
  //   operation: operations.division,
  //   name: "equal groups",
  //   colPerRow: 2,
  //   missing: arithmeticMissing.result,
  // }, // 5 + 5 + 5 = 15
  // {
  //   page: routes.arithmetic,
  //   operation: operations.division,
  //   name: "array",
  //   colPerRow: 2,
  //   missing: arithmeticMissing.result,
  // }, // 5 + 5 + 5 = 15
  // {
  //   page: routes.arithmetic,
  //   operation: operations.division,
  //   name: "single digit strip diagram",
  //   colPerRow: 2,
  //   missing: arithmeticMissing.result,
  // }, // 5 + 5 + 5 = 15
  {
    page: routes.arithmetic,
    operation: operations.division,
    name: "single digit operands",
    colPerRow: 2,
    missing: arithmeticMissing.random,
    uiType: uiType.arithmetic,
    factory: arithmeticProblemsFactory,
    processor: singleDigitOperandsMultiplicationDivision,
  }, // 8 + 7 = 15; 9 - 3 = 6
  {
    page: routes.arithmetic,
    operation: operations.division,
    name: "single digit and up to twenty",
    colPerRow: 2,
    missing: arithmeticMissing.random,
    uiType: uiType.arithmetic,
    factory: arithmeticProblemsFactory,
    processor: singleDigitAndUpToTwenty,
  }, // 8 + 7 = 15; 9 - 3 = 6
  // {
  //   page: routes.arithmetic,
  //   operation: sections.percentages,
  //   name: "two-digit percentage",
  //   colPerRow: 2,
  //   missing: arithmeticMissing.result,
  // }, // 17% of 36
  // {
  //   page: routes.arithmetic,
  //   operation: sections.fractions,
  //   name: "two-digit percentage",
  //   colPerRow: 2,
  //   missing: arithmeticMissing.result,
  // }, // 17% of 36 ½¾

  // **********   fractions task types   **********
  {
    page: routes.fractions,
    section: sections.fractions,
    operation: operations.addition,
    name: "1-digit same denominator simple fractions",
    colPerRow: 1,
    uiType: uiType.fractions,
    factory: fractionsProblemsFactory,
    processor: singleDigitSameDenominatorSimpleFractions,
  }, // 2 + 3 = 5; 6 - 4 = 2
  {
    page: routes.fractions,
    section: sections.fractions,
    operation: operations.addition,
    name: "1-digit same denominator mixed fractions",
    colPerRow: 1,
    uiType: uiType.fractions,
    factory: fractionsProblemsFactory,
    processor: singleDigitsingleDigitSameDenominatorMixedFractions,
  }, // 8 + 7 = 15; 9 - 3 = 6
  {
    page: routes.fractions,
    section: sections.fractions,
    operation: operations.addition,
    name: "1-digit same denominator mixed simplified fractions",
    colPerRow: 1,
    uiType: uiType.fractions,
    factory: fractionsProblemsFactory,
    processor: singleDigitSameDenominatorMixedSimplifiedFractions,
  }, // 8 + 7 = 15; 9 - 3 = 6
  {
    page: routes.fractions,
    section: sections.fractions,
    operation: operations.addition,
    name: "1-digit different denominators fractions",
    colPerRow: 1,
    uiType: uiType.fractions,
    factory: fractionsProblemsFactory,
    processor: singleDigitDifferentDenominatorsFractions,
  }, // 2 + 3 = 5; 6 - 4 = 2
  // {
  //   page: routes.fractions,
  //   section: sections.fractions,
  //   operation: operations.addition,
  //   name: "different denominators mixed fractions",
  //   colPerRow: 1,
  //   uiType: uiType.fractions,
  // }, // 8 + 7 = 15; 9 - 3 = 6
  {
    page: routes.fractions,
    section: sections.fractions,
    operation: operations.addition,
    name: "1-digit different denominators improper fractions",
    colPerRow: 1,
    uiType: uiType.fractions,
    factory: fractionsProblemsFactory,
    processor: singleDigitDifferentDenominatorsImproperFractions,
  }, // 2 + 3 = 5; 6 - 4 = 2
  {
    page: routes.fractions,
    section: sections.fractions,
    operation: operations.subtraction,
    name: "1-digit same denominator simple fractions",
    colPerRow: 1,
    uiType: uiType.fractions,
    factory: fractionsProblemsFactory,
    processor: singleDigitSameDenominatorSimpleFractions,
  }, // 2 + 3 = 5; 6 - 4 = 2
  // {
  //   page: routes.fractions,
  //   section: sections.fractions,
  //   operation: operations.subtraction,
  //   name: "same denominator mixed fractions",
  //   colPerRow: 1,
  //   uiType: uiType.fractions,
  // }, // 8 + 7 = 15; 9 - 3 = 6
  {
    page: routes.fractions,
    section: sections.fractions,
    operation: operations.subtraction,
    name: "1-digit different denominators fractions",
    colPerRow: 1,
    uiType: uiType.fractions,
    factory: fractionsProblemsFactory,
    processor: singleDigitDifferentDenominatorsFractions,
  }, // 2 + 3 = 5; 6 - 4 = 2
  // {
  //   page: routes.fractions,
  //   section: sections.fractions,
  //   operation: operations.subtraction,
  //   name: "different denominators mixed fractions",
  //   colPerRow: 2,
  // }, // 8 + 7 = 15; 9 - 3 = 6
  {
    page: routes.fractions,
    section: sections.fractions,
    operation: operations.subtraction,
    name: "1-digit different denominators improper fractions",
    colPerRow: 1,
    uiType: uiType.fractions,
    factory: fractionsProblemsFactory,
    processor: singleDigitDifferentDenominatorsImproperFractions,
  }, // 2 + 3 = 5; 6 - 4 = 2
  {
    page: routes.fractions,
    section: sections.fractions,
    operation: operations.multiplication,
    name: "1-digit fractions",
    colPerRow: 1,
    uiType: uiType.fractions,
    factory: fractionsProblemsFactory,
    processor: singleDigitFractions,
  }, // 5 + 5 + 5 = 15
  {
    page: routes.fractions,
    section: sections.fractions,
    operation: operations.division,
    name: "1-digit fractions",
    colPerRow: 1,
    uiType: uiType.fractions,
    factory: fractionsProblemsFactory,
    processor: singleDigitFractions,
  }, // 5 + 5 + 5 = 15
  {
    page: routes.fractions,
    section: sections.decimals,
    operation: operations.addition,
    name: "tenth operations",
    colPerRow: 2,
    uiType: uiType.decimals,
    factory: arithmeticProblemsFactory,
    processor: tenthAddSubtract,
  }, // 5 + 5 + 5 = 15
  {
    page: routes.fractions,
    section: sections.decimals,
    operation: operations.subtraction,
    name: "tenth operations",
    colPerRow: 2,
    uiType: uiType.decimals,
    factory: arithmeticProblemsFactory,
    processor: tenthAddSubtract,
  }, // 5 + 5 + 5 = 15
  {
    page: routes.fractions,
    section: sections.decimals,
    operation: operations.addition,
    name: "1-digit decimals",
    colPerRow: 2,
    uiType: uiType.decimals,
    factory: arithmeticProblemsFactory,
    processor: oneDigitDecimalsAddSubtract,
  }, // 5 + 5 + 5 = 15
  {
    page: routes.fractions,
    section: sections.decimals,
    operation: operations.subtraction,
    name: "1-digit decimals",
    colPerRow: 2,
    uiType: uiType.decimals,
    factory: arithmeticProblemsFactory,
    processor: oneDigitDecimalsAddSubtract,
  }, // 5 + 5 + 5 = 15
  {
    page: routes.fractions,
    section: sections.percentages,
    operation: operations.addition,
    name: "two-digit percentage",
    colPerRow: 2,
    uiType: uiType.percentages,
    factory: arithmeticProblemsFactory,
    processor: twoDigitPercentage,
  }, // 17% of 36
  {
    page: routes.fractions,
    section: sections.percentages,
    operation: operations.subtraction,
    name: "two-digit percentage",
    colPerRow: 2,
    uiType: uiType.percentages,
    factory: arithmeticProblemsFactory,
    processor: twoDigitPercentage,
  }, // 17% of 36
  // {
  //   page: routes.fractions,
  //   operation: sections.fractions,
  //   name: "two-digit percentage",
  //   colPerRow: 2,
  //   missing: "result",
  // }, // 17% of 36 ½¾
  // {
  //   page: routes.fractions,
  //   operation: "․1",
  //   name: "two-digit percentage",
  //   colPerRow: 2,
  //   missing: "result",
  // }, // 17% of 36 ½¾
];

export default ProblemTypes;
