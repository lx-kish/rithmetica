import React from 'react';

import { useAppSelector } from '../../../../redux/hooks';
import {
	settings,
} from '../../../../redux/arithmetic/arithmeticSlice';

import types from '../../../views/arithmetic/types';

import handleChangeArithmeticalSettings from '../../../../utils/handle-change-event/handle-change-arithmetical-settings-event';

import IArithmeticSetting from '../../../../TS/interfaces/IArithmeticSetting';

interface IProps {
	index: number,
	setting: IArithmeticSetting,
};

const SettingsMissing: React.FC<IProps> = (props: IProps): JSX.Element => {

	const stateSettings = useAppSelector(settings);

	const getDisabled = (): boolean => {
		const disabled = types.find(type => stateSettings[props.index].name === type.name)?.missing === "result";

		return disabled;

	}

	return (
		<div className="settings__control settings__control--radio">
			<input
				type="radio"
				id={`first-${props.index}`}
				name={`missing-${props.index}`}
				value="first"
				className="settings__input settings__input--radio"
				onChange={handleChangeArithmeticalSettings(props.index, stateSettings)}
				checked={props.setting.missing === "first"}
				disabled={getDisabled()}
			/>
			<label
				className="settings__radio-label"
				htmlFor={`first-${props.index}`}
			>
				first
			</label>
			<input
				type="radio"
				id={`last-${props.index}`}
				name={`missing-${props.index}`}
				value="last"
				className="settings__input settings__input--radio"
				onChange={handleChangeArithmeticalSettings(props.index, stateSettings)}
				checked={props.setting.missing === "last"}
				disabled={getDisabled()}
			/>
			<label
				className="settings__radio-label"
				htmlFor={`last-${props.index}`}
			>
				last
			</label>
			<input
				type="radio"
				id={`result-${props.index}`}
				name={`missing-${props.index}`}
				value="result"
				className="settings__input settings__input--radio"
				onChange={handleChangeArithmeticalSettings(props.index, stateSettings)}
				checked={props.setting.missing === "result"}
			/>
			<label
				className="settings__radio-label"
				htmlFor={`result-${props.index}`}
			>
				result
			</label>
			<input
				type="radio"
				id={`random-${props.index}`}
				name={`missing-${props.index}`}
				value="random"
				className="settings__input settings__input--radio"
				onChange={handleChangeArithmeticalSettings(props.index, stateSettings)}
				checked={props.setting.missing === "random"}
				disabled={getDisabled()}
			/>
			<label
				className="settings__radio-label"
				htmlFor={`random-${props.index}`}
			>
				random
			</label>
		</div>
	);
};

export default SettingsMissing;
