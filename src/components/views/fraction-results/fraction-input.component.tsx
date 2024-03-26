import { ReactElement } from "react";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  setInputValue,
  problems,
} from "../../../redux/fractions/fractionsSlice";

import handleKeyDown from "../../../utils/handle-key-down-event/handle-key-down-event";

import { useInputScrollRefCallback } from "../../../hooks/use-input-scroll-ref-callback/use-input-scroll-ref-callback";

import { IProblem } from "../../../TS/interfaces/interfaces";

interface IProps {
  className: string;
  fraction: IProblem;
  type: string;
  stateProblemIndex: number;
}

function FractionInput({
  className,
  fraction,
  type,
  stateProblemIndex,
}: IProps): ReactElement {
  const stateProblems = useAppSelector(problems);

  const dispatch = useAppDispatch();

  const processKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    handleKeyDown(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setInputValue({
        index: stateProblemIndex,
        name: e.currentTarget.name,
        value: e.currentTarget.value,
      })
    );
  };

  const ref = useInputScrollRefCallback();

  const numeratorName = `${type}Numerator`;
  const denominatorName = `${type}Denominator`;

  return (
    <span className={className}>
      <input
        type="number"
        pattern="[0-9]*"
        inputMode="numeric"
        className="fraction__input"
        step="1"
        title=""
        placeholder=" "
        name={numeratorName}
        min={fraction.numerator?.toString()}
        max={fraction.numerator?.toString()}
        value={stateProblems[stateProblemIndex][
          stateProblems[stateProblemIndex].length - 1
        ][numeratorName]?.toString()}
        onKeyDown={processKeyDown}
        onChange={handleChange}
        ref={ref}
        autoComplete="off" //for dropping the value when cached by browser
      />
      <span className="fraction__delimeter"></span>
      <input
        type="number"
        pattern="[0-9]*"
        inputMode="numeric"
        className="fraction__input"
        step="1"
        title=""
        placeholder=" "
        name={denominatorName}
        min={fraction.denominator?.toString()}
        max={fraction.denominator?.toString()}
        value={stateProblems[stateProblemIndex][
          stateProblems[stateProblemIndex].length - 1
        ][denominatorName]?.toString()}
        onKeyDown={processKeyDown}
        onChange={handleChange}
        ref={ref}
        autoComplete="off" //for dropping the value when cached by browser
      />
    </span>
  );
}

export default FractionInput;
