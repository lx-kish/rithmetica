import React from 'react';

const Decomposing = (props) => {
	return (
		<div className="description">
			<p className={`description__paragraph description__paragraph--level-two ${props.className}`}>
				Breaking apart, or decomposing, is an advanced Make a Ten strategy for two and more digit numbers. The key point
				is decomposing one of the addends into the tens and the ones and then add them sequentially. For example, to
				solve<br />
				43 + 35<br />
				first decompose the 35 into 30 and 5, then add<br />
				43 + 30 = 73<br />
				and then the remaining 5<br />
				73 + 5 = 78
			</p>
		</div>
	);
};

export default Decomposing;
