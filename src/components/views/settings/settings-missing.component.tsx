import React, { ReactElement } from "react";

import ProblemTypes from "../../math/problem-types";

import handleChangeSettings from "../../../utils/handle-change-settings/handle-change-settings";

import { ISettings } from "../../../TS/interfaces/interfaces";
import { arithmeticMissing } from "../../../TS/constatnts/constants";
import { TArithmeticMissing } from "../../../TS/types/types";

interface IProps {
  index: number;
  setting: ISettings;
  pageName: string;
}

function SettingsMissing({ index, setting, pageName }: IProps): ReactElement {
  const disabled =
    ProblemTypes.find(
      (type) =>
        type.page === pageName &&
        setting.name === type.name &&
        setting.operation === type.operation
    )?.missing === arithmeticMissing.result;

  const missings = Object.keys(arithmeticMissing).map((missing, i) => (
    <React.Fragment key={`missing-${index}-${i}`}>
      <input
        type="radio"
        id={`${missing}-${index}`}
        name={`missing-${index}`}
        value={missing}
        className="settings__input settings__input--radio"
        onChange={handleChangeSettings(index, setting, pageName)}
        checked={
          setting.missing === arithmeticMissing[missing as TArithmeticMissing]
        }
        disabled={disabled}
      />
      <label className="settings__radio-label" htmlFor={`${missing}-${index}`}>
        {missing}
      </label>
    </React.Fragment>
  ));

  return (
    <div className="settings__control settings__control--radio">{missings}</div>
  );
}

export default SettingsMissing;
