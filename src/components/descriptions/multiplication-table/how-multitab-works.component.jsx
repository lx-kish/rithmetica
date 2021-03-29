import React from 'react';

const HowMultitabWorks = (props) => {

	return (
		<div className="description">
			<p className="description__paragraph description__paragraph--level-one">
				{props.subtract ? (
					`- Subtract the amount of dots under the field from the number from the left.`
				) : (
					`- Add the amount of dots under the field to the number from the left.`
				)}
				<br />
				- Write an answer at the field above.<br />
				- Right answer colors <b>white</b>.<br />
				- Wrong answer colors{' '}
				<span className="three">
					<b>red</b>
				</span>.<br />
				- Move to the next field and repeate.
			</p>
		</div>
	);
};

export default HowMultitabWorks;
