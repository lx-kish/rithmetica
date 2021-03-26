import React from 'react';

import IconChevronDown from '../icons-svg/icon-chevron-down.component';

// const content = {
// 	togglerAddSubtract: {
// 		toggleBox: {
// 			className: 'add-subtract-toggle__box'
// 		},
// 		label: {
// 			htmlFor: 'addition-subtraction',
// 			span: {
// 				left: {
// 					className: 'header__description',
// 					text: 'addition'
// 				},
// 				right: {
// 					className: 'header__description',
// 					text: 'subtraction'
// 				}
// 			}
// 		},
// 		input: {
// 			type: 'checkbox',
// 			className: 'add-subtract-toggle__input',
// 			id: 'addition-subtraction'
// 		}
// 	}
// };

const Collapsible = (props) => {

	// console.log('Header multitab props ===> ', props.setSubtract);
	// console.log('Header multitab props ===> ', props.setChecked);

	const [display, setDisplay] = React.useState(false);

	const showCollapsible = () => {
		// return display ? <div className="settings__settings-group">{renderSettings()}</div> : null;
		return display ? <div className="settings__settings-group">{props.content}</div> : null;
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
				// onChange={props.setChecked}
				onChange={() => setDisplay(!display)}
			/>
			<label htmlFor={props.id} className="collapsible__icon-box">
				<IconChevronDown className="collapsible__icon" />
			</label>
			{showCollapsible()}
			<hr className="header__hr" />
		</div>
	);
};

export default Collapsible;
