import React from "react";

import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {
  setInputValue,
  problems,
} from '../../../redux/fractions/fractionsSlice';

import handleKeyDown from '../../../utils/handle-key-down-event/handle-key-down-event';

import IFractionsProblem from "../../../TS/interfaces/IFractionsProblem";

interface IProps {
  className: string;
  fraction: IFractionsProblem;
  type: string;
  stateProblemIndex: number;
};

const FractionInteger: React.FC<IProps> = props => {

  const stateProblems = useAppSelector(problems);

  const dispatch = useAppDispatch();

  const processKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    handleKeyDown(e);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputValue({ index: props.stateProblemIndex, name: e.currentTarget.name, value: e.currentTarget.value }));
  }

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
        name={props.type}
        min={props.fraction.integer?.toString()}
        max={props.fraction.integer?.toString()}
        onKeyDown={processKeyDown}
        onChange={handleChange}
        value={stateProblems[props.stateProblemIndex][stateProblems[props.stateProblemIndex].length - 1][props.type]?.toString()}
      />
    </span>
  );
};

export default FractionInteger;
