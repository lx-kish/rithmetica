import React from 'react';

interface IProps {
	className: string;
	paragraphClassName: string;
};

const TensWithinThousand: React.FC<IProps> = (props) => {
	return (
		<div className={props.className}>
			<p className={props.paragraphClassName}>
				Tens within thousands is a type of problems, where tens number is added to or subtracted from a three-digit
				number. This type of problems is designed to develop the skill of increasing or decreasing any three-digit
				number by any tens, sometimes resulting in increasing or decreasing hundreds of the number. It helps to realise
				the relationship between tens and hundreds, and is leading-up to the base mental strategies, like decomposing.<br />
				683 + 50<br />
				327 + 70<br />
				569 - 80<br />
			</p>
		</div>
	);
};

export default TensWithinThousand;
