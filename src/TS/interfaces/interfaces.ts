import {
  ButtonHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
  LegacyRef,
  ReactNode,
} from "react";

import {
  TArithmeticMissing,
  TRoutes,
  TSections,
  TUIType,
} from "../types/types";

export interface ISettings {
  id?: string;
  page: TRoutes;
  section?: string;
  name: string;
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

export interface IFractionGeneratedOperands {
  operation: string;
  firstDenominator: number;
  secondDenominator: number;
  resultDenominator: number;
  firstNumerator: number;
  secondNumerator: number;
  interimNumerator1: number;
  interimNumerator2: number;
  interimDenominator1: number;
  interimDenominator2: number;
  resultNumerator: number;
}

export interface IFractionProblemOperands extends IFractionGeneratedOperands {
  commonDenominator: number;
  integer: number;
  remainedNumerator: number;
  remainedDenominator: number;
  simplifiedNumerator: number;
  simplifiedDenominator: number;
}

export interface IProblems {
  problems: IProblem[][];
}

export interface IProblemState extends ISettings, IProblems {}

export interface IProblemsState {
  settings: ISettings[];
  problems: IProblemState[];
}

export interface ISpanProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
}

export interface IBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  passingRef?: LegacyRef<HTMLInputElement> | undefined;
}
