import React from 'react';

const MakeATen = (props) => {
	return (
		<div className={props.className}>
			<p className={props.paragraphClassName}>
				Make a Ten is a mental math strategy based on subtracting tens and ones separately from the minuend. For
				example, to solve<br />
				<span className="description__paragraph--level-one">28 - 15</span><br />
				split 15 into <span className="red">10</span> and <span className="red">5</span> and subtract sequentially<br />
				<span className="description__paragraph--level-one">28 - <span className="red">10</span> = 18</span><br />
				<span className="description__paragraph--level-one">18 - <span className="red">5</span> = 13</span>
			</p>
		</div>
	);
};

export default MakeATen;
