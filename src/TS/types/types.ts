import { numberOfColumns, routes } from "../constatnts/constants";

export type TFractionOperandsType = {
  operation?: string;
  firstDenominator?: number;
  secondDenominator?: number;
  commonDenominator?: number;
  resultDenominator?: number;
  firstNumerator?: number;
  secondNumerator?: number;
  interimNumerator1?: number;
  interimNumerator2?: number;
  interimDenominator1?: number;
  interimDenominator2?: number;
  resultNumerator?: number;
  integer?: number;
  remainedNumerator?: number;
  remainedDenominator?: number;
  simplifiedNumerator?: number;
  simplifiedDenominator?: number;
};

export type TRoutes = (typeof routes)[keyof typeof routes];

export type TNumberOfColumns =
  (typeof numberOfColumns)[keyof typeof numberOfColumns];
