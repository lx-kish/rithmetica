import React from 'react';

import { useAppSelector } from '../../../redux/hooks';
import {
	settings,
} from '../../../redux/arithmetic/arithmeticSlice';

import types from '../../arithmetic/types';

import handleChangeArithmeticalSettings from '../../../utils/handle-change-event/handle-change-arithmetical-settings-event';

import IArithmeticSetting from '../../../TS/interfaces/IArithmeticSetting';

interface IProps {
	index: number,
	setting: IArithmeticSetting,
};

const SettingsTypes: React.FC<IProps> = (props: IProps): JSX.Element => {

	const stateSettings = useAppSelector(settings);

	return (
		<div className="settings__control settings__control--types">
			<label htmlFor="settings-type" className="settings__label settings__label--types">
				Type:
			</label>
			<select
				name="type"
				id="settings-type"
				className="settings__select"
				value={props.setting.name}
				onChange={handleChangeArithmeticalSettings(props.index, stateSettings)}
			>
				<option >
					-- select --
				</option>
				{types.filter(type => type.operation === stateSettings[props.index].operation).map((type, i) => (
					<option
						key={i}
						value={type.name}
						className="settings__option"
					>
						{type.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default SettingsTypes;
