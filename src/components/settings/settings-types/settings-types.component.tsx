import React from 'react';

import { useAppDispatch } from '../../../redux/hooks';
import {
	changeSetting,
} from '../../../redux/addition-subtraction/additionSubtractionSlice';

import IAdditionSubtractionSetting from '../../../TS/interfaces/IAdditionSubtractionSetting';

interface IProps {
	index: number,
	setting: IAdditionSubtractionSetting,
	types: string[]
};

const SettingsTypes: React.FC<IProps> = (props: IProps): JSX.Element => {

	const dispatch = useAppDispatch();

	return (
		<div className="settings__control">
			<label htmlFor="settings-type" className="settings__label">
				Type:
			</label>
			<select
				name="type"
				id="settings-type"
				className="settings__select"
				value={props.setting.type}
				onChange={(event) => dispatch(changeSetting({ index: props.index, name: "type", value: event.target.value }))}
			>
				<option >
					-- select --
				</option>
				{props.types.map((type, i) => (
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
	);
};

export default SettingsTypes;
