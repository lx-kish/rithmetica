import React, { ReactElement } from "react";

import { useAppSelector } from "../../../../redux/hooks";
import { settings } from "../../../../redux/fractions/fractionsSlice";

import sections from "../../../views/fractions/sections";
import handleChangeFractionsSettings from "../../../../utils/handle-change-event/handle-change-fractions-settings-event";

import { ISettings } from "../../../../TS/interfaces/interfaces";

interface IProps {
  index: number;
  setting: ISettings;
}

function SettingsSection({ index, setting }: IProps): ReactElement {
  const stateSettings = useAppSelector(settings);

  const getSections = () => {
    return sections.map((section, i) => (
      <React.Fragment key={`section-${index}-${i}`}>
        <input
          type="radio"
          id={`${section.name}-${index}`}
          name={`section-${index}`}
          value={section.symbol}
          className="settings__input settings__input--radio"
          onChange={handleChangeFractionsSettings(index, stateSettings)}
          checked={stateSettings[index].section === section.symbol}
        />
        <label
          className="settings__radio-label settings__radio-label--section"
          htmlFor={`${section.name}-${index}`}
          title={section.name}
        >
          {section.symbol}
        </label>
      </React.Fragment>
    ));
  };
  return (
    <div className="settings__control settings__control--radio settings__control--operation">
      {getSections()}
    </div>
  );
}

export default SettingsSection;
