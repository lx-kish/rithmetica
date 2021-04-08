import React from 'react';

import Collapsible from '../../collapsible/collapsible.component';
import HowMultitabWorks from '../../descriptions/multiplication-table/how-multitab-works.component';

import Toggler from '../../toggler/toggler.component';

const content = {
	togglerAddSubtract: {
		toggleBox: {
			className: 'add-subtract-toggle__box'
		},
		label: {
			htmlFor: 'addition-subtraction',
			span: {
				left: {
					className: 'toggler description__paragraph--level-three',
					text: 'addition'
				},
				right: {
					className: 'toggler description__paragraph--level-two',
					text: 'subtraction'
				}
			}
		},
		input: {
			type: 'checkbox',
			className: 'add-subtract-toggle__input',
			id: 'addition-subtraction'
		}
	}
};

const Header = (props) => {
	const collapsibleContent = () => {
		return <HowMultitabWorks />;
	};

	return (
		<header className="header">
			<h1 className="header__title">Multiplication table</h1>
			<h3 className="header__title--small">learn multiplication using addition and subtraction</h3>
			<hr className="header__hr" />
			<Collapsible
				title={`How it works`}
				id={`multitable-usage`}
				content={collapsibleContent()}
				collapsibleClassName={`collapsible`}
				titleClassName={`collapsible__title collapsible__title--level-one`}
				iconBoxClassName={`collapsible__icon-box collapsible__icon-box--level-one`}
				iconClassName={`collapsible__icon--level-one`}
				borderBottom={true}
				// collapsibleClassName={`collapsible--settings`}
			/>
			<Toggler
				{...content.togglerAddSubtract}
				checked={props.subtract}
				// onChange={props.setSubtract}
				onChange={() => props.setSubtract()}
			/>
			<hr className="header__hr" />
		</header>
	);
};

export default Header;
