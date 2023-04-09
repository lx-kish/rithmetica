import React from 'react';

import ICollapsibleProps from '../../../../TS/interfaces/ICollapsibleProps';

const UpToTen: React.FC<ICollapsibleProps> = (props) => {
	return (
		<p className={props.paragraphClassName}>
			Up to ten is a most primitive type of problems, where all the count is happening within ten, and both operands
			are single digit numbers. This type of problems<br />
			<span className="description__paragraph--level-one">4 + 3</span><br />
			can be solved with own fingers using Counting On strategy.
		</p>
	);
};

export default UpToTen;