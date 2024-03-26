import React, { ReactElement } from "react";

import { useAppSelector } from "../../../../redux/hooks";
import { settings } from "../../../../redux/fractions/fractionsSlice";

import operations from "../../../views/fractions/operations";
import handleChangeFractionsSettings from "../../../../utils/handle-change-event/handle-change-fractions-settings-event";

import { ISettings } from "../../../../TS/interfaces/interfaces";

interface IProps {
  index: number;
  setting: ISettings;
}

function SettingsOperation({ index, setting }: IProps): ReactElement {
  const stateSettings = useAppSelector(settings);

  const getOperations = () => {
    return operations.map((operation, i) => (
      <React.Fragment key={`operation-${index}-${i}`}>
        <input
          type="radio"
          id={`${operation.name}-${index}`}
          name={`operation-${index}`}
          value={operation.symbol}
          className="settings__input settings__input--radio"
          onChange={handleChangeFractionsSettings(index, stateSettings)}
          checked={stateSettings[index].operation === operation.symbol}
          disabled={operation.symbol === "½" || operation.symbol === "%"}
        />
        <label
          className="settings__radio-label settings__radio-label--operation"
          htmlFor={`${operation.name}-${index}`}
          title={operation.name}
        >
          {operation.symbol}
        </label>
      </React.Fragment>
    ));
  };
  return (
    <div className="settings__control settings__control--radio settings__control--operation">
      {getOperations()}
    </div>
  );
}

export default SettingsOperation;
