import { ReactElement } from "react";
import { useLocation } from "react-router-dom";

import { useAppSelector } from "../../../../redux/hooks";
import { settings } from "../../../../redux/arithmetic/arithmeticSlice";

import ProblemTypes from "../../../math/problem-types";

import handleChangeArithmeticalSettings from "../../../../utils/handle-change-event/handle-change-arithmetical-settings-event";

import { ISettings } from "../../../../TS/interfaces/interfaces";

interface IProps {
  index: number;
  setting: ISettings;
}

function SettingsTypes({ index, setting }: IProps): ReactElement {
  const stateSettings = useAppSelector(settings);
  const location = useLocation();

  const types = ProblemTypes.filter((type) => type.page === location.pathname);

  return (
    <div className="settings__control settings__control--types">
      <label
        htmlFor="settings-type"
        className="settings__label settings__label--types"
      >
        Type:
      </label>
      <select
        name="type"
        id="settings-type"
        className="settings__select"
        value={setting.name}
        onChange={handleChangeArithmeticalSettings(index, stateSettings)}
      >
        <option>-- select --</option>
        {types
          .filter((type) => type.operation === stateSettings[index].operation)
          .map((type, i) => (
            <option key={i} value={type.name} className="settings__option">
              {type.name}
            </option>
          ))}
      </select>
    </div>
  );
}

export default SettingsTypes;
