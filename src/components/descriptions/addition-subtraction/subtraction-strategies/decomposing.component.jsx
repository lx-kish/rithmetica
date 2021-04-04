import React from 'react';

const Decomposing = (props) => {
	return (
		<div className="description">
			<p className={`description__paragraph description__paragraph--level-two ${props.className}`}>
				Breaking apart, or decomposing, is a universal strategy for mental subtraction. The key point is decomposing
				subtrahend into parts to make it easyer to subtract them sequentially. For example, to subtract<br />
				43 - 15<br />
				decompose the 15 into 12 and 3, then subtract first 3<br />
				43 - 3 = 40<br />
				and then the remaining 32<br />
				40 - 12 = 28<br />
				The same example can be solved another way, using the same strategy<br />
				43 - 15<br />
				decompose the 15 into 10 and 5, then subtract first 10<br />
				43 - 10 = 33<br />
				and then the remaining 5<br />
				33 - 5 = 28
			</p>
		</div>
	);
};

export default Decomposing;
