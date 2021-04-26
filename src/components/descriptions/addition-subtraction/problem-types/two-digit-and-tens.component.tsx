import React from 'react';

interface IProps {
	className: string;
	paragraphClassName: string;
};

const TwoDigitAndTens: React.FC<IProps> = (props) => {
	return (
		<div className={props.className}>
			<p className={props.paragraphClassName}>
				A two-digit and a tens is a type of problems, where tens number is added to or subtracted from a two-digit
				number. This type of problems is designed to develop the skill of increasing any number buy any tens, which is
				leading-up to the base mental strategies, like decomposing.<br />
				<span className="description__paragraph--level-one">77 + 60</span>
			</p>
		</div>
	);
};

export default TwoDigitAndTens;
