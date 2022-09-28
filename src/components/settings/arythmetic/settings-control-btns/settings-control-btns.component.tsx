import React from 'react';

import { useAppDispatch } from '../../../../redux/hooks';
import {
	insertSetting,
	deleteSetting,
} from '../../../../redux/arithmetic/arithmeticSlice';

interface IProps {
  index: number,
};

const SettingsControlButtons: React.FC<IProps> = (props: IProps): JSX.Element => {

	const dispatch = useAppDispatch();

	return (
    <div className="settings__control settings__control--btns">
      <input
        type="button"
        value="+"
        className="btn settings__control-btn"
        onClick={() => dispatch(insertSetting(props.index))}
        title="add line"
      />
      <input
        type="button"
        value="&times;"
        className="btn settings__control-btn"
        onClick={() => dispatch(deleteSetting(props.index))}
        title="remove line"
      />
    </div>
	);
};

export default SettingsControlButtons;
