import React, { ReactElement } from "react";
// import { useLocation } from "react-router-dom";

import { useAppSelector } from "../../../../redux/hooks";
import { settings } from "../../../../redux/fractions/fractionsSlice";

// import ProblemTypes from "../../../math/problem-types";

import handleChangeFractionsSettings from "../../../../utils/handle-change-event/handle-change-fractions-settings-event";

import { sections } from "../../../../TS/constatnts/constants";
import { ISettings } from "../../../../TS/interfaces/interfaces";

interface IProps {
  index: number;
  setting: ISettings;
}

function SettingsSection({ index, setting }: IProps): ReactElement {
  const stateSettings = useAppSelector(settings);
  // TODO - consider to use section name in ProblemTypes
  // const location = useLocation();

  // const sections1 = [
  //   ...new Set(
  //     ProblemTypes.filter((type) => type.page === location.pathname).map(
  //       (type) => type.section
  //     )
  //   ),
  // ];

  const getSections = () => {
    return Object.keys(sections).map((section, i) => (
      <React.Fragment key={`section-${index}-${i}`}>
        <input
          type="radio"
          id={`${section}-${index}`}
          name={`section-${index}`}
          value={sections[section as keyof typeof sections]}
          className="settings__input settings__input--radio"
          onChange={handleChangeFractionsSettings(index, stateSettings)}
          checked={
            stateSettings[index].section ===
            sections[section as keyof typeof sections]
          }
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
  };
  return (
    <div className="settings__control settings__control--radio settings__control--operation">
      {getSections()}
    </div>
  );
}

export default SettingsSection;
