import { ReactElement } from "react";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setInputValue, problems } from "../../../redux/problems/problemsSlice";

import Number from "../number/number.component";
import Sign from "../sign/sign.component";
import InputNumeric from "../input-numeric/input-numeric.component";

import { IProblem, IProblemState } from "../../../TS/interfaces/interfaces";
import { arithmeticOperandTypes } from "../../../TS/constants/constants";

interface IProps {
  problemStateId: string;
  stateProblemIndex: number;
  content: IProblem[];
}

function DecimalsProblem({
  problemStateId,
  stateProblemIndex,
  content,
}: IProps): ReactElement {
  const state = useAppSelector(problems);

  const stateProblems = state.find(
    (problem: IProblemState) => problem.id === problemStateId
  )!.problems;

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
        id: problemStateId,
        problemIndex: stateProblemIndex,
        name: e.currentTarget.name,
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
            key={`${i}-problem__digit`}
          />
        );

      case arithmeticOperandTypes.sign:
        return (
          <Sign className="problem__sign" key={`${i}-problem__sign`}>
            {operand.value}
          </Sign>
        );

      case arithmeticOperandTypes.input:
        return (
          <InputNumeric
            key={`${i}-problem__input`}
            pattern="[0-9]+([,\.][0-9]+)?"
            className={getInputClassName(operand.value)}
            step="0.1"
            name="value"
            result={operand.value.toString()}
            value={content[content.length - 1].value.toString()}
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

export default DecimalsProblem;
