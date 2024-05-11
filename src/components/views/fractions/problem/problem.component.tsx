import React, { ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";

import {
  setInputValue,
  problems,
} from "../../../../redux/fractions/fractionsSlice";

import Fraction from "../../fraction/fraction.component";

import Sign from "../../sign/sign.component";
import Input from "../../input/input.component";

import { IProblem } from "../../../../TS/interfaces/interfaces";
import { fractionOperandTypes } from "../../../../TS/constatnts/constants";

interface IProps {
  stateProblemIndex: number;
  content: IProblem[];
}

function Problem({ stateProblemIndex, content }: IProps): ReactElement {
  const stateProblems = useAppSelector(problems);

  const dispatch = useAppDispatch();

  function getInputClassName(
    value: string | number,
    answerAtr: string | number
  ): string {
    const isValid =
      value.toString() ===
      stateProblems[stateProblemIndex][
        stateProblems[stateProblemIndex].length - 1
      ][answerAtr]?.toString();

    const elemtnClasses = `fraction__input${
      isValid ? "" : " fraction__input--invalid"
    }`;

    return elemtnClasses;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(
      setInputValue({
        index: stateProblemIndex,
        name: e.currentTarget.name,
        value: e.currentTarget.value,
      })
    );
  }

  function renderElements(operand: any, i: number): ReactElement | null {
    switch (operand.type) {
      case fractionOperandTypes.fraction:
        return (
          <Fraction
            fraction={operand}
            className="fraction"
            key={`problem__fraction-${i}`}
          />
        );

      case fractionOperandTypes.sign:
        return (
          <Sign
            sign={operand.value}
            className="fraction__sign"
            key={`problem__sign-${operand.value}-${i}`}
          />
        );

      case fractionOperandTypes.interim:
        return (
          <span className="fraction" key={`problem__fraction-${i}`}>
            <span className="fraction__interim">
              <Input
                pattern="[0-9]*"
                className={getInputClassName(
                  operand.numerator1,
                  "interimNumerator1"
                )}
                step="1"
                name="interimNumerator1"
                result={operand.numerator1?.toString()}
                value={stateProblems[stateProblemIndex][
                  stateProblems[stateProblemIndex].length - 1
                ].interimNumerator1?.toString()}
                handleChange={handleChange}
              />
              <Sign
                sign={
                  operand.sign === "×" || operand.sign === "÷"
                    ? "×"
                    : operand.sign
                }
                className="fraction__sign fraction__sign--interim"
              />
              <Input
                pattern="[0-9]*"
                className={getInputClassName(
                  operand.numerator2,
                  "interimNumerator2"
                )}
                step="1"
                name="interimNumerator2"
                result={operand.numerator2?.toString()}
                value={stateProblems[stateProblemIndex][
                  stateProblems[stateProblemIndex].length - 1
                ].interimNumerator2?.toString()}
                handleChange={handleChange}
              />
            </span>
            <span className="fraction__delimeter"></span>
            <span className="fraction__interim">
              <Input
                pattern="[0-9]*"
                className={getInputClassName(
                  operand.denominator1,
                  "interimDenominator1"
                )}
                step="1"
                name="interimDenominator1"
                result={operand.denominator1?.toString()}
                value={stateProblems[stateProblemIndex][
                  stateProblems[stateProblemIndex].length - 1
                ].interimDenominator1?.toString()}
                handleChange={handleChange}
              />
              {operand.sign === "×" || operand.sign === "÷" ? (
                <>
                  <Sign
                    sign={"×"}
                    className="fraction__sign fraction__sign--interim"
                  />
                  <Input
                    pattern="[0-9]*"
                    className={getInputClassName(
                      operand.denominator2,
                      "interimDenominator2"
                    )}
                    step="1"
                    name="interimDenominator2"
                    result={operand.denominator2?.toString()}
                    value={stateProblems[stateProblemIndex][
                      stateProblems[stateProblemIndex].length - 1
                    ].interimDenominator2?.toString()}
                    handleChange={handleChange}
                  />
                </>
              ) : null}
            </span>
          </span>
        );

      case fractionOperandTypes.resultInteger:
      case fractionOperandTypes.remainedInteger:
      case fractionOperandTypes.simplifiedInteger:
        return (
          <span
            className="fraction__input-box"
            key={`problem__integer-${operand.type}-${i}`}
          >
            <Input
              pattern="[0-9]*"
              step="1"
              className={getInputClassName(operand.integer, operand.type)}
              name={operand.type}
              result={operand.integer?.toString()}
              value={stateProblems[stateProblemIndex][
                stateProblems[stateProblemIndex].length - 1
              ][operand.type]?.toString()}
              handleChange={handleChange}
            />
          </span>
        );
      case fractionOperandTypes.result:
      case fractionOperandTypes.remained:
      case fractionOperandTypes.simplified:
        const numeratorName = `${operand.type}Numerator`;
        const denominatorName = `${operand.type}Denominator`;

        return (
          <span
            className="fraction"
            key={`problem__fraction-${operand.type}-${i}`}
          >
            <Input
              pattern="[0-9]*"
              className={getInputClassName(operand.numerator, numeratorName)}
              step="1"
              name={numeratorName}
              result={operand.numerator?.toString()}
              value={stateProblems[stateProblemIndex][
                stateProblems[stateProblemIndex].length - 1
              ][numeratorName]?.toString()}
              handleChange={handleChange}
            />
            <span className="fraction__delimeter"></span>
            <Input
              pattern="[0-9]*"
              className={getInputClassName(
                operand.denominator,
                denominatorName
              )}
              step="1"
              name={denominatorName}
              result={operand.denominator?.toString()}
              value={stateProblems[stateProblemIndex][
                stateProblems[stateProblemIndex].length - 1
              ][denominatorName]?.toString()}
              handleChange={handleChange}
            />
          </span>
        );

      default:
        break;
    }
    return null;
  }

  return (
    <div className="problem problem--fraction">
      {content.map((operand: Record<string, any>, i) =>
        renderElements(operand, i)
      )}
    </div>
  );
}

export default Problem;
