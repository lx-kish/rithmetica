import { IProblemType } from "../../../TS/interfaces/interfaces";

const TaskTypes: IProblemType[] = [
  {
    section: "½",
    operation: "+",
    name: "1-digit same denominator simple fractions",
    type: "fractionsAddSubtract",
  }, // 2 + 3 = 5; 6 - 4 = 2
  {
    section: "½",
    operation: "+",
    name: "1-digit same denominator mixed fractions",
    type: "fractionsAddSubtract",
  }, // 8 + 7 = 15; 9 - 3 = 6
  {
    section: "½",
    operation: "+",
    name: "1-digit same denominator mixed simplified fractions",
    type: "fractionsAddSubtract",
  }, // 8 + 7 = 15; 9 - 3 = 6
  {
    section: "½",
    operation: "+",
    name: "1-digit different denominators fractions",
    type: "fractionsAddSubtract",
  }, // 2 + 3 = 5; 6 - 4 = 2
  // {
  //   section: "½",
  //   operation: "+",
  //   name: "different denominators mixed fractions",
  //   type: "fractionsAddSubtract",
  // }, // 8 + 7 = 15; 9 - 3 = 6
  {
    section: "½",
    operation: "-",
    name: "1-digit same denominator simple fractions",
    type: "fractionsAddSubtract",
  }, // 2 + 3 = 5; 6 - 4 = 2
  // {
  //   section: "½",
  //   operation: "-",
  //   name: "same denominator mixed fractions",
  //   type: "fractionsAddSubtract",
  // }, // 8 + 7 = 15; 9 - 3 = 6
  {
    section: "½",
    operation: "-",
    name: "1-digit different denominators fractions",
    type: "fractionsAddSubtract",
  }, // 2 + 3 = 5; 6 - 4 = 2
  // {
  //   section: "½",
  //   operation: "-",
  //   name: "different denominators mixed fractions",
  //   type: "fractionsAddSubtract",
  // }, // 8 + 7 = 15; 9 - 3 = 6
  {
    section: "½",
    operation: "×",
    name: "1-digit fractions",
    type: "fractionsMultiplyDivide",
  }, // 5 + 5 + 5 = 15
  {
    section: "½",
    operation: "÷",
    name: "1-digit fractions",
    type: "fractionsMultiplyDivide",
  }, // 5 + 5 + 5 = 15
  // {
  //   section: ".1",
  //   operation: "÷",
  //   name: "1-digit decimals",
  //   type: "percentageAddSubtract",
  // }, // 5 + 5 + 5 = 15
  {
    section: "%",
    operation: "+",
    name: "two-digit percentage",
    type: "percentageAddSubtract",
  }, // 17% of 36
  {
    section: "%",
    operation: "-",
    name: "two-digit percentage",
    type: "percentageAddSubtract",
  }, // 17% of 36
  // {
  //   operation: "½",
  //   name: "two-digit percentage",
  //   type: "linear",
  //   missing: "result",
  // }, // 17% of 36 ½¾
  // {
  //   operation: "․1",
  //   name: "two-digit percentage",
  //   type: "linear",
  //   missing: "result",
  // }, // 17% of 36 ½¾
];

export default TaskTypes;
