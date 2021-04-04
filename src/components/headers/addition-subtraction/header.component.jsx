import React from 'react';

import Collapsible from '../../collapsible/collapsible.component';
import Math from '../../descriptions/addition-subtraction/math.component';
import HowAdditionSubtractionWorks from '../../descriptions/addition-subtraction/how-addition-subtraction-works.component';

const Header = (props) => {
	const collapsibleContent = () => {
		return (
			<React.Fragment>
				<div className="description">
					<p className="description__paragraph description__paragraph--level-one">
						The application is dedicated to developing mental addition and subtraction skills, which achieves via
						solving problems with different levels of complexity.<br />
						{/* The information about Math and Technical aspects of the application contains in appropriate sections.<br /> */}
					</p>
				</div>
				<hr className="header__hr" />
				<Collapsible
					title={`Math Basics`}
					id={`math`}
					collapsibleClassName={``}
					titleClassName={`collapsible__title--level-two`}
					iconBoxClassName={``}
					iconClassName={``}
					content={<Math />}
					borderBottom={true}
				/>
				<Collapsible
					title={`How it works`}
					id={`how-it-works`}
					collapsibleClassName={``}
					titleClassName={`collapsible__title--level-two`}
					iconBoxClassName={``}
					iconClassName={``}
					content={<HowAdditionSubtractionWorks />}
					borderBottom={true}
				/>
			</React.Fragment>
		);
	};

	return (
		<header className="header">
			<h1 className="header__title">Addition and Subtraction</h1>
			<h3 className="header__title--small">boost your skills of addition and subtraction</h3>
			<hr className="header__hr" />
			<Collapsible
				title={`About`}
				id={`about`}
				content={collapsibleContent()}
                titleClassName={`collapsible__title--level-one`}
				// collapsibleClassName={`collapsible--settings`}
			/>
		</header>
	);
};

export default Header;
