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
				{props.borderBottom ? <hr className="header__hr" /> : null}
			</React.Fragment>
		) : null;
	};

	return (
		<div className={`collapsible ${props?.collapsibleClassName}`}>
			{/* <hr className="header__hr" /> */}
			<h3 className={`collapsible__title ${props?.titleClassName}`}>{props.title}</h3>
			<input
				type="checkbox"
				className="collapsible__btn"
				id={props.id}
				checked={display}
				onChange={() => setDisplay(!display)}
			/>
			<label htmlFor={props.id} className={`collapsible__icon-box ${props?.iconBoxClassName}`}>
				<IconChevronDown className={`collapsible__icon ${props?.iconClassName}`} />
			</label>
			<hr className="header__hr" />
			{showCollapsible()}
		</div>
	);
};

export default Collapsible;
