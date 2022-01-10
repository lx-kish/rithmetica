import React from 'react';
import { Link } from 'react-router-dom';

import ISectionsAttributes from '../../../TS/interfaces/ISectionsAttributes';
import sections from '../../../sections';

interface IProps {
	open: boolean;
	hideSliderMenu: () => void;
};

const SlideBar: React.FC<IProps> = ({ open, hideSliderMenu }) => {
	const element = (link: ISectionsAttributes, i: number) => (
		<Link
			key={i}
			to={{ pathname: link.link }}
			className={`slide-bar__item ${link.className}`}
			onClick={() => hideSliderMenu()}
		>
			{link.name}
		</Link>
	);

	const showLinks = () =>
		sections.map((link, i) => element(link, i));

	return (
		<nav className={`slide-bar${open ? ' is-active' : ''}`}>
			{showLinks()}
		</nav>
	);
};

export default SlideBar;
