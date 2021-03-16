import React from 'react';

import IconChevronDown from '../../icons-svg/icon-chevron-down.component';
import NumberInputField from '../../input-fields/number-input-field.component';

import operations from '../operations';
import types from '../types';
import formats from '../missing';

const ProblemSettings = (props) => {

	const [ fullState, setFullState ] = React.useState({
		problemSettings: [
			{
				operation: '',
				type: '',
				missing: '',
				quantity: 0
			}
		],
		display: false
	});

	const insertSettings = (i) => (e) => {
		const newProblemSettings = [
			...fullState.problemSettings.slice(0, i+1),
			{
				operation: '',
				type: '',
				missing: '',
				quantity: 0
			},
			...fullState.problemSettings.slice(i+1)
		];

		console.log(
			'%c fullState.problemSettings after addSetting of settings ===> ',
			'color: orangered; font-weight: bold;',
			i,
			e.target.tagName,
			fullState.problemSettings
		);

		setFullState({
			...fullState,
			problemSettings: newProblemSettings
		});
	};

	const deleteSettings = (i) => (e) => {
		const newProblemSettings = [ ...fullState.problemSettings.slice(0, i), ...fullState.problemSettings.slice(i + 1) ];

		if (!newProblemSettings.length)
			newProblemSettings.push({
				operation: '',
				type: '',
				missing: '',
				quantity: 0
			});

		setFullState({
			...fullState,
			problemSettings: newProblemSettings
		});
	};

	const setStateOnChange = (i) => (e) => {
		const newProblemSettings = [ ...fullState.problemSettings ];
		const value = e.target.value === 'true' ? '' : e.target.value;
		// const value = e.target.tagName === 'SELECT' ? (e.target.value === 'true' ? '' : e.target.value) : e.target.value;
		newProblemSettings[i][e.target.name] = value;
		setFullState({
			...fullState,
			problemSettings: newProblemSettings
		});

		// console.log(
		// 	'%c operation from select tag of settings ===> ',
		// 	'color: orangered; font-weight: bold;',
		// 	i,
		// 	e.target.tagName,
		// 	fullState.problemSettings
		// );
	};

	const generate = () => {
		props.sendData(fullState.problemSettings);
	};

	const renderSettings = () => {
		return (
			<React.Fragment>
				{fullState.problemSettings.map((setting, index) => (
					<div className="settings__line" key={index}>
						<div className="settings__control">
							<label htmlFor="settings-operation" className="settings__label">
								Operation:
							</label>
							<select
								name="operation"
								id="settings-operation"
								className="settings__select"
								value={setting.operation}
								onChange={setStateOnChange(index)}
							>
								<option defaultValue value>
									-- select --
								</option>
								{operations.map((operation, i) => {
									// console.log('%c operation from operations.map of settings ===> ', 'color: orangered; font-weight: bold;', operation === setting.operation, i);
									return (
										<option
											key={operation}
											value={operation}
											className="settings__option"
											// {...(operation === setting.operation ? '' : 'default')}
										>
											{operation}
										</option>
									);
								})}
							</select>
						</div>
						<div className="settings__control">
							<label htmlFor="settings-type" className="settings__label">
								Type:
							</label>
							<select
								name="type"
								id="settings-type"
								className="settings__select"
								value={setting.type}
								onChange={setStateOnChange(index)}
							>
								<option defaultValue value>
									-- select --
								</option>
								{types.map((type, i) => (
									<option
										key={i}
										value={type}
										className="settings__option"
										// {...(type === setting.type ? '' : 'defaultValue')}
									>
										{type}
									</option>
								))}
							</select>
						</div>
						<div className="settings__control">
							<label htmlFor="settings-missing" className="settings__label">
								Missing:
							</label>
							<select
								name="missing"
								id="settings-missing"
								className="settings__select"
								value={setting.missing}
								onChange={setStateOnChange(index)}
							>
								<option defaultValue value>
									-- select --
								</option>
								{formats.map((missing, i) => (
									<option
										key={i}
										value={missing}
										className="settings__option"
										// {...(missing === setting.missing ? '' : 'defaultValue')}
									>
										{missing}
									</option>
								))}
							</select>
						</div>
						<div className="settings__control">
							<label htmlFor="settings-quantity" className="settings__label">
								Qty:
							</label>
							<NumberInputField
								name="quantity"
								min="1"
								max="100"
								className="settings__input"
								value={setting.quantity}
								onChange={setStateOnChange(index)}
							/>
						</div>
						<input type="button" value="+" className="btn settings__control-btn" onClick={insertSettings(index)} />
						<input
							type="button"
							value="&times;"
							className="btn settings__control-btn"
							onClick={deleteSettings(index)}
						/>
					</div>
				))}
			</React.Fragment>
		);
	};

	const showCollapsible = () => {
		// return display ? <div className="settings__settings-group">{renderSettings()}</div> : null;
		return fullState.display ? <div className="settings__settings-group">{renderSettings()}</div> : null;
	};

	return (
		<React.Fragment>
			<div className="collapsible">
				<h3 className="collapsible__title header__title--small">Settings</h3>
				<input
					type="checkbox"
					className="collapsible__btn"
					id="collapsible-toggle"
					// checked={display}
					checked={fullState.display}
					// onChange={() =>
					// 	setDisplay(!display	)}
					onChange={() =>
						setFullState({
							...fullState,
							display: !fullState.display
						})}
				/>
				<label htmlFor="collapsible-toggle" className="collapsible__icon-box">
					<IconChevronDown className="collapsible__icon" />
				</label>
				<hr className="header__hr" />
				{showCollapsible()}
				<input type="button" className="btn settings__go-btn" value="Generate" onClick={generate}/>

				<hr className="header__hr" />
			</div>
		</React.Fragment>
	);
};

export default ProblemSettings;
