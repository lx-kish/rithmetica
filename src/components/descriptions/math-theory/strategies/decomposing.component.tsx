import React from 'react';

interface IProps {
	className: string;
	paragraphClassName: string;
};

const Decomposing: React.FC<IProps> = (props) => {
	return (
		<div className={props.className}>
			<p className={props.paragraphClassName}>
				Breaking apart, or decomposing, is a universal strategy for mental addition and subtraction. The key point is
				decomposing one of the addends into the tens and the ones and then add or subtract them sequentially.<br />
				For example, to solve addition problem<br />
				<span className="description__paragraph--level-one">43 + 35</span>
				<br />
				first decompose the 35 into <span className="red">30</span> + <span className="red">5</span>, then add both
				sequentially<br />
				<span className="description__paragraph--level-one">
					43 + <span className="red">30</span> = 73
				</span>
				<br />
				and then the remaining 5<br />
				<span className="description__paragraph--level-one">
					73 + <span className="red">5</span> = 78
				</span>
				<br />
				<br />
				To subtract<br />
				<span className="description__paragraph--level-one">43 - 15</span>
				<br />
				decompose the 15 into <span className="red">12</span> and <span className="red">3</span>, then subtract first 3<br />
				<span className="description__paragraph--level-one">
					43 - <span className="red">3</span> = 40
				</span>
				<br />
				and then the remaining 12<br />
				<span className="description__paragraph--level-one">
					40 - <span className="red">12</span> = 28
				</span>
				<br />
				The same example can be solved another way, using the same strategy<br />
				<span className="description__paragraph--level-one">43 - 15</span>
				<br />
				decompose the 15 into <span className="red">10</span> and <span className="red">5</span>, then subtract first 10<br />
				<span className="description__paragraph--level-one">
					43 - <span className="red">10</span> = 33
				</span>
				<br />
				and then the remaining 5<br />
				<span className="description__paragraph--level-one">
					33 - <span className="red">5</span> = 28
				</span>
			</p>
		</div>
	);
};

export default Decomposing;
