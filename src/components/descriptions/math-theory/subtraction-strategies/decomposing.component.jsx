import React from 'react';

const Decomposing = (props) => {
	return (
		<div className={props.className}>
			<p className={props.paragraphClassName}>
				Decomposing, or Breaking Apart, is a universal strategy for mental subtraction. The key point is decomposing
				subtrahend into parts to make it easyer to subtract them sequentially. For example, to subtract<br />
				<span className="description__paragraph--level-one">43 - 15</span><br />
				decompose the 15 into <span className="red">12</span> and <span className="red">3</span>, then subtract first 3<br />
				<span className="description__paragraph--level-one">43 - <span className="red">3</span> = 40</span><br />
				and then the remaining 12<br />
				<span className="description__paragraph--level-one">40 - <span className="red">12</span> = 28</span><br />
				The same example can be solved another way, using the same strategy<br />
				<span className="description__paragraph--level-one">43 - 15</span><br />
				decompose the 15 into <span className="red">10</span> and <span className="red">5</span>, then subtract first 10<br />
				<span className="description__paragraph--level-one">43 - <span className="red">10</span> = 33</span><br />
				and then the remaining 5<br />
				<span className="description__paragraph--level-one">33 - <span className="red">5</span> = 28</span>
			</p>
		</div>
	);
};

export default Decomposing;
