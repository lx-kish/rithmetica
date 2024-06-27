import React, { ReactElement } from "react";

import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import {
  setInputValue,
  problems,
} from "../../../../redux/arithmetic/arithmeticSlice";

import Number from "../../number/number.component";
import Sign from "../../sign/sign.component";
import Input from "../../input/input.component";

import { IProblem } from "../../../../TS/interfaces/interfaces";
import { arithmeticOperandTypes } from "../../../../TS/constatnts/constants";

interface IProps {
  stateProblemIndex: number;
  content: IProblem[];
}

function ArithmeticProblem({
  stateProblemIndex,
  content,
}: IProps): ReactElement {
  const stateProblems = useAppSelector(problems);

  const dispatch = useAppDispatch();

  function getInputClassName(value: string | number): string {
    const isValid =
      value.toString() ===
      stateProblems[stateProblemIndex][
        stateProblems[stateProblemIndex].length - 1
      ].value.toString();

    const elemtnClasses = `problem__input${
      isValid ? "" : " problem__input--invalid"
    }`;

    return elemtnClasses;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(
      setInputValue({
        index: stateProblemIndex,
        value: e.currentTarget.value,
      })
    );
  }

  function renderElements(operand: any, i: number): ReactElement | null {
    switch (operand.type) {
      case arithmeticOperandTypes.operand:
        return (
          <Number
            number={operand.value.toString()}
            className="problem__digit"
            key={`problem__digit-${i}`}
          />
        );

      case arithmeticOperandTypes.sign:
        return (
          <Sign
            sign={operand.value}
            className="problem__sign"
            key={`problem__sign-${i}`}
          />
        );

      case arithmeticOperandTypes.input:
        return (
          <Input
            key={`problem__input-${i}`}
            pattern="[0-9]*"
            className={getInputClassName(operand.value)}
            step="1"
            result={operand.value.toString()}
            value={stateProblems[stateProblemIndex][
              stateProblems[stateProblemIndex].length - 1
            ].value.toString()}
            handleChange={handleChange}
          />
        );

      default:
        break;
    }

    return null;
  }

  return (
    <div className="problem">
      {content.map((operand: Record<string, any>, i) =>
        renderElements(operand, i)
      )}
    </div>
  );
}

export default ArithmeticProblem;
