import React from 'react';

interface IProps {
	className: string;
	paragraphClassName: string;
};

const TwoDigitTidingUp: React.FC<IProps> = (props) => {
	return (
		<div className={props.className}>
			<p className={props.paragraphClassName}>
				Two-digits tidying up is the variation of two-digits operands type of problems, where the ones of the one or
				both operands are close to ten and can be rounded up.<br />
				68 + 54<br />
				32 + 79<br />
				56 - 38<br />
				Despite it can be solved using any mental strategies, this type of problems dedicated to train rounding up
				strategies, such as Make a Ten, Equal addition, or Compensation.
			</p>
		</div>
	);
};

export default TwoDigitTidingUp;
