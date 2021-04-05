import React from 'react';

const MakeATen = (props) => {
	return (
		<div className={props?.className}>
			<p className={props?.paragraphClassName}>
				Make a Ten is a mental math strategy based on developing tens from the given operands by adding and subtracting
				appropriate numbers. For example, to solve<br />
				<span className="description__paragraph--level-one">8 + 5</span><br />
        take <span className="red">2</span> from the 5 and give it to the 8<br/>
        <span className="description__paragraph--level-one">5 - <span className="red">2</span> = 3</span><br/>
        <span className="description__paragraph--level-one">8 + <span className="red">2</span> = 10</span><br/>
        and then add the results<br/>
        <span className="description__paragraph--level-one">10 + 3 = 13</span><br/>
        The opposite also possible: take <span className="red">5</span> from the 8 and give it to the 5<br/>
        <span className="description__paragraph--level-one">8 - <span className="red">5</span> = 3</span><br/>
        <span className="description__paragraph--level-one">5 + <span className="red">5</span> = 10</span><br/>
        <span className="description__paragraph--level-one">10 + 3 = 13</span>
			</p>
		</div>
	);
};

export default MakeATen;
