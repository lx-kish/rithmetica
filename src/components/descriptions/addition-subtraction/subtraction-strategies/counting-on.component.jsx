import React from 'react';

const CountingOn = (props) => {
	return (
		<div className="description">
			<p className={`description__paragraph description__paragraph--level-two ${props.className}`}>
				Counting On is a beginning mental math strategy. Simple count down from the biggest number in an equation until
				subtracting the lowest number, opposite to the counting up in addition. For example, in the equation<br />
				5 - 3<br />
				start with the "5" in the head, and then count down: "4, 3, 2."
			</p>
		</div>
	);
};

export default CountingOn;
