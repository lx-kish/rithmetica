import React from 'react';

import BurgerIcon from '../burger icon/icon-burger.component';
import SlideBar from '../slide bar/slide-bar.component';

interface IProps { };

const NavigationBar: React.FC<IProps> = (props) => {
	/**
	 * Application navigation menu component
	 * 
	 * 
	 */

	const [open, setOpen] = React.useState(false);

	/**
	 * React hook useEffect for prevent body from scrolling on open modal 
	 */
	React.useEffect(() => {
		if (open) document.body.classList.add('body-fixed');
		if (!open) document.body.classList.remove('body-fixed');
	}, [open]);

	return (
		<div className="navigation">
			<div className={`navigation__bg${open ? ' is-active' : ''}`} onClick={() => setOpen(false)} />
			<BurgerIcon open={open} setOpen={() => setOpen(!open)} />
			<SlideBar open={open} hideSliderMenu={() => setOpen(false)} />
		</div>
	);
};

export default NavigationBar;
