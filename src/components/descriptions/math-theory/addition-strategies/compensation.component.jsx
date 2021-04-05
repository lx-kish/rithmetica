import React from 'react';

const Compensation = (props) => {
	return (
		<div className={props.className}>
			<p className={props.paragraphClassName}>
				Compensation is a mental math strategy for multi-digit addition that involves adjusting one of the addends to
				make the equation easier to solve. So, to solve the equation<br />
				<span className="description__paragraph--level-one">36 + 59</span><br />
				First, since 59 is so close to <span className="red">60</span>, add<br />
				<span className="description__paragraph--level-one">36 + <span className="red">60</span> = 96</span><br />
				This is easier to solve. Then, since extra <span className="red">1</span> was added to the original equation, subtract that <span className="red">1</span> from the
				final answer.<br />
				<span className="description__paragraph--level-one">96 - <span className="red">1</span> = 95</span><br />
				Another example<br />
				<span className="description__paragraph--level-one">118 + 23</span><br />
				Using compensation, add <span className="red">2</span> to 118, and then add 23 to 120. It is easier<br />
				<span className="description__paragraph--level-one">120 + 23 = 143</span><br />
				Then, as <span className="red">2</span> was added to 118, it should be subtracted from the resulted 143<br />
				<span className="description__paragraph--level-one">143 - <span className="red">2</span> = 141</span> 
			</p>
		</div>
	);
};

export default Compensation;
