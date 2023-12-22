import React from "react";

import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import {
  generateProblems,
  changeSetting,
  settings,
} from "../../../redux/fractions/fractionsSlice";

import Collapsible from "../../collapsible/collapsible.component";

import SettingsSection from "./settings-section/settings-section.component";

import SettingsOperation from "./settings-operation/settings-operation.component";

import SettingsTypes from "./settings-types/settings-types.component";

import SettingsControlButtons from "./settings-control-btns/settings-control-btns.component";

import handleKeyDown from "../../../utils/handle-key-down-event/handle-key-down-event";

interface IProps {}

const ProblemSettings: React.FC<IProps> = (props: IProps): JSX.Element => {
  const stateSettings = useAppSelector(settings);

  const dispatch = useAppDispatch();

  const collapsibleContent = () => {
    return (
      <div className="settings__settings-group">
        {stateSettings.map((setting, index) => (
          <div className="settings__setting" key={index}>
            <div className="settings__col settings__col--controls">
              <SettingsSection index={index} setting={setting} />
              <SettingsOperation index={index} setting={setting} />
              <SettingsTypes index={index} setting={setting} />
            </div>
            <div className="settings__col settings__col--qty-btns">
              <div className="settings__control">
                <label htmlFor="settings-quantity" className="settings__label">
                  Qty:
                </label>
                <input
                  type="number"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  step="1"
                  title=""
                  placeholder=" "
                  name="quantity"
                  min="1"
                  max="100"
                  className="settings__input"
                  value={setting.quantity}
                  onChange={(event) =>
                    dispatch(
                      changeSetting({
                        index,
                        name: "quantity",
                        value: event.target.value,
                      })
                    )
                  }
                  onKeyDown={(event) => handleKeyDown(event)}
                />
              </div>
              <SettingsControlButtons index={index} />
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="settings">
      <Collapsible
        title="Settings"
        id="settings"
        content={collapsibleContent()}
        collapsibleClassName="collapsible collapsible__border-bottom"
        titleClassName="collapsible__title collapsible__title--level-one"
        iconBoxClassName="collapsible__icon-box collapsible__icon-box--level-one"
        iconClassName="collapsible__icon--level-one"
        borderBottom={false}
      />
      <input
        type="button"
        className="btn settings__go-btn"
        value="Generate"
        onClick={() => dispatch(generateProblems())}
      />
    </div>
  );
};

export default ProblemSettings;
