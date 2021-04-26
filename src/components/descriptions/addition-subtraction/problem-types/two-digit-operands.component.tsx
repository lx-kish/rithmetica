import React from 'react';

interface IProps {
	className: string;
	paragraphClassName: string;
};

const TwoDigitOperands: React.FC<IProps> = (props) => {
	return (
		<div className={props.className}>
			<p className={props.paragraphClassName}>
				Two-digits operands is the most common type of problems where any two-digits number combined with another
				two-digit number without any limits.<br />
				94 + 57<br />
				75 - 38<br />
				Because of it's universality, all mental strategies can be used to solve problems of this type.
			</p>
		</div>
	);
};

export default TwoDigitOperands;
