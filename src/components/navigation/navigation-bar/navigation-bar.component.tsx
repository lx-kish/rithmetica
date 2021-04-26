import React from 'react';

import BurgerIcon from '../burger icon/icon-burger.component';
import SlideBar from '../slide bar/slide-bar.component';

import siteMenu from '../siteMenu';

interface IProps {};

const NavigationBar: React.FC<IProps> = (props) => {
	/**
   * Application navigation menu component
   * 
   * 
   */

	const [ open, setOpen ] = React.useState(false);

	/**
   * React hook useEffect for prevent body from scrolling on open modal 
   */
	React.useEffect(
		() => {
			// const root = document.getElementById('root');
			// if (open) root.classList.add('fixed');
			// if (!open) root.classList.remove('fixed');
			if (open) document.body.classList.add('body-fixed');
			if (!open) document.body.classList.remove('body-fixed');
		},
		[ open ]
	);

	return (
		<div className="navigation">
			<div className={`navigation__bg${open ? ' is-active' : ''}`} onClick={() => setOpen(false)} />
			<BurgerIcon open={open} setOpen={() => setOpen(!open)} />
			<SlideBar open={open} links={siteMenu} hideSliderMenu={() => setOpen(false)} />
		</div>
	);
};

export default NavigationBar;
