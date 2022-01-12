import React from 'react';

import { useAppSelector } from '../../../redux/hooks';
import {
  settings,
} from '../../../redux/arithmetic/arithmeticSlice';

import operations from '../../arithmetic/operations';
import handleChangeArithmeticalSettings from '../../../utils/handle-change-event/handle-change-arithmetical-settings-event';

import IArithmeticSetting from '../../../TS/interfaces/IArithmeticSetting';

interface IProps {
  index: number,
  setting: IArithmeticSetting,
};

const SettingsOperation: React.FC<IProps> = (props: IProps): JSX.Element => {

  const stateSettings = useAppSelector(settings);

  const getOperations = () => {
    return (

      operations.map((operation, i) =>
        <React.Fragment key={`operation-${props.index}-${i}`}>
          <input
            type="radio"
            id={`${operation.name}-${props.index}`}
            name={`operation-${props.index}`}
            value={operation.symbol}
            className="settings__input settings__input--radio"
            onChange={handleChangeArithmeticalSettings(props.index, stateSettings)}
            checked={stateSettings[props.index].operation === operation.symbol}
            disabled={operation.symbol === "½" || operation.symbol === "%"}
          />
          <label
            className="settings__radio-label settings__radio-label--operation"
            htmlFor={`${operation.name}-${props.index}`}
            title={operation.name}
          >
            {operation.symbol}
          </label>
        </React.Fragment>
      )
    )
  }
  return (
    <div className="settings__control settings__control--radio settings__control--operation">
      {getOperations()}
    </div>
  );
};

export default SettingsOperation;
