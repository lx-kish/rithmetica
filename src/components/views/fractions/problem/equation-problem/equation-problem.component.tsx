import React from 'react';

import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks';
import {
	setInputValue,
	problems,
} from '../../../../../redux/arithmetic/arithmeticSlice';

import Number from '../../../number/number.component';
import Sign from '../../../sign/sign.component';

import handleKeyDown from '../../../../../utils/handle-key-down-event/handle-key-down-event';

import IProblem from '../../../../../TS/interfaces/IProblem';

interface IProps {
	content: IProblem[],
	stateIndex: number,
};

const EquationProblem: React.FC<IProps> = (props) => {

	const stateProblems = useAppSelector(problems);

	const dispatch = useAppDispatch();

	const processKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		handleKeyDown(e);
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setInputValue({ index: props.stateIndex, value: e.currentTarget.value }));
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
		<div className="problem">
			{props.content.map((operand: { type: string, value: string }, i) => {
				let Element: any = null;
				switch (operand.type) {
					case 'operand':
						Element = <Number number={operand.value} className="problem__digit" key={`problem__digit-${i}`} />;
						break;
					case 'sign':
						Element = <Sign sign={operand.value} className="problem__sign" key={`problem__sign-${i}`} />;
						break;
					case 'input':
						Element = <input
							key={`problem__input-${i}`}
							type="number"
							pattern="[0-9]*"
							inputMode="numeric"
							className="problem__input"
							step="1"
							title=""
							placeholder=" "
							min={operand.value}
							max={operand.value}
							value={stateProblems[props.stateIndex][6].value}
							onKeyDown={processKeyDown}
							onChange={handleChange}
							ref={inputRefCallback}
							autoComplete="off" //for dropping the value when cached by browser
						/>
						break;

					default:
						break;
				}
				return Element;
			})}
		</div>
	)
}

export default EquationProblem;
