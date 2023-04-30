import IFractionsProblemType from "../../../TS/interfaces/IFractionsProblemType";

const TaskTypes: IFractionsProblemType[] = [
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
  // {
  //   section: "½",
  //   operation: "+",
  //   name: "different denominators fractions",
  //   type: "fractionsAddSubtract",
  // }, // 2 + 3 = 5; 6 - 4 = 2
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
  // {
  //   section: "½",
  //   operation: "-",
  //   name: "different denominators fractions",
  //   type: "fractionsAddSubtract",
  // }, // 2 + 3 = 5; 6 - 4 = 2
  // {
  //   section: "½",
  //   operation: "-",
  //   name: "different denominators mixed fractions",
  //   type: "fractionsAddSubtract",
  // }, // 8 + 7 = 15; 9 - 3 = 6 
  // {
  //   section: "½",
  //   operation: "×",
  //   name: "single digit strip diagram",
  //   type: "strip-diagram",
  //   missing: "result",
  // }, // 5 + 5 + 5 = 15
  // {
  //   section: "½",
  //   operation: "÷",
  //   name: "single digit strip diagram",
  //   type: "strip-diagram",
  //   missing: "result",
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
];

export default TaskTypes;