import React, { ReactElement } from "react";

import { useAppSelector } from "../../../../redux/hooks";
import { settings } from "../../../../redux/fractions/fractionsSlice";

import handleChangeFractionsSettings from "../../../../utils/handle-change-event/handle-change-fractions-settings-event";

import { operations } from "../../../../TS/constatnts/constants";
import { ISettings } from "../../../../TS/interfaces/interfaces";

interface IProps {
  index: number;
  setting: ISettings;
}

function SettingsOperation({ index, setting }: IProps): ReactElement {
  const stateSettings = useAppSelector(settings);

  const getOperations = () => {
    return Object.keys(operations).map((operation, i) => (
      <React.Fragment key={`operation-${index}-${i}`}>
        <input
          type="radio"
          id={`${operation}-${index}`}
          name={`operation-${index}`}
          value={operations[operation as keyof typeof operations]}
          className="settings__input settings__input--radio"
          onChange={handleChangeFractionsSettings(index, stateSettings)}
          checked={
            stateSettings[index].operation ===
            operations[operation as keyof typeof operations]
          }
          disabled={operation === "½" || operation === "%"}
        />
        <label
          className="settings__radio-label settings__radio-label--operation"
          htmlFor={`${operation}-${index}`}
          title={operation}
        >
          {operations[operation as keyof typeof operations]}
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
