import React from 'react';

import BurgerIcon from '../burger icon/icon-burger.component';
import SlideBar from '../slide bar/slide-bar.component';

import siteMenu from '../siteMenu';

const NavigationBar = (props) => {
	/**
   * Application navigation menu component
   * 
   * 
   */

	const [ open, setOpen ] = React.useState(false);

	return (
		<div className="navigation">
			<div className={`navigation__bg${open ? ' is-active' : ''}`} onClick={() => setOpen(false)}></div>
			<BurgerIcon open={open} setOpen={() => setOpen(!open)} />
			<SlideBar open={open} links={siteMenu} hideSliderMenu={() => setOpen(false)} />
		</div>
	);
};

export default NavigationBar;
