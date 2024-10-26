import {
  columnsPerRow,
  routes,
  arithmeticOperandTypes,
  fractionOperandTypes,
  arithmeticMissing,
  sections,
  operations,
  uiType,
} from "../constants/constants";

export type TRoutes = (typeof routes)[keyof typeof routes];

export type TcolumnsPerRow = (typeof columnsPerRow)[keyof typeof columnsPerRow];

export type TArithmeticOperandTypes =
  (typeof arithmeticOperandTypes)[keyof typeof arithmeticOperandTypes];

export type TArithmeticMissing =
  (typeof arithmeticMissing)[keyof typeof arithmeticMissing];

export type TFractionOperandTypes =
  (typeof fractionOperandTypes)[keyof typeof fractionOperandTypes];

export type TSections = (typeof sections)[keyof typeof sections];

export type TOperations = (typeof operations)[keyof typeof operations];

export type TUIType = (typeof uiType)[keyof typeof uiType];
