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
					title={`Math Theory`}
					id={`math`}
					collapsibleClassName={`collapsible`}
					titleClassName={`collapsible__title collapsible__title--level-two`}
					iconBoxClassName={`collapsible__icon-box`}
					iconClassName={`collapsible__icon`}
					content={
						<Math
							className="description"
							paragraphClassName="description__paragraph description__paragraph--level-two"
						/>
					}
					borderBottom={false}
				/>
				<Collapsible
					title={`How it works`}
					id={`how-it-works`}
					collapsibleClassName={`collapsible`}
					titleClassName={`collapsible__title collapsible__title--level-two`}
					iconBoxClassName={`collapsible__icon-box`}
					iconClassName={`collapsible__icon`}
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
				collapsibleClassName={`collapsible`}
				titleClassName={`collapsible__title collapsible__title--level-one`}
				iconBoxClassName={`collapsible__icon-box`}
				iconClassName={`collapsible__icon`}
				// titleClassName={`collapsible__title--level-one`}
				// collapsibleClassName={`collapsible--settings`}
			/>
		</header>
	);
};

export default Header;
