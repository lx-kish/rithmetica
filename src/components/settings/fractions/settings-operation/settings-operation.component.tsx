import React from 'react';

import { useAppSelector } from '../../../../redux/hooks';
import {
  settings,
} from '../../../../redux/fractions/fractionsSlice';

import operations from '../../../views/fractions/operations';
import handleChangeFractionsSettings from '../../../../utils/handle-change-event/handle-change-fractions-settings-event';

import IFractionsSetting from '../../../../TS/interfaces/IFractionsSetting';

interface IProps {
  index: number,
  setting: IFractionsSetting,
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
            onChange={handleChangeFractionsSettings(props.index, stateSettings)}
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
