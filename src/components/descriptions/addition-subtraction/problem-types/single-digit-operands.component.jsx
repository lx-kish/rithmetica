import React from 'react';

const SingleDigitOperands = (props) => {
	return (
		<div className={props.className}>
			<p className={props.paragraphClassName}>
				Single digit operands is a type of problems, where both operands are single digit numbers. This type of problems<br />
				<span className="description__paragraph--level-one">4 + 3</span>
				is better suit for training basic arithmetic skills and developing elementary math insights.<br />
				<br />
				Possible solution strategies are:<br />
				Counting on<br/>
				Make a ten<br/>
				Decomposing<br/>
			</p>
		</div>
	);
};

export default SingleDigitOperands;
