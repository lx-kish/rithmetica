import { ChangeEvent, ReactElement, ReactNode } from "react";

import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";

import {
  setInputValue,
  problems,
} from "../../../../redux/problems/problemsSlice";

import { IProblem } from "../../../../TS/interfaces/interfaces";

interface IProps {
  problemStateId: string;
  stateProblemIndex: number;
  content: IProblem[];
  children: ({}: {
    getInputClassName: (
      value: string | number,
      answerAtr: string | number
    ) => string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    isDisabled: (field: string) => boolean;
  }) => ReactElement;
}
function FractionLogic({
  problemStateId,
  stateProblemIndex,
  content,
  children,
}: IProps): ReactNode {
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

    const elementClasses = `fraction__input${
      isValid ? "" : " fraction__input--invalid"
    }`;

    return elementClasses;
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

  return children({ getInputClassName, handleChange, isDisabled });
}

export default FractionLogic;
