import React from 'react';

import { useAppSelector } from '../../../redux/hooks';
import {
	settings,
} from '../../../redux/arithmetic/arithmeticSlice';

import handleChangeArithmeticalSettings from '../../../utils/handle-change-event/handle-change-arithmetical-settings-event';

import IArithmeticSetting from '../../../TS/interfaces/IArithmeticSetting';

interface IProps {
  index: number,
  setting: IArithmeticSetting,
};

const SettingsOperation: React.FC<IProps> = (props: IProps): JSX.Element => {

	const stateSettings = useAppSelector(settings);

  return (
    <div className="settings__control settings__control--radio settings__control--operation">
      <input
        type="radio"
        id={`addition-${props.index}`}
        name={`operation-${props.index}`}
        value="+"
        className="settings__input settings__input--radio"
        onChange={handleChangeArithmeticalSettings(props.index, stateSettings)}
        checked={stateSettings[props.index].operation === "+"}
      />
      <label
        className="settings__radio-label settings__radio-label--operation"
        htmlFor={`addition-${props.index}`}
        title="addition"
      >
        +
      </label>
      <input
        type="radio"
        id={`subtraction-${props.index}`}
        name={`operation-${props.index}`}
        value="-"
        className="settings__input settings__input--radio"
        onChange={handleChangeArithmeticalSettings(props.index, stateSettings)}
        checked={stateSettings[props.index].operation === "-"}
      />
      <label
        className="settings__radio-label settings__radio-label--operation"
        htmlFor={`subtraction-${props.index}`}
        title="subtraction"
      >
        -
      </label>
      <input
        type="radio"
        id={`multiplication-${props.index}`}
        name={`operation-${props.index}`}
        value="×"
        className="settings__input settings__input--radio"
        onChange={handleChangeArithmeticalSettings(props.index, stateSettings)}
        checked={stateSettings[props.index].operation === "×"}
      />
      <label
        className="settings__radio-label settings__radio-label--operation"
        htmlFor={`multiplication-${props.index}`}
        title="multiplication"
      >
        &times;
      </label>
      <input
        type="radio"
        id={`division-${props.index}`}
        name={`operation-${props.index}`}
        value="÷"
        className="settings__input settings__input--radio"
        onChange={handleChangeArithmeticalSettings(props.index, stateSettings)}
        checked={stateSettings[props.index].operation === "÷"}
      />
      <label
        className="settings__radio-label settings__radio-label--operation"
        htmlFor={`division-${props.index}`}
        title="division"
      >
        &divide;
      </label>
      <input
        type="radio"
        id={`fraction-${props.index}`}
        name={`operation-${props.index}`}
        value="½"
        className="settings__input settings__input--radio"
        onChange={handleChangeArithmeticalSettings(props.index, stateSettings)}
        checked={stateSettings[props.index].operation === "½"}
      />
      <label
        className="settings__radio-label settings__radio-label--operation"
        htmlFor={`fraction-${props.index}`}
        title="fraction"
      >
        ½
      </label>
      <input
        type="radio"
        id={`percentage-${props.index}`}
        name={`operation-${props.index}`}
        value="%"
        className="settings__input settings__input--radio"
        onChange={handleChangeArithmeticalSettings(props.index, stateSettings)}
        checked={stateSettings[props.index].operation === "%"}
      />
      <label
        className="settings__radio-label settings__radio-label--operation"
        htmlFor={`percentage-${props.index}`}
        title="percentage"
      >
        %
      </label>
    </div>
  );
};

export default SettingsOperation;
