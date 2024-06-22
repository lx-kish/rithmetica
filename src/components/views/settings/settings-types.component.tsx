import { ReactElement } from "react";

import ProblemTypes from "../../math/problem-types";

import handleChangeSettings from "../../../utils/handle-change-settings/handle-change-settings";

import { IProblemType, ISettings } from "../../../TS/interfaces/interfaces";
import { routes } from "../../../TS/constatnts/constants";

interface IProps {
  index: number;
  setting: ISettings;
  pageName: string;
}

function SettingsTypes({ index, setting, pageName }: IProps): ReactElement {
  let types!: IProblemType[];

  if (pageName === routes.arithmetic) {
    types = ProblemTypes.filter(
      (type) => type.page === pageName && type.operation === setting.operation
    );
  }
  if (pageName === routes.fractions) {
    types = ProblemTypes.filter(
      (type) =>
        type.page === pageName &&
        type.section === setting.section &&
        type.operation === setting.operation
    );
  }

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
        onChange={handleChangeSettings(index, setting, pageName)}
      >
        <option>-- select --</option>
        {types.map((type, i) => (
          <option key={i} value={type.name} className="settings__option">
            {type.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SettingsTypes;
