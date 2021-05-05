import React from 'react';

import Collapsible from '../collapsible/collapsible.component';

import handleKeyDown from '../../utils/handle-key-down-event/handle-key-down-event';

import types from '../addition-subtraction/types';

import ISetting from '../../TS/interfaces/ISetting';

interface IProps {
	settings: ISetting[];
	sendData: (settings: ISetting[]) => void;
};

const ProblemSettings: React.FC<IProps> = (props) => {
	const [fullState, setFullState] = React.useState({
		problemSettings: props.settings
	});

	const insertSettings = (i: number) => (e: React.MouseEvent<HTMLInputElement>) => {
		const newProblemSettings: ISetting[] = [
			...fullState.problemSettings.slice(0, i + 1),
			{
				operation: 'addition',
				type: '',
				missing: 'result',
				numberOfOperands: 2,
				quantity: 0
			},
			...fullState.problemSettings.slice(i + 1)
		];

		setFullState({
			...fullState,
			problemSettings: newProblemSettings
		});
	};

	const deleteSettings = (i: number) => (e: React.MouseEvent<HTMLInputElement>) => {
		const newProblemSettings = [...fullState.problemSettings.slice(0, i), ...fullState.problemSettings.slice(i + 1)];

		if (!newProblemSettings.length)
			newProblemSettings.push({
				operation: '',
				type: '',
				missing: '',
				numberOfOperands: 2,
				quantity: 0
			});

		setFullState({
			...fullState,
			problemSettings: newProblemSettings
		});
	};

	const setStateOnChange = (i: number) => (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>): void => {

		const newProblemSettings = [...fullState.problemSettings];
		const value = e.target.value === 'true' ? '' : e.target.value;

		newProblemSettings[i][e.target.name] = value;
		setFullState({
			...fullState,
			problemSettings: newProblemSettings
		});

	};

	const setStateOnRadioChange = (i: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
		const newProblemSettings = [...fullState.problemSettings];
		const fieldName = e.target.name.indexOf('operation') >= 0 ? 'operation' : 'missing';
		newProblemSettings[i][fieldName] = e.target.value;
		setFullState({
			...fullState,
			problemSettings: newProblemSettings
		});
	};

	/**
	 * Passing data to the parent component. For more details see:
	 * https://stackoverflow.com/questions/40722382/how-to-pass-state-back-to-parent-in-react
	 */
	const generate = () => {
		//Validation of problemSettings
		const validProblemSettings = fullState.problemSettings.filter(
			(setting) => setting.operation && setting.type && setting.missing && setting.quantity
		);

		props.sendData(validProblemSettings);
	};

	// console.log(
	// 	'%c fullState.problemSettings after generate triggered ===> ',
	// 	'color: gold; font-weight: bold;',
	// 	[...fullState.problemSettings][0]['type']
	// );

	const collapsibleContent = () => {
		return (
			<div className="settings__settings-group">
				{fullState.problemSettings.map((setting, index) => (
					<div className="settings__setting" key={index}>
						<div className="settings__row--mobile">
							<div className="settings__control settings__control--radio">
								<input
									type="radio"
									id={`addition-${index}`}
									name={`operation-${index}`}
									value="addition"
									className="settings__input"
									onChange={setStateOnRadioChange(index)}
									checked={setting.operation === 'addition'}
								/>
								<label htmlFor={`addition-${index}`}>addition</label>
								<input
									type="radio"
									id={`subtraction-${index}`}
									name={`operation-${index}`}
									value="subtraction"
									className="settings__input"
									onChange={setStateOnRadioChange(index)}
									checked={setting.operation === 'subtraction'}
								/>
								<label htmlFor={`subtraction-${index}`}>subtraction</label>
							</div>
							<div className="settings__control settings__control--radio">
								<input
									type="radio"
									id={`first-${index}`}
									name={`missing-${index}`}
									value="first"
									className="settings__input"
									onChange={setStateOnRadioChange(index)}
									checked={setting.missing === 'first'}
								/>
								<label htmlFor={`first-${index}`}>first</label>
								<input
									type="radio"
									id={`last-${index}`}
									name={`missing-${index}`}
									value="last"
									className="settings__input"
									onChange={setStateOnRadioChange(index)}
									checked={setting.missing === 'last'}
								/>
								<label htmlFor={`last-${index}`}>last</label>
								<input
									type="radio"
									id={`result-${index}`}
									name={`missing-${index}`}
									value="result"
									className="settings__input"
									onChange={setStateOnRadioChange(index)}
									checked={setting.missing === 'result'}
								/>
								<label htmlFor={`result-${index}`}>result</label>
								<input
									type="radio"
									id={`random-${index}`}
									name={`missing-${index}`}
									value="random"
									className="settings__input"
									onChange={setStateOnRadioChange(index)}
									checked={setting.missing === 'random'}
								/>
								<label htmlFor={`random-${index}`}>random</label>
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
									<option >
										-- select --
									</option>
									{types.map((type, i) => (
										<option
											key={i}
											value={type}
											className="settings__option"
										>
											{type}
										</option>
									))}
								</select>
							</div>
						</div>
						<div className="settings__row--mobile">
							<div className="settings__control">
								<label htmlFor="settings-quantity" className="settings__label">
									Qty:
								</label>
								<input
									type="number"
									pattern="[0-9]*"
									inputMode="numeric"
									step="1"
									title=""
									placeholder=" "
									name="quantity"
									min="1"
									max="100"
									className="settings__input"
									value={setting.quantity}
									onChange={setStateOnChange(index)}
									onKeyDown={(event) => handleKeyDown(event)}
								/>
							</div>
							<div className="settings__control settings__control--btns">
								<input
									type="button"
									value="+"
									className="btn settings__control-btn"
									onClick={insertSettings(index)}
									title="add line"
								/>
								<input
									type="button"
									value="&times;"
									className="btn settings__control-btn"
									onClick={deleteSettings(index)}
									title="remove line"
								/>
							</div>
						</div>
					</div>
				))}
			</div>
		);
	};

	return (
		<div className="settings">
			<Collapsible
				title={`Settings`}
				id={`settings`}
				content={collapsibleContent()}
				collapsibleClassName={`collapsible`}
				titleClassName={`collapsible__title collapsible__title--level-one`}
				iconBoxClassName={`collapsible__icon-box collapsible__icon-box--level-one`}
				iconClassName={`collapsible__icon--level-one`}
				borderBottom={true}
			/>
			<input type="button" className="btn settings__go-btn" value="Generate" onClick={generate} />
			<hr className="header__hr" />
		</div>
	);
};

export default ProblemSettings;
