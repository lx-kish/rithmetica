import React from 'react';

import { useAppSelector, useAppDispatch } from '../../../../redux/hooks';
import {
	clearAllInputs,
	switchSubtract,
	subtract,
} from '../../../../redux/multiplicationTable/multiplicationTabSlice';

import sections from '../../../../sections';
import Collapsible from '../../../collapsible/collapsible.component';
import HowMultitabWorks from '../../../descriptions/multiplication-table/how-multitab-works.component';

import Toggler from '../../toggler/toggler.component';

interface IProps {
	getDisplay: (display: boolean) => boolean;
	setChecked: () => void;
};

const content = {
	togglerAddSubtract: {
		toggleBox: {
			className: "toggler__box"
		},
		label: {
			htmlFor: "addition-subtraction",
			span: {
				left: {
					className: "toggler description__paragraph--level-three",
					text: "addition"
				},
				right: {
					className: "toggler description__paragraph--level-two",
					text: "subtraction"
				}
			}
		},
		input: {
			type: "checkbox",
			className: "toggler__input",
			id: "addition-subtraction"
		}
	}
};

const Header: React.FC<IProps> = (props) => {

	const subtractState = useAppSelector(subtract);

	const dispatch = useAppDispatch();

	const sectionSettings = sections.find(el => el.link === "/multiplication-tab");

	const handleChange = () => {
		dispatch(clearAllInputs());
		dispatch(switchSubtract());
	};

	return (
		<header className="header header--multiplication-tab">
			<h1 className="header__title">{sectionSettings?.name}</h1>
			<h3 className="header__title--small">{sectionSettings?.motto}</h3>
			<Collapsible
				title="How it works"
				id="multitable-usage"
				collapsibleClassName="collapsible collapsible__border-bottom"
				titleClassName="collapsible__title collapsible__title--level-one"
				iconBoxClassName="collapsible__icon-box collapsible__icon-box--level-one"
				iconClassName="collapsible__icon--level-one"
				getDisplay={props.getDisplay} // I know that it's a bad music... Just d'know how to do better, and don't want to launch Redux just for this shit... :(
				content={
					<HowMultitabWorks
						paragraphClassName="description__paragraph description__paragraph--level-two"
					/>
				}
				borderBottom={false}
			/>
			<Toggler
				{...content.togglerAddSubtract}
				checked={subtractState}
				onChange={handleChange}
			/>
		</header>
	);
};

export default Header;
