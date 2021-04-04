import React from 'react';

const Compensation = (props) => {
	return (
		<div className="description">
			<p className={`description__paragraph description__paragraph--level-two ${props.className}`}>
				Compensation is a mental math strategy for multi-digit addition that involves adjusting one of the addends to
				make the equation easier to solve. So, to solve the equation<br />
				36 + 59<br />
				First, since 59 is so close to 60, add<br />
				36 + 60 = 96<br />
				This is easier to solve. Then, since extra one was added to the original equation, subtract that one from the
				final answer.<br />
				96 - 1 = 95<br />
				Another example<br />
				115 + 23<br />
				Using compensation, subtract 3 from 23, and add to 115. It is easyer<br />
				115 + 20 = 135<br />
				Then, as 3 was subtracted from 23, it should be added to the resulted 135<br />
				135 + 3 = 138
			</p>
		</div>
	);
};

export default Compensation;
