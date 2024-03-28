import { TArithmeticMissing } from "../types/types";

export interface ISettings {
  section?: string;
  name: string;
  type: string;
  operation: string;
  numberOfOperands: number;
  missing?: TArithmeticMissing | undefined;
  quantity: number;
}

export interface ICollapsibleProps {
  [key: string]: string;
}

export interface IOperation {
  [key: string]: string;
}

export interface IProblem {
  [key: string]: string | number;
}

export interface IProblemSet {
  type: string;
  value: string;
}

export interface IProblemType {
  [key: string]: string;
}

export interface ISection {
  [key: string]: string;
}

export interface ISectionsAttributes {
  [key: string]: string;
}

export interface IFractionProblemOperands {
  operation: string;
  firstDenominator: number;
  secondDenominator: number;
  commonDenominator: number;
  resultDenominator: number;
  firstNumerator: number;
  secondNumerator: number;
  interimNumerator1: number;
  interimNumerator2: number;
  interimDenominator1: number;
  interimDenominator2: number;
  resultNumerator: number;
  integer: number;
  remainedNumerator: number;
  remainedDenominator: number;
  simplifiedNumerator: number;
  simplifiedDenominator: number;
}
