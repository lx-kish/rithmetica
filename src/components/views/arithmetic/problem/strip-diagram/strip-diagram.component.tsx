import React from 'react';

import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks';
import {
	setInputValue,
	problems,
} from '../../../../../redux/arithmetic/arithmeticSlice';

import handleKeyDown from '../../../../../utils/handle-key-down-event/handle-key-down-event';

import IProblem from '../../../../../TS/interfaces/IProblem';

interface IProps {
	// operand: { type: string, value: string },
	content: IProblem[],
	stateProblemIndex: number,
	// index: number,
};

const EquationProblem: React.FC<IProps> = (props) => {

	const stateProblems = useAppSelector(problems);

	const dispatch = useAppDispatch();

	const processKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		handleKeyDown(e);
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setInputValue({ index: props.stateProblemIndex, value: e.currentTarget.value }));
	}

	// const findOperandIndex = (value: string) => {
	// 	props.content.findIndex()
	// }

	console.log(props.content);
	console.log([...Array(+props.content[1].value)]);

	return (
		<div className="strip-diagram">
			<div className="strip-diagram__product">
				{props.content[0].type === "input" ?
					<input
						type="number"
						pattern="[0-9]*"
						inputMode="numeric"
						className="strip-diagram__input"
						step="1"
						title=""
						placeholder=" "
						min={props.content[0].value}
						max={props.content[0].value}
						value={stateProblems[props.stateProblemIndex][0].value}
						onKeyDown={processKeyDown}
						onChange={handleChange}
						autoComplete="off" //for dropping the value when cached by browser
					/> :
					props.content[0].value}
			</div>
			<div className="strip-diagram__factor-row">
				{[...Array(+props.content[1].value)].map((x, i) => {
					return (
						<div key={i} className="strip-diagram__factor">
							{props.content[2].type === "input" ?
								<input
									key={i}
									type="number"
									pattern="[0-9]*"
									inputMode="numeric"
									className="strip-diagram__input"
									step="1"
									title=""
									placeholder=" "
									min={props.content[2].value}
									max={props.content[2].value}
									value={stateProblems[props.stateProblemIndex][2].value}
									onKeyDown={processKeyDown}
									onChange={handleChange}
									autoComplete="off" //for dropping the value when cached by browser
								/> :
								(props.content[2].value)
							}
						</div>
					)
				})}
			</div>
			{/* {props.content.map((operand: { type: string, value: string }, i) => {
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
							autoComplete="off" //for dropping the value when cached by browser
						/>
						break;

					default:
						break;
				}
				return Element;
			})} */}
		</div>
	)
}

export default EquationProblem;
