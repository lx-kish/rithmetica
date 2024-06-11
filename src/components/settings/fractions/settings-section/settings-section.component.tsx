import React, { ReactElement } from "react";
// import { useLocation } from "react-router-dom";

import { useAppSelector } from "../../../../redux/hooks";
import { settings } from "../../../../redux/fractions/fractionsSlice";

// import ProblemTypes from "../../../math/problem-types";
import sections from "../../../math/fractions-operands-generators/sections";
import handleChangeFractionsSettings from "../../../../utils/handle-change-event/handle-change-fractions-settings-event";

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
