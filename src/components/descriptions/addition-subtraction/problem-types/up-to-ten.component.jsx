import React from 'react';

const UpToTen = (props) => {
	return (
		<div className={props.className}>
			<p className={props.paragraphClassName}>
				Up to ten is a most primitive type of problems, where all the count is happening within ten, and both operands
				are single digit numbers. This type of problems<br />
				<span className="description__paragraph--level-one">4 + 3</span><br/>
				can be solved with own fingers using Counting On strategy.
			</p>
		</div>
	);
};

export default UpToTen;
