import React from 'react';

import useClickOutside from '../../../utils/use-click-outside/useClickOutside';

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

	const menuRef = React.useRef();

	// useClickOutside(menuRef, setOpen(false));

	// const setOpen = () => {
	// 	setOpen(!open);
	// };

	// const hideSliderMenu = () => {
	// 	setFullState({
	// 		...fullState,
	// 		open: false
	// 	});
	// };

	return (
		<div className="navigation" ref={menuRef}>
			<BurgerIcon open={open} setOpen={() => setOpen(!open)} />
			<SlideBar open={open} links={siteMenu} hideSliderMenu={() => setOpen(false)} />
		</div>
	);
};

export default NavigationBar;
