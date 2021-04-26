import React from 'react';

import Number from '../../number/number.component';
import Sign from '../../sign/sign.component';

import handleKeyDown from '../../../utils/handle-key-down-event/handle-key-down-event';

interface IProps {
	content: {
		type: string;
		value: string;
	}[];
};

const Problem: React.FC<IProps> = (props) => {
	// console.log('problem from problem.component ====> ', props.content);

	const renderProblem = props.content.map((operand: { type: string, value: string }, i) => {
		let renderedElement: any = null;

		switch (operand.type) {
			case 'operand':
				renderedElement = <Number number={operand.value} className="problem__digit" key={i} />;
				break;
			case 'sign':
				renderedElement = <Sign sign={operand.value} className="problem__sign" key={i} />;
				break;
			case 'input':

				// console.log(
				// 	'%c problem component at the input field ===> ',
				// 	'color: gold; font-weight: bold;',
				// 	i,
				// 	operand.value,
				// 	Date.now()
				// );

				renderedElement = (
					<input
						key={Date.now()}
						// key={i}
						type="number"
						pattern="[0-9]*"
						inputMode="numeric"
						className="problem__input"
						step="1"
						title=""
						placeholder=" "
						min={operand.value}
						max={operand.value}
						defaultValue={''}
						onKeyDown={(event) => handleKeyDown(event)}
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
