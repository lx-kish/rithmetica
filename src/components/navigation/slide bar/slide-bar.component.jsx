import React from 'react';
import { Link } from 'react-router-dom';

const SlideBar = ({ open, links, hideSliderMenu }) => {
	const element = (link, i) => (
		<Link key={i} to={link.link} className={`slide-bar__item ${link.className}`} onClick={() => hideSliderMenu()}>
			{link.name}
		</Link>
	);

	const showLinks = (links) =>
		links.map((link, i) => {
			return element(link, i);
		});

	return <nav className={`slide-bar${open ? ' is-active' : ''}`}>{showLinks(links)}</nav>;
};

export default SlideBar;
