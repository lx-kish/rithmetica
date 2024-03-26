import {
  numberOfColumns,
  routes,
  arithmeticOperandTypes,
  fractionOperandTypes,
  arithmeticMissing,
} from "../constatnts/constants";

export type TRoutes = (typeof routes)[keyof typeof routes];

export type TNumberOfColumns =
  (typeof numberOfColumns)[keyof typeof numberOfColumns];

export type TArithmeticOperandTypes =
  (typeof arithmeticOperandTypes)[keyof typeof arithmeticOperandTypes];

export type TArithmeticMissing =
  (typeof arithmeticMissing)[keyof typeof arithmeticMissing];

export type TFractionOperandTypes =
  (typeof fractionOperandTypes)[keyof typeof fractionOperandTypes];
