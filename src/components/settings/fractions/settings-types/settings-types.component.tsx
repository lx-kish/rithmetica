import { ReactElement } from "react";

import { useAppSelector } from "../../../../redux/hooks";
import { settings } from "../../../../redux/fractions/fractionsSlice";

import ProblemTypes from "../../../math/problem-types";

import handleChangeFractionsSettings from "../../../../utils/handle-change-event/handle-change-fractions-settings-event";

import { ISettings } from "../../../../TS/interfaces/interfaces";

interface IProps {
  index: number;
  setting: ISettings;
}

function SettingsTypes({ index, setting }: IProps): ReactElement {
  const stateSettings = useAppSelector(settings);

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
        onChange={handleChangeFractionsSettings(index, stateSettings)}
      >
        <option>-- select --</option>
        {ProblemTypes.filter((type) => {
          return (
            type.operation === stateSettings[index].operation &&
            type.section === stateSettings[index].section
          );
        }).map((type, i) => (
          <option key={i} value={type.name} className="settings__option">
            {type.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SettingsTypes;
