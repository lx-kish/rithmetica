import {
  TArithmeticMissing,
  TRoutes,
  TSections,
  TUIType,
} from "../types/types";

export interface ISettings {
  page: TRoutes;
  section?: string;
  name: string;
  operation: string;
  numberOfOperands: number;
  missing?: TArithmeticMissing | undefined;
  quantity: number;
}

export interface IProblemsState {
  settings: ISettings[];
  columns: number;
  problems: IProblem[][];
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

export interface IProblemsFactory {
  (
    route: TRoutes,
    name: string,
    operation: string,
    numberOfOperands: number,
    quantity: number,
    missing?: TArithmeticMissing | undefined,
    section?: TSections | undefined
  ): IProblem[][];
}

export interface IArithmeticProcessor {
  (operation: string, numberOfOperands: number): number[] | undefined;
}

export interface IFractionsProcessor {
  (operation: string, numberOfOperands: number):
    | IFractionProblemOperands
    | undefined;
}

export interface IProblemType {
  page: string;
  section?: string;
  operation: string;
  name: string;
  colPerRow: number;
  missing?: string;
  uiType: TUIType;
  factory: IProblemsFactory;
  processor: IFractionsProcessor | IArithmeticProcessor;
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
