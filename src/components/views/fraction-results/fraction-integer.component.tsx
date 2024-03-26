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

function FractionInteger({
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

  return (
    <span className="fraction__input-box">
      <input
        type="number"
        pattern="[0-9]*"
        inputMode="numeric"
        step="1"
        title=""
        className="fraction__input"
        placeholder=" "
        name={type}
        min={fraction.integer?.toString()}
        max={fraction.integer?.toString()}
        onKeyDown={processKeyDown}
        onChange={handleChange}
        ref={ref}
        value={stateProblems[stateProblemIndex][
          stateProblems[stateProblemIndex].length - 1
        ][type]?.toString()}
      />
    </span>
  );
}

export default FractionInteger;
