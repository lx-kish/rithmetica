export const routes = {
  root: "/",
  default: "/arithmetic",
  multiplicationTab: "/multiplication-tab",
  arithmetic: "/arithmetic",
  fractions: "/fractions",
} as const;

export const numberOfColumns = {
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
  random: "random",
  first: "first",
  last: "last",
  result: "result",
} as const;
