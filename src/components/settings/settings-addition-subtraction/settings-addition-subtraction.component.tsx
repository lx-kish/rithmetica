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

const SettingsAdditionSubtraction: React.FC<IProps> = (props: IProps): JSX.Element => {

  const dispatch = useAppDispatch();

  return (
    <div className="settings__control settings__control--radio">
      <input
        type="radio"
        id={`addition-${props.index}`}
        name={`operation-${props.index}`}
        value="addition"
        className="settings__input"
        onChange={() => dispatch(changeSetting({ index: props.index, name: "operation", value: "addition" }))}
        checked={props.setting.operation === "addition"}
      />
      <label htmlFor={`addition-${props.index}`}>addition</label>
      <input
        type="radio"
        id={`subtraction-${props.index}`}
        name={`operation-${props.index}`}
        value="subtraction"
        className="settings__input"
        onChange={() => dispatch(changeSetting({ index: props.index, name: "operation", value: "subtraction" }))}
        checked={props.setting.operation === "subtraction"}
      />
      <label htmlFor={`subtraction-${props.index}`}>subtraction</label>
    </div>
  );
};

export default SettingsAdditionSubtraction;
