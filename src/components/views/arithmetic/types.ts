import IProblemType from "../../../TS/interfaces/IProblemType";

const TaskTypes: IProblemType[] = [
  {
    // 2 + 3 = 5; 6 - 4 = 2
    operation: "+",
    name: "up to ten",
    type: "equation",
    missing: "random",
  },
  {
    operation: "+",
    name: "single digit operands",
    type: "equation",
    missing: "random",
  }, // 8 + 7 = 15; 9 - 3 = 6 
  {
    operation: "+",
    name: "two- and single- digit",
    type: "equation",
    missing: "random",
  }, // 23 + 9 = 32; 17 - 8 = 9
  {
    operation: "+",
    name: "two-digit and tens",
    type: "equation",
    missing: "random",
  }, // 23 + 10 = 33; 56 - 20 = 36
  {
    operation: "+",
    name: "two-digit operands",
    type: "equation",
    missing: "random",
  }, // 75 + 46 = 121; 85 - 37 = 48
  {
    operation: "+",
    name: "two-digit tidying up",
    type: "equation",
    missing: "random",
  }, // 89 + 93 = 182; 79 - 32 = 47
  {
    operation: "+",
    name: "tens within thousand",
    type: "equation",
    missing: "random",
  }, // 374 + 60 = 434; 347 - 60 = 287
  {
    operation: "+",
    name: "hundreds within thousand",
    type: "equation",
    missing: "random",
  }, // 374 + 200 = 574; 574 - 200 = 374
  {
    // 2 + 3 = 5; 6 - 4 = 2
    operation: "-",
    name: "up to ten",
    type: "equation",
    missing: "random",
  },
  {
    operation: "-",
    name: "single digit operands",
    type: "equation",
    missing: "random",
  }, // 8 + 7 = 15; 9 - 3 = 6 
  {
    operation: "-",
    name: "two- and single- digit",
    type: "equation",
    missing: "random",
  }, // 23 + 9 = 32; 17 - 8 = 9
  {
    operation: "-",
    name: "two-digit and tens",
    type: "equation",
    missing: "random",
  }, // 23 + 10 = 33; 56 - 20 = 36
  {
    operation: "-",
    name: "two-digit operands",
    type: "equation",
    missing: "random",
  }, // 75 + 46 = 121; 85 - 37 = 48
  {
    operation: "-",
    name: "two-digit tidying up",
    type: "equation",
    missing: "random",
  }, // 89 + 93 = 182; 79 - 32 = 47
  {
    operation: "-",
    name: "tens within thousand",
    type: "equation",
    missing: "random",
  }, // 374 + 60 = 434; 347 - 60 = 287
  {
    operation: "-",
    name: "hundreds within thousand",
    type: "equation",
    missing: "random",
  }, // 374 + 200 = 574; 574 - 200 = 374
  // "three-digit operands", // 374 + 782 = 1156; 774 - 382 = 392
  // "three-digit tiding up", // 498 + 703 = 1201; 703 - 498 = 205
  // "tens within thousand",
  // {
  //   operation: "×",
  //   name: "equal groups",
  //   type: "equal-groups",
  //   missing: "result",
  // }, // 5 + 5 + 5 = 15
  // {
  //   operation: "×",
  //   name: "array",
  //   type: "array",
  //   missing: "result",
  // }, // 5 + 5 + 5 = 15
  {
    operation: "×",
    name: "single digit strip diagram",
    type: "strip-diagram",
    missing: "result",
  }, // 5 + 5 + 5 = 15
  {
    operation: "×",
    name: "single digit operands",
    type: "equation",
    missing: "random",
  }, // 8 + 7 = 15; 9 - 3 = 6 
  {
    operation: "×",
    name: "single digit and up to twenty",
    type: "equation",
    missing: "random",
  }, // 8 + 7 = 15; 9 - 3 = 6 
  // {
  //   operation: "÷",
  //   name: "equal groups",
  //   type: "equal-groups",
  //   missing: "result",
  // }, // 5 + 5 + 5 = 15
  // {
  //   operation: "÷",
  //   name: "array",
  //   type: "array",
  //   missing: "result",
  // }, // 5 + 5 + 5 = 15
  {
    operation: "÷",
    name: "single digit strip diagram",
    type: "strip-diagram",
    missing: "result",
  }, // 5 + 5 + 5 = 15
  {
    operation: "÷",
    name: "single digit operands",
    type: "equation",
    missing: "random",
  }, // 8 + 7 = 15; 9 - 3 = 6 
  {
    operation: "÷",
    name: "single digit and up to twenty",
    type: "equation",
    missing: "random",
  }, // 8 + 7 = 15; 9 - 3 = 6 
  // {
  //   operation: "%",
  //   name: "two-digit percentage",
  //   type: "linear",
  //   missing: "result",
  // }, // 17% of 36
  // {
  //   operation: "½",
  //   name: "two-digit percentage",
  //   type: "linear",
  //   missing: "result",
  // }, // 17% of 36 ½¾
];

export default TaskTypes;