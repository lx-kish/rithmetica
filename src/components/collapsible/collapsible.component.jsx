import React from 'react';

import IconChevronDown from '../icons-svg/icon-chevron-down.component';

const Collapsible = (props) => {
	// console.log('Header multitab props ===> ', props.setSubtract);
	// console.log('Header multitab props ===> ', props.setChecked);

	const [ display, setDisplay ] = React.useState(false);

	const showCollapsible = () => {
		return display ? (
			<React.Fragment>
				{props.content}
				<hr className="header__hr" />
			</React.Fragment>
		) : null;
	};

	return (
		<div className="collapsible">
			{/* <hr className="header__hr" /> */}
			<h3 className="collapsible__title header__title--small">{props.title}</h3>
			<input
				type="checkbox"
				className="collapsible__btn"
				id={props.id}
				checked={display}
				onChange={() => setDisplay(!display)}
			/>
			<label htmlFor={props.id} className="collapsible__icon-box">
				<IconChevronDown className="collapsible__icon" />
			</label>
			<hr className="header__hr" />
			{showCollapsible()}
		</div>
	);
};

export default Collapsible;
