import { ReactElement } from "react";
import { useLocation } from "react-router-dom";

import { useAppSelector } from "../../../../redux/hooks";
import { settings } from "../../../../redux/arithmetic/arithmeticSlice";

import ProblemTypes from "../../../math/problem-types";

import handleChangeArithmeticalSettings from "../../../../utils/handle-change-event/handle-change-arithmetical-settings-event";

import { ISettings } from "../../../../TS/interfaces/interfaces";
import { arithmeticMissing } from "../../../../TS/constatnts/constants";

interface IProps {
  index: number;
  setting: ISettings;
}

function SettingsMissing({ index, setting }: IProps): ReactElement {
  const stateSettings = useAppSelector(settings);
  const location = useLocation();

  const disabled =
    ProblemTypes.filter((type) => type.page === location.pathname).find(
      (type) => stateSettings[index].name === type.name
    )?.missing === arithmeticMissing.result;

  return (
    <div className="settings__control settings__control--radio">
      <input
        type="radio"
        id={`first-${index}`}
        name={`missing-${index}`}
        value="first"
        className="settings__input settings__input--radio"
        onChange={handleChangeArithmeticalSettings(index, stateSettings)}
        checked={setting.missing === arithmeticMissing.first}
        disabled={disabled}
      />
      <label className="settings__radio-label" htmlFor={`first-${index}`}>
        first
      </label>
      <input
        type="radio"
        id={`last-${index}`}
        name={`missing-${index}`}
        value="last"
        className="settings__input settings__input--radio"
        onChange={handleChangeArithmeticalSettings(index, stateSettings)}
        checked={setting.missing === arithmeticMissing.last}
        disabled={disabled}
      />
      <label className="settings__radio-label" htmlFor={`last-${index}`}>
        last
      </label>
      <input
        type="radio"
        id={`result-${index}`}
        name={`missing-${index}`}
        value="result"
        className="settings__input settings__input--radio"
        onChange={handleChangeArithmeticalSettings(index, stateSettings)}
        checked={setting.missing === arithmeticMissing.result}
      />
      <label className="settings__radio-label" htmlFor={`result-${index}`}>
        result
      </label>
      <input
        type="radio"
        id={`random-${index}`}
        name={`missing-${index}`}
        value="random"
        className="settings__input settings__input--radio"
        onChange={handleChangeArithmeticalSettings(index, stateSettings)}
        checked={setting.missing === arithmeticMissing.random}
        disabled={disabled}
      />
      <label className="settings__radio-label" htmlFor={`random-${index}`}>
        random
      </label>
    </div>
  );
}

export default SettingsMissing;
