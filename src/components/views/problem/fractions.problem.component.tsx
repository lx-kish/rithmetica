import React, { ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

import { setInputValue, problems } from "../../../redux/problems/problemsSlice";

import Fraction from "../fraction/fraction.component";

import Sign from "../sign/sign.component";
import Input from "../input/input.component";

import { IProblem } from "../../../TS/interfaces/interfaces";
import { fractionOperandTypes } from "../../../TS/constants/constants";
import FractionDelimeter from "../fraction/fraction-delimeter/fraction-delimeter.component";

interface IProps {
  problemStateId: string;
  stateProblemIndex: number;
  content: IProblem[];
}

function FractionsProblem({
  problemStateId,
  stateProblemIndex,
  content,
}: IProps): ReactElement {
  const state = useAppSelector(problems);

  const stateProblems = state.find(
    (problem) => problem.id === problemStateId
  )!.problems;

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

  function isDisabled(field: string) {
    // 1) Getting problem answers object
    const answers = content.filter((val) => val.type === "answers")[0];

    // 2) Getting list of types to check the field's position
    const types = Object.values(content).map((val) => val.type);

    // 3) Getting fields to verity based on field's position in the problem array - all inputs BEFORE current input
    const verificationFields = Object.values(content).filter(
      (val) =>
        val.type !== "type" &&
        val.type !== "fraction" &&
        val.type !== "sign" &&
        types.indexOf(val.type) < types.indexOf(field) - 1
    );

    // 4) Verification
    const invalidFields = verificationFields.filter((field) => {
      // Integer - no need to iterate
      if (field.type.toString().includes("integer")) {
        return answers[field.type.toString()] !== field.integer.toString();
      }
      const verified = Object.keys(field)
        .filter((key) => key !== "type" && key !== "integer" && key !== "sign")
        .filter((key) => {
          const fieldName = `${field.type}${
            key.charAt(0).toUpperCase() + key.slice(1)
          }`;
          return +answers[fieldName] !== +field[key];
        });

      return verified.length !== 0;
    });

    return invalidFields.length !== 0;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(
      setInputValue({
        id: problemStateId,
        problemIndex: stateProblemIndex,
        name: e.currentTarget.name,
        value: e.currentTarget.value,
      })
    );
  }

  function renderElements(
    operand: Record<string, any>,
    i: number
  ): ReactElement | null {
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
            className="fraction__sign"
            key={`problem__sign-${operand.value}-${i}`}
          >
            {operand.value}
          </Sign>
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
                value={content[
                  content.length - 1
                ].interimNumerator1?.toString()}
                handleChange={handleChange}
              />
              <Sign className="fraction__sign fraction__sign--interim">
                {operand.sign === "×" || operand.sign === "÷"
                  ? "×"
                  : operand.sign}
              </Sign>
              <Input
                pattern="[0-9]*"
                className={getInputClassName(
                  operand.numerator2,
                  "interimNumerator2"
                )}
                step="1"
                name="interimNumerator2"
                result={operand.numerator2?.toString()}
                value={content[
                  content.length - 1
                ].interimNumerator2?.toString()}
                handleChange={handleChange}
              />
            </span>
            <FractionDelimeter className="fraction__delimeter" />
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
                value={content[
                  content.length - 1
                ].interimDenominator1?.toString()}
                handleChange={handleChange}
              />
              {operand.sign === "×" || operand.sign === "÷" ? (
                <>
                  <Sign className="fraction__sign fraction__sign--interim">
                    ×
                  </Sign>
                  <Input
                    pattern="[0-9]*"
                    className={getInputClassName(
                      operand.denominator2,
                      "interimDenominator2"
                    )}
                    step="1"
                    name="interimDenominator2"
                    result={operand.denominator2?.toString()}
                    value={content[
                      content.length - 1
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
              disabled={isDisabled(operand.type)}
              value={content[content.length - 1][operand.type]?.toString()}
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
              disabled={isDisabled(operand.type)}
              value={content[content.length - 1][numeratorName]?.toString()}
              handleChange={handleChange}
            />
            <FractionDelimeter className="fraction__delimeter" />
            <Input
              pattern="[0-9]*"
              className={getInputClassName(
                operand.denominator,
                denominatorName
              )}
              step="1"
              name={denominatorName}
              result={operand.denominator?.toString()}
              disabled={isDisabled(operand.type)}
              value={content[content.length - 1][denominatorName]?.toString()}
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

export default FractionsProblem;
