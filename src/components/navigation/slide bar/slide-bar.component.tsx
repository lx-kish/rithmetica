import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
	open: boolean;
	links: { link: string; className: string; name: string; }[];
	hideSliderMenu: () => void;
};

const SlideBar: React.FC<IProps> = ({ open, links, hideSliderMenu }) => {
	const element = (link: { link: string; className: string; name: string; }, i: number) => (
		<Link key={i} to={link.link} className={`slide-bar__item ${link.className}`} onClick={() => hideSliderMenu()}>
			{link.name}
		</Link>
	);

	const showLinks = (links: IProps["links"]) =>
		links.map((link, i) => {
			return element(link, i);
		});

	return <nav className={`slide-bar${open ? ' is-active' : ''}`}>{showLinks(links)}</nav>;
};

export default SlideBar;
