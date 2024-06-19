import {
  arithmeticMissing,
  routes,
  sections,
} from "../TS/constatnts/constants";
import { ISettings } from "../TS/interfaces/interfaces";
// import sections from "../sections";

// default common settings
export const DEFAULT_OPERATION = "+";
export const DEFAULT_NUMBER_OF_OPERANDS = 2;

// default arithmetic settings
export const DEFAULT_ARITHMETIC_ROUTE = routes.arithmetic;
const DEFAULT_ARITHMETIC_NAME = "up to ten";
export const DEFAULT_MISSING = arithmeticMissing.random;
const DEFAULT_ARITHMETIC_QUANTITY = 8;
export const DEFAULT_ARITHMETIC_COLUMNS_PER_ROW = 2;

// initial fractions settings
export const DEFAULT_FRACTIONS_ROUTE = routes.fractions;
export const DEFAULT_FRACTIONS_SECTION = sections.fractions;
const DEFAULT_FRACTIONS_NAME = "1-digit same denominator simple fractions";
const DEFAULT_FRACTIONS_QUANTITY = 8;
export const DEFAULT_FRACTIONS_COLUMNS_PER_ROW = 1;

export const defaultArithmeticSettings: ISettings = {
  page: DEFAULT_ARITHMETIC_ROUTE,
  operation: DEFAULT_OPERATION,
  name: DEFAULT_ARITHMETIC_NAME,
  missing: DEFAULT_MISSING,
  numberOfOperands: DEFAULT_NUMBER_OF_OPERANDS,
  quantity: DEFAULT_ARITHMETIC_QUANTITY,
};

export const defaultFractionsSettings: ISettings = {
  page: DEFAULT_FRACTIONS_ROUTE,
  section: DEFAULT_FRACTIONS_SECTION,
  operation: DEFAULT_OPERATION,
  name: DEFAULT_FRACTIONS_NAME,
  numberOfOperands: DEFAULT_NUMBER_OF_OPERANDS,
  quantity: DEFAULT_FRACTIONS_QUANTITY,
};

export const defaultArithmeticProblemSettings: ISettings[] = [
  {
    page: DEFAULT_ARITHMETIC_ROUTE,
    operation: DEFAULT_OPERATION,
    name: DEFAULT_ARITHMETIC_NAME,
    missing: DEFAULT_MISSING,
    numberOfOperands: DEFAULT_NUMBER_OF_OPERANDS,
    quantity: DEFAULT_ARITHMETIC_QUANTITY,
  },
];

export const defaultFractionsProblemSettings: ISettings[] = [
  {
    page: DEFAULT_FRACTIONS_ROUTE,
    section: DEFAULT_FRACTIONS_SECTION,
    operation: DEFAULT_OPERATION,
    name: DEFAULT_FRACTIONS_NAME,
    numberOfOperands: DEFAULT_NUMBER_OF_OPERANDS,
    quantity: DEFAULT_FRACTIONS_QUANTITY,
  },
];
