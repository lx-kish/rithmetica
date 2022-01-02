import React from 'react';

import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {
	setInputValue,
	// clearAllProblemsAndSettings,
	problems,
} from '../../../redux/addition-subtraction/additionSubtractionSlice';

import Number from '../../number/number.component';
import Sign from '../../sign/sign.component';

import handleKeyDown from '../../../utils/handle-key-down-event/handle-key-down-event';

import IProblem from '../../../TS/interfaces/IProblem';

interface IProps {
	stateIndex: number,
	content: IProblem[],
};

const Problem: React.FC<IProps> = (props) => {

	const stateProblems = useAppSelector(problems);

	const dispatch = useAppDispatch();
	
	const processKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		handleKeyDown(e);
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setInputValue({ index: props.stateIndex, value: e.currentTarget.value }));

		// const totalAnswers = stateProblems.filter((problem) => problem[problem.findIndex(val => val.type === "input")].value !== problem[problem.findIndex(val => val.type === "result")].value);

		// if (totalAnswers.length) dispatch(setInputValue({ index: props.stateIndex, value: e.currentTarget.value }));
		// if (!totalAnswers.length) dispatch(clearAllProblemsAndSettings());
	}

	const renderProblem = props.content.map((operand: { type: string, value: string }, i) => {
		let renderedElement: any = null;

		switch (operand.type) {
			case 'operand':
				renderedElement = <Number number={operand.value} className="problem__digit" key={`problem__digit-${i}`} />;
				break;
			case 'sign':
				renderedElement = <Sign sign={operand.value} className="problem__sign" key={`problem__sign-${i}`} />;
				break;
			case 'input':

				renderedElement = (
					<input
						key={`problem__input-${i}`}
						// key={props.content.map((op) => op.value).reduce((res: string, v: string,) => res + v)}
						type="number"
						pattern="[0-9]*"
						inputMode="numeric"
						className="problem__input"
						step="1"
						title=""
						placeholder=" "
						min={operand.value}
						max={operand.value}
						value={stateProblems[props.stateIndex][5].value}
						// defaultValue={''}
						onKeyDown={processKeyDown}
						onChange={handleChange}
						autoComplete="off" //for dropping the value when cached by browser
					/>
				);
				break;

			default:
				break;
		}
		return renderedElement;
	});

	return <div className="problem">{renderProblem}</div>;
};

export default Problem;
