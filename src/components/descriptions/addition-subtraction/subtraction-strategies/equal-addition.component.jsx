import React from 'react';

const EqualAddition = (props) => {
	return (
		<div className="description">
			<p className={`description__paragraph description__paragraph--level-two ${props.className}`}>
				Equal Additions Strategy based on the fact, that increasing both minuend and subtrahend by the same number
				results in the same difference between them. Just add the appropriate number to both operands to round to the
				nearest tenth one of them<br />
				44 - 18<br />
				add 2 to both operands<br />
				(44 + 2) - (18 + 2) =<br/>
				46 - 20 = 26<br />
				Another example<br/>
				29 - 17<br />
				add 1 to both operands<br />
				(29 + 1) - (17 + 1) =<br/>
				30 - 18 = 12<br />
			</p>
		</div>
	);
};

export default EqualAddition;
