import React from 'react';

import sections from '../../../../sections';
import Collapsible from '../../../collapsible/collapsible.component';
import Settings from '../../../settings/arythmetic/settings.component';
import Math from '../../../descriptions/addition-subtraction/math.component';
import HowAdditionSubtractionWorks from '../../../descriptions/addition-subtraction/how-addition-subtraction-works.component';

interface IProps { };

const Header: React.FC<IProps> = (props) => {

	const sectionSettings = sections.find(el => el.link === "/arithmetic");

	const collapsibleContent = () => {
		return (
			<React.Fragment>
				<p className="description__paragraph description__paragraph--level-one">
					The application is dedicated to developing mental addition, subtraction, multiplication and division
					skills, which achieves via solving problems with different levels of complexity.<br />
				</p>
				<Collapsible
					title="Math Theory"
					id="math"
					collapsibleClassName="collapsible"
					titleClassName="collapsible__title collapsible__title--level-two"
					iconBoxClassName="collapsible__icon-box collapsible__icon-box--level-two"
					iconClassName="collapsible__icon--level-two"
					content={
						<Math
							paragraphClassName="description__paragraph description__paragraph--level-two"
						/>
					}
					borderBottom={false}
				/>
				<Collapsible
					title="How it works"
					id="how-it-works"
					collapsibleClassName="collapsible"
					titleClassName="collapsible__title collapsible__title--level-two"
					iconBoxClassName="collapsible__icon-box collapsible__icon-box--level-two"
					iconClassName="collapsible__icon--level-two"
					content={
						<HowAdditionSubtractionWorks
							paragraphClassName="description__paragraph description__paragraph--level-two"
						/>
					}
					borderBottom={false}
				/>
			</React.Fragment>
		);
	};

	return (
		<header className="header">
			<h1 className="header__title">{sectionSettings?.name}</h1>
			<h3 className="header__title--small">{sectionSettings?.motto}</h3>
			<Collapsible
				title="About"
				id="about"
				collapsibleClassName="collapsible"
				titleClassName="collapsible__title collapsible__title--level-one"
				iconBoxClassName="collapsible__icon-box collapsible__icon-box--level-one"
				iconClassName="collapsible__icon--level-one"
				content={collapsibleContent()}
				borderBottom={false}
			/>
			<Settings />
		</header>
	);
};

export default Header;
