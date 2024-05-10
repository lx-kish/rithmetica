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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setInputValue({
        index: stateProblemIndex,
        name: e.currentTarget.name,
        value: e.currentTarget.value,
      })
    );
  };

  function renderElements(operand: any, i: number): ReactElement | null {
    const className = "fraction";

    switch (operand.type) {
      case fractionOperandTypes.fraction:
        return (
          <Fraction
            fraction={operand}
            className={className}
            key={`problem__fraction-${i}`}
          />
        );

      case fractionOperandTypes.sign:
        return (
          <Sign
            sign={operand.value}
            className={`${className}__sign`}
            key={`problem__sign-${operand.value}-${i}`}
          />
        );

      case fractionOperandTypes.interim:
        return (
          <span className="fraction" key={`problem__fraction-${i}`}>
            <span className="fraction__interim">
              <Input
                pattern="[0-9]*"
                className={`${className}__input`}
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
                className={`${className}__sign ${className}__sign--interim`}
              />
              <Input
                pattern="[0-9]*"
                className={`${className}__input`}
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
                className={`${className}__input`}
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
                    className={`${className}__input`}
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
              className={`${className}__input`}
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
            className={className}
            key={`problem__fraction-${operand.type}-${i}`}
          >
            <Input
              pattern="[0-9]*"
              className={`${className}__input`}
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
              className={`${className}__input`}
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
