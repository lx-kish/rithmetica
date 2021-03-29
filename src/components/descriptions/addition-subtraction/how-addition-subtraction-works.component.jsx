import React from 'react';

import schemaBigScreen from './shcema-big-screen-arrows.png';
import schemaSmallScreen from './shcema-small-screen-arrows.png';

const HowAdditionSubtractionWorks = (props) => {
	return (
		<div className="description">
			<p className="description__paragraph description__paragraph--level-two">
				The application consists of the Settings part and the Problems part.<br />
				Problems part contains randomly generated problems, having specific problems characteristics, which can be
				preassigned in settings part before generating. The right answer colors <b>white</b>. The wrong answer colors{' '}
				<span className="three">
					<b>red</b>
				</span>.<br />
				<br />
				Each problem contains two numeric operands, addition or subtraction sign, equality sign and a numeric result.<br
				/>
			</p>
			<picture>
				<source srcSet={`${schemaSmallScreen} 1.8x`} media="(max-width: 380px)" />
				<source srcSet={`${schemaSmallScreen} 1.5x`} media="(max-width: 480px)" />
				<source srcSet={`${schemaSmallScreen} 1.2x`} media="(max-width: 580px)" />
				<source srcSet={`${schemaSmallScreen} 1x`} media="(max-width: 680px)" />
				<source srcSet={`${schemaBigScreen} 1.5x`} media="(max-width: 940px)" />
				<img className="description__image" srcSet={`${schemaBigScreen} 1x`} alt="Full Logo" />
			</picture>
			<p className="description__paragraph description__paragraph--level-two">
				The Settings part contains one or multiple settings sections, which assign the specific details for the
				problems. Each setting section provides options to set operation (addition or subtraction), missing operand
				(first operand, second one, result or random - alltogether in arbitrary sequence), quantity of problems needed
				to be generated, and type of problems.<br />
				<br />
				All the possible problem types are described below:<br />
				<br />
			</p>
		</div>
	);
};

export default HowAdditionSubtractionWorks;
