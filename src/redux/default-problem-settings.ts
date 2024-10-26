import { arithmeticMissing, routes, sections } from "../TS/constants/constants";
import { ISettings } from "../TS/interfaces/interfaces";
import getRandomString from "../utils/get-random-string/get-random-string";

// default common settings
export const DEFAULT_OPERATION = "+";
export const DEFAULT_NUMBER_OF_OPERANDS = 2;
export const DEFAULT_QUANTITY = 8;

// default arithmetic settings
export const DEFAULT_ARITHMETIC_ROUTE = routes.arithmetic;
export const DEFAULT_ARITHMETIC_NAME = "up to ten";
export const DEFAULT_MISSING = arithmeticMissing.random;
export const DEFAULT_ARITHMETIC_COLUMNS_PER_ROW = 2;

// initial fractions settings
export const DEFAULT_FRACTIONS_ROUTE = routes.fractions;
export const DEFAULT_SECTION = sections.fractions;
export const DEFAULT_FRACTIONS_NAME =
  "1-digit same denominator simple fractions";
export const DEFAULT_FRACTIONS_COLUMNS_PER_ROW = 1;

export const defaultSettings: ISettings[] = [
  {
    id: getRandomString(),
    page: DEFAULT_ARITHMETIC_ROUTE,
    operation: DEFAULT_OPERATION,
    missing: DEFAULT_MISSING,
    name: DEFAULT_ARITHMETIC_NAME,
    numberOfOperands: DEFAULT_NUMBER_OF_OPERANDS,
    quantity: DEFAULT_QUANTITY,
  },
  {
    id: getRandomString(),
    page: DEFAULT_FRACTIONS_ROUTE,
    section: DEFAULT_SECTION,
    operation: DEFAULT_OPERATION,
    name: DEFAULT_FRACTIONS_NAME,
    numberOfOperands: DEFAULT_NUMBER_OF_OPERANDS,
    quantity: DEFAULT_QUANTITY,
  },
];
