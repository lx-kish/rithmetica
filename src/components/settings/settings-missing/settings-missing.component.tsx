import React from 'react';

import { useAppDispatch } from '../../../redux/hooks';
import {
	changeSetting,
} from '../../../redux/addition-subtraction/additionSubtractionSlice';

import IAdditionSubtractionSetting from '../../../TS/interfaces/IAdditionSubtractionSetting';

interface IProps {
	index: number,
	setting: IAdditionSubtractionSetting,
};

const SettingsMissing: React.FC<IProps> = (props: IProps): JSX.Element => {

	const dispatch = useAppDispatch();

	return (
		<div className="settings__control settings__control--radio">
			<input
				type="radio"
				id={`first-${props.index}`}
				name={`missing-${props.index}`}
				value="first"
				className="settings__input"
				onChange={() => dispatch(changeSetting({ index: props.index, name: "missing", value: "first" }))}
				checked={props.setting.missing === "first"}
			/>
			<label htmlFor={`first-${props.index}`}>first</label>
			<input
				type="radio"
				id={`last-${props.index}`}
				name={`missing-${props.index}`}
				value="last"
				className="settings__input"
				onChange={() => dispatch(changeSetting({ index: props.index, name: "missing", value: "last" }))}
				checked={props.setting.missing === "last"}
			/>
			<label htmlFor={`last-${props.index}`}>last</label>
			<input
				type="radio"
				id={`result-${props.index}`}
				name={`missing-${props.index}`}
				value="result"
				className="settings__input"
				onChange={() => dispatch(changeSetting({ index: props.index, name: "missing", value: "result" }))}
				checked={props.setting.missing === "result"}
			/>
			<label htmlFor={`result-${props.index}`}>result</label>
			<input
				type="radio"
				id={`random-${props.index}`}
				name={`missing-${props.index}`}
				value="random"
				className="settings__input"
				onChange={() => dispatch(changeSetting({ index: props.index, name: "missing", value: "random" }))}
				checked={props.setting.missing === "random"}
			/>
			<label htmlFor={`random-${props.index}`}>random</label>
		</div>
	);
};

export default SettingsMissing;
