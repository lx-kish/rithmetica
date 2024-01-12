import React from "react";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  setInputValue,
  problems,
} from "../../../redux/fractions/fractionsSlice";

import Sign from "../sign/sign.component";
import handleKeyDown from "../../../utils/handle-key-down-event/handle-key-down-event";

import { useInputScrollRefCallback } from "../../../hooks/use-input-scroll-ref-callback/use-input-scroll-ref-callback";

import IFractionsProblem from "../../../TS/interfaces/IFractionsProblem";

interface IProps {
  className: string;
  fraction: IFractionsProblem;
  stateProblemIndex: number;
}

const FractionInterim: React.FC<IProps> = (props) => {
  const stateProblems = useAppSelector(problems);

  const dispatch = useAppDispatch();

  const processKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    handleKeyDown(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setInputValue({
        index: props.stateProblemIndex,
        name: e.currentTarget.name,
        value: e.currentTarget.value,
      })
    );
  };

  const ref = useInputScrollRefCallback();

  return (
    <span className={props.className}>
      <span className="fraction__interim">
        <input
          type="number"
          pattern="[0-9]*"
          inputMode="numeric"
          className="fraction__input"
          step="1"
          title=""
          placeholder=" "
          name="interimNumerator1"
          min={props.fraction.numerator1?.toString()}
          max={props.fraction.numerator1?.toString()}
          value={stateProblems[props.stateProblemIndex][
            stateProblems[props.stateProblemIndex].length - 1
          ].interimNumerator1?.toString()}
          onKeyDown={processKeyDown}
          onChange={handleChange}
          ref={ref}
          autoComplete="off" //for dropping the value when cached by browser
        />
        <Sign
          sign={props.fraction.sign}
          className="fraction__sign fraction__sign--interim"
        />
        <input
          type="number"
          pattern="[0-9]*"
          inputMode="numeric"
          className="fraction__input"
          step="1"
          title=""
          placeholder=" "
          name="interimNumerator2"
          min={props.fraction.numerator2?.toString()}
          max={props.fraction.numerator2?.toString()}
          value={stateProblems[props.stateProblemIndex][
            stateProblems[props.stateProblemIndex].length - 1
          ].interimNumerator2?.toString()}
          onKeyDown={processKeyDown}
          onChange={handleChange}
          ref={ref}
          autoComplete="off" //for dropping the value when cached by browser
        />
      </span>
      <span className="fraction__delimeter"></span>
      <span className="fraction__interim">
        <input
          type="number"
          pattern="[0-9]*"
          inputMode="numeric"
          className="fraction__input"
          step="1"
          title=""
          placeholder=" "
          name="interimDenominator1"
          min={props.fraction.denominator1?.toString()}
          max={props.fraction.denominator1?.toString()}
          value={stateProblems[props.stateProblemIndex][
            stateProblems[props.stateProblemIndex].length - 1
          ].interimDenominator1?.toString()}
          onKeyDown={processKeyDown}
          onChange={handleChange}
          ref={ref}
          autoComplete="off" //for dropping the value when cached by browser
        />
      </span>
    </span>
  );
};

export default FractionInterim;
