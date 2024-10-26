export const routes = {
  root: "/rithmetica",
  default: "/rithmetica/arithmetic",
  multiplicationTab: "/rithmetica/multiplication-tab",
  arithmetic: "/rithmetica/arithmetic",
  fractions: "/rithmetica/fractions",
} as const;

export const columnsPerRow = {
  one: 1,
  two: 2,
} as const;

export const arithmeticOperandTypes = {
  type: "type",
  input: "input",
  sign: "sign",
  operand: "operand",
  result: "result",
} as const;

export const sections = {
  fractions: "½",
  decimals: ".1",
  percentages: "%",
} as const;

export const operations = {
  addition: "+",
  subtraction: "-",
  multiplication: "×",
  division: "÷",
} as const;

export const uiType = {
  arithmetic: "arithmetic",
  fractions: "fractions",
  decimals: "decimals",
  percentages: "percentages",
} as const;

export const fractionOperandTypes = {
  type: "type",
  fraction: "fraction",
  sign: "sign",
  interim: "interim",
  resultInteger: "resultInteger",
  remainedInteger: "remainedInteger",
  simplifiedInteger: "simplifiedInteger",
  result: "result",
  remained: "remained",
  simplified: "simplified",
  answers: "answers",
};

export const arithmeticMissing = {
  first: "first",
  last: "last",
  result: "result",
  random: "random",
} as const;
