import React from 'react';

import { useAppSelector } from '../../../../redux/hooks';
import {
	settings,
} from '../../../../redux/fractions/fractionsSlice';

import types from '../../../views/fractions/types';

import handleChangeFractionsSettings from '../../../../utils/handle-change-event/handle-change-fractions-settings-event';

import IFractionsSetting from '../../../../TS/interfaces/IFractionsSetting';

interface IProps {
	index: number,
	setting: IFractionsSetting,
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
				onChange={handleChangeFractionsSettings(props.index, stateSettings)}
			>
				<option >
					-- select --
				</option>
				{types.filter(type => {
					return type.operation === stateSettings[props.index].operation &&
						type.section === stateSettings[props.index].section
				}).map((type, i) => (
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
