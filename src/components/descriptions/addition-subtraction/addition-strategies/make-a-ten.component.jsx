import React from 'react';

const MakeATen = (props) => {
	return (
		<div className="description">
			<p className={`description__paragraph description__paragraph--level-two ${props.className}`}>
				Make a Ten is a mental math strategy based on developing tens from the given operands by adding and subtracting
				appropriate numbers. For example, to solve<br />
				8 + 5<br />
        take 2 from the 5 and give it to the 8<br/>
        5 - 2 = 3<br/>
        8 + 2 = 10<br/>
        and then add the results<br/>
        10 + 3 = 13<br/>
        The opposite also possible: take 5 from the 8 and give it to the 5<br/>
        8 - 5 = 3<br/>
        5 + 5 = 10<br/>
        10 + 3 = 13<br/>
			</p>
		</div>
	);
};

export default MakeATen;
