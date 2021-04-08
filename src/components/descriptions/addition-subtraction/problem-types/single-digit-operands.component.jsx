import React from 'react';

const SingleDigitOperands = (props) => {
	return (
		<div className={props.className}>
			<p className={props.paragraphClassName}>
				Single digit operands is a type of problems, where both operands are single digit numbers. This type of problems<br />
				<span className="description__paragraph--level-one">4 + 3</span>
				is better suit for training basic arithmetic skills and developing elementary math insights. Couunting on, Make
				a Ten, and Decomposing are possible solution strategies for this type of problems.
			</p>
		</div>
	);
};

export default SingleDigitOperands;
