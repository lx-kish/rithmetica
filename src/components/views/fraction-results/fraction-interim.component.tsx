import React from "react";

import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {
  setInputValue,
  problems,
} from '../../../redux/fractions/fractionsSlice';

import Sign from "../sign/sign.component";
import handleKeyDown from '../../../utils/handle-key-down-event/handle-key-down-event';

import IFractionsProblem from "../../../TS/interfaces/IFractionsProblem";

interface IProps {
  className: string;
  fraction: IFractionsProblem;
  stateProblemIndex: number,
};

const FractionInterim: React.FC<IProps> = props => {

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
    <span className={props.className}>
      <span className="fraction__interim-numerator">
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
          value={stateProblems[props.stateProblemIndex][stateProblems[props.stateProblemIndex].length - 1].interimNumerator1?.toString()}
          onKeyDown={processKeyDown}
          onChange={handleChange}
          ref={inputRefCallback}
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
          value={stateProblems[props.stateProblemIndex][stateProblems[props.stateProblemIndex].length - 1].interimNumerator2?.toString()}
          onKeyDown={processKeyDown}
          onChange={handleChange}
          ref={inputRefCallback}
          autoComplete="off" //for dropping the value when cached by browser
        />
      </span>
      <span className="fraction__delimeter"></span>
      <input
        type="number"
        pattern="[0-9]*"
        inputMode="numeric"
        className="fraction__input"
        step="1"
        title=""
        placeholder=" "
        name="interimDenominator"
        min={props.fraction.denominator?.toString()}
        max={props.fraction.denominator?.toString()}
        value={stateProblems[props.stateProblemIndex][stateProblems[props.stateProblemIndex].length - 1].interimDenominator?.toString()}
        onKeyDown={processKeyDown}
        onChange={handleChange}
        ref={inputRefCallback}
        autoComplete="off" //for dropping the value when cached by browser
      />
    </span>
  );
};

export default FractionInterim;