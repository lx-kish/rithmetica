import React from 'react';

import Number from '../../number/number.component';
import Sign from '../../sign/sign.component';
import NumberInputField from '../../input-fields/number-input-field.component';
// import content from '../../../table.content';

// const areEqual = (prevProps, nextProps) => true;

// const Problem = React.memo((props) => {
const Problem = (props) => {

	// const renderNumber = (number) => {
	// 	return (
	// 		<span className="problem__digit">
	// 			{[ ...number ].map((digit, index) => (
	// 				<span className={`${content.styles[digit]}`} key={index}>
	// 					{digit}
	// 				</span>
	// 			))}
	// 		</span>
	// 	);
	// };

	// const renderSign = (sign) => {
	// 	return <span className="problem__sign">{sign}</span>;
	// };

	// const renderInput = (number) => {
	// 	return (
	// 		<input
	// 			type="number"
	// 			pattern="[0-9]*"
	// 			inputMode="numeric"
	// 			className="problem__input"
	// 			placeholder=" "
	// 			min={parseInt(number)}
	// 			max={parseInt(number)}
	// 			step="1"
	// 			// onKeyDown={(event) => handleKeyDown(event)}
	// 		/>
	// 	);
	// };

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

	// const renderNumber = (number) => {

	// 	// console.log([ ...number ].forEach((c) => console.log(c)));
	// 	// const style = number.charAt(0);
	// 	return [ ...number ].map((digit, index) => (
	// 		// <span className={`problem_x digit ${content.styles[style]}`} key={index}>
	// 		<span className={`problem_x problem__digit ${content.styles[digit]}`} key={index}>
	// 			{digit}
	// 		</span>
	// 	));
	// };

	return (
		// <>
		<div className="problem">
			{renderProblem}
			{/* {renderNumber(props.x)}
			{renderSign(props.sign)}
			{renderNumber(props.y)}
			{renderSign('=')}
			{renderInput(getSum(props.x, props.y))} */}
		</div>
		// </>
	);
// }, areEqual);
};

export default Problem;
