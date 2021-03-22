import React from 'react';

import Number from '../../number/number.component';
import Sign from '../../sign/sign.component';
import NumberInputField from '../../input-fields/number-input-field.component';

const Problem = (props) => {

	// console.log('problem from problem.component ====> ', props.content);

	const renderProblem = props.content.map((operand, i) => {
		let renderedElement = null;

		switch (operand.type) {
			case 'operand':
				renderedElement = <Number number={operand.value} className="problem__digit" key={i}/>;
				break;
			case 'sign':
				renderedElement = <Sign sign={operand.value} className="problem__sign" key={i}/>;
				break;
			case 'input':
				renderedElement = <NumberInputField min={operand.value} max={operand.value} className="problem__input" key={i}/>;
				break;

			default:
				break;
		}
		return renderedElement;
	});

	return (
		<div className="problem">
			{renderProblem}
		</div>
	);
};

export default Problem;
