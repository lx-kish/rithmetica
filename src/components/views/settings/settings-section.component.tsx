import React, { ReactElement } from "react";

import handleChangeSettings from "../../../utils/handle-change-settings/handle-change-settings";

import { ISettings } from "../../../TS/interfaces/interfaces";
import { sections } from "../../../TS/constatnts/constants";

interface IProps {
  index: number;
  setting: ISettings;
  pageName: string;
}

function SettingsSection({ index, setting, pageName }: IProps): ReactElement {
  const sectionElements = Object.keys(sections).map((section, i) => (
    <React.Fragment key={`section-${index}-${i}`}>
      <input
        type="radio"
        id={`${section}-${index}`}
        name={`section-${index}`}
        value={sections[section as keyof typeof sections]}
        className="settings__input settings__input--radio"
        onChange={handleChangeSettings(index, setting, pageName)}
        checked={setting.section === sections[section as keyof typeof sections]}
      />
      <label
        className="settings__radio-label settings__radio-label--section"
        htmlFor={`${section}-${index}`}
        title={section}
      >
        {sections[section as keyof typeof sections]}
      </label>
    </React.Fragment>
  ));

  return (
    <div className="settings__control settings__control--radio settings__control--operation">
      {sectionElements}
    </div>
  );
}

export default SettingsSection;
