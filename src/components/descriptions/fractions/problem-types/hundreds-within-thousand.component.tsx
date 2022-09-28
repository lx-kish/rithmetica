import React from 'react';

import ICollapsibleProps from '../../../../TS/interfaces/ICollapsibleProps';

const HundredsWithinThousand: React.FC<ICollapsibleProps> = (props) => {
	return (
		<p className={props.paragraphClassName}>
			Hundreds within thousands is a type of problems, where hundreds number is added to or subtracted from a three-digit
			number. This type of problems is designed to develop the skill of increasing or decreasing any three-digit
			number by any hundreds of the number. It helps to ease dealing with hundreds while processing addition and subtraction
			of three- or more digit numbers, and can be applied to any mental strategy.<br />
			723 + 200<br />
			458 + 300<br />
			834 - 300<br />
		</p>
	);
};

export default HundredsWithinThousand;
