import React from 'react';

const MakeATen = (props) => {
	return (
		<div className="description">
			<p className={`description__paragraph description__paragraph--level-two ${props.className}`}>
				Make a Ten is a mental math strategy based on subtracting tens and ones separately from the minuend. For
				example, to solve<br />
				28 - 15<br />
				split 15 into 10 and 5 and subtract sequentially<br />
				28 - 10 = 18<br />
				18 - 5 = 13
			</p>
		</div>
	);
};

export default MakeATen;
