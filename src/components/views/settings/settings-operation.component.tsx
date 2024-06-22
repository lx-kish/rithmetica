import React, { ReactElement } from "react";

import handleChangeSettings from "../../../utils/handle-change-settings/handle-change-settings";

import { ISettings } from "../../../TS/interfaces/interfaces";
import { operations } from "../../../TS/constatnts/constants";

interface IProps {
  index: number;
  setting: ISettings;
  pageName: string;
}

function SettingsOperation({ index, setting, pageName }: IProps): ReactElement {
  const operationElements = Object.keys(operations).map((operation, i) => (
    <React.Fragment key={`operation-${index}-${i}`}>
      <input
        type="radio"
        id={`${operation}-${index}`}
        name={`operation-${index}`}
        value={operations[operation as keyof typeof operations]}
        className="settings__input settings__input--radio"
        onChange={handleChangeSettings(index, setting, pageName)}
        checked={
          setting.operation === operations[operation as keyof typeof operations]
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

  return (
    <div className="settings__control settings__control--radio settings__control--operation">
      {operationElements}
    </div>
  );
}

export default SettingsOperation;
