import React from 'react';

import { useAppSelector } from '../../../../redux/hooks';
import {
  settings,
} from '../../../../redux/fractions/fractionsSlice';

import sections from '../../../views/fractions/sections';
import handleChangeFractionsSettings from '../../../../utils/handle-change-event/handle-change-fractions-settings-event';

import IFractionsSetting from '../../../../TS/interfaces/IFractionsSetting';

interface IProps {
  index: number,
  setting: IFractionsSetting,
};

const SettingsSection: React.FC<IProps> = (props: IProps): JSX.Element => {

  const stateSettings = useAppSelector(settings);

  const getSections = () => {
    return (

      sections.map((section, i) =>
        <React.Fragment key={`section-${props.index}-${i}`}>
          <input
            type="radio"
            id={`${section.name}-${props.index}`}
            name={`section-${props.index}`}
            value={section.symbol}
            className="settings__input settings__input--radio"
            onChange={handleChangeFractionsSettings(props.index, stateSettings)}
            checked={stateSettings[props.index].section === section.symbol}
            // disabled={section.symbol === "½" || section.symbol === "%"}
          />
          <label
            className="settings__radio-label settings__radio-label--section"
            htmlFor={`${section.name}-${props.index}`}
            title={section.name}
          >
            {section.symbol}
          </label>
        </React.Fragment>
      )
    )
  }
  return (
    <div className="settings__control settings__control--radio settings__control--operation">
      {getSections()}
    </div>
  );
};

export default SettingsSection;
