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

  /**
   * Prevents default on passive event listener onWheel,
   * for details see:
   * https://stackoverflow.com/questions/63663025/react-onwheel-handler-cant-preventdefault-because-its-a-passive-event-listenev
   * https://github.com/facebook/react/pull/19654
   * https://stackoverflow.com/questions/54346040/react-hooks-ref-is-not-available-inside-useeffect/63033314#63033314
   * https://legacy.reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node
   */
  const onWheel = React.useCallback(
    (e: WheelEvent) => {
      e.preventDefault();
    },
    [],
  );

  const inputRefCallback = React.useCallback(

    (node: HTMLInputElement) => {

      if (node == null) return;

      node.addEventListener('wheel', onWheel, { passive: false });
    },
    [onWheel],
  );

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
        ref={inputRefCallback}
        value={stateProblems[props.stateProblemIndex][stateProblems[props.stateProblemIndex].length - 1][props.type]?.toString()}
      />
    </span>
  );
};

export default FractionInteger;
