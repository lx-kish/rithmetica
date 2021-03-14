import React from 'react';

import IconChevronDown from '../../icons-svg/icon-chevron-down.component';
import NumberInputField from '../../input-fields/number-input-field.component';

const ProblemSettings = (props) => {
	const [ display, setDisplay ] = React.useState(false);

	const renderSettings = () => {
		return (
			<div className="settings__line">
				<div className="settings__control">
					<label htmlFor="settings-operation" className="settings__label">
						Operation:
					</label>
					<select name="operation" id="settings-operation" className="settings__select">
						<option defaultValue value>
							-- select --
						</option>
						<option value="addition" className="settings__option">
							addition
						</option>
						<option value="subtraction" className="settings__option">
							subtraction
						</option>
					</select>
				</div>
				<div className="settings__control">
					<label htmlFor="settings-type" className="settings__label">
						Type:
					</label>
					<select name="type" id="settings-type" className="settings__select">
						<option defaultValue value>
							-- select --
						</option>
						<option value="zero-to-ten" className="settings__option">
							0 to 10
						</option>
						<option value="single-digit-addends" className="settings__option">
							single digit
						</option>
					</select>
				</div>
				<div className="settings__control">
					<label htmlFor="settings-quantity" className="settings__label">
						Qty:
					</label>
					<NumberInputField min="1" max="100" className="settings__input" />
				</div>
			</div>
		);
	};

	const showCollapsible = () => {
		return display ? <div className="settings__settings-group">{renderSettings()}</div> : null;
	};

	return (
		<React.Fragment>
			<div className="collapsible">
				<h3 className="collapsible__title header__title--small">Settings</h3>
				<input
					type="checkbox"
					className="collapsible__btn"
					id="collapsible-toggle"
					checked={display}
					onChange={() => setDisplay(!display)}
				/>
				<label htmlFor="collapsible-toggle" className="collapsible__icon-box">
					<IconChevronDown className="collapsible__icon" />
				</label>
				<hr className="header__hr" />
				{showCollapsible()}
				{/* <div className="settings__btn-group">
					<h3 className="collapsible__title header__title--small">Generate</h3>
				</div> */}
				<input type="button" className="btn" value="Generate" />

				<hr className="header__hr" />
			</div>
		</React.Fragment>
	);
};

export default ProblemSettings;
