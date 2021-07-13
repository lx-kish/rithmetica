import React from 'react';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import {
	insertSetting,
	deleteSetting,
	changeSetting,
	generateProblems,
	selectAdditionSubtraction,

} from '../../redux/addition-subtraction/additionSubtractionSlice';

import Collapsible from '../collapsible/collapsible.component';

import handleKeyDown from '../../utils/handle-key-down-event/handle-key-down-event';

import types from '../addition-subtraction/types';

interface IProps {

};

const ProblemSettings: React.FC<IProps> = (props) => {

	const additionSubtractionState = useAppSelector(selectAdditionSubtraction);
	const dispatch = useAppDispatch();

	// console.log(
	// 	'%c fullState.problemSettings after generate triggered ===> ',
	// 	'color: gold; font-weight: bold;',
	// 	[...fullState.problemSettings][0]['type']
	// );

	const collapsibleContent = () => {
		return (
			<div className="settings__settings-group">
				{additionSubtractionState.settings.map((setting, index) => (
					<div className="settings__setting" key={index}>
						<div className="settings__row--mobile">
							<div className="settings__control settings__control--radio">
								<input
									type="radio"
									id={`addition-${index}`}
									name={`operation-${index}`}
									value="addition"
									className="settings__input"
									onChange={() => dispatch(changeSetting({ index, name: "operation", value: "addition" }))}
									checked={setting.operation === "addition"}
								/>
								<label htmlFor={`addition-${index}`}>addition</label>
								<input
									type="radio"
									id={`subtraction-${index}`}
									name={`operation-${index}`}
									value="subtraction"
									className="settings__input"
									onChange={() => dispatch(changeSetting({ index, name: "operation", value: "subtraction" }))}
									checked={setting.operation === "subtraction"}
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
									onChange={() => dispatch(changeSetting({ index, name: "missing", value: "first" }))}
									checked={setting.missing === "first"}
								/>
								<label htmlFor={`first-${index}`}>first</label>
								<input
									type="radio"
									id={`last-${index}`}
									name={`missing-${index}`}
									value="last"
									className="settings__input"
									onChange={() => dispatch(changeSetting({ index, name: "missing", value: "last" }))}
									checked={setting.missing === "last"}
								/>
								<label htmlFor={`last-${index}`}>last</label>
								<input
									type="radio"
									id={`result-${index}`}
									name={`missing-${index}`}
									value="result"
									className="settings__input"
									onChange={() => dispatch(changeSetting({ index, name: "missing", value: "result" }))}
									checked={setting.missing === "result"}
								/>
								<label htmlFor={`result-${index}`}>result</label>
								<input
									type="radio"
									id={`random-${index}`}
									name={`missing-${index}`}
									value="random"
									className="settings__input"
									onChange={() => dispatch(changeSetting({ index, name: "missing", value: "random" }))}
									checked={setting.missing === "random"}
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
									onChange={(event) => dispatch(changeSetting({ index, name: "type", value: event.target.value }))}
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
									onChange={(event) => dispatch(changeSetting({ index, name: "quantity", value: event.target.value }))}
									onKeyDown={(event) => handleKeyDown(event)}
								/>
							</div>
							<div className="settings__control settings__control--btns">
								<input
									type="button"
									value="+"
									className="btn settings__control-btn"
									onClick={() => dispatch(insertSetting(index))}
									title="add line"
								/>
								<input
									type="button"
									value="&times;"
									className="btn settings__control-btn"
									onClick={() => dispatch(deleteSetting(index))}
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
			<input
				type="button"
				className="btn settings__go-btn"
				value="Generate"
				onClick={() => dispatch(generateProblems())}
			/>
			<hr className="header__hr" />
		</div>
	);
};

export default ProblemSettings;
