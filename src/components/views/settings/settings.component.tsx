import { ReactElement } from "react";

import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import {
  generateProblems as generateArithmeticProblems,
  changeSetting as changeArithmeticSetting,
  settings as arithmeticSettingsState,
} from "../../../redux/arithmetic/arithmeticSlice";
import {
  generateProblems as generateFractionsProblems,
  changeSetting as changeFractionsSetting,
  settings as fractionsSettingsState,
} from "../../../redux/fractions/fractionsSlice";

import Collapsible from "../../collapsible/collapsible.component";
import SettingsSection from "./settings-section.component";
import SettingsOperation from "./settings-operation.component";
import SettingsMissing from "./settings-missing.component";
import SettingsTypes from "./settings-types.component";
import SettingsControlButtons from "./settings-control-btns.component";

import { routes } from "../../../TS/constatnts/constants";
import { ISettings } from "../../../TS/interfaces/interfaces";

import handleKeyDown from "../../../utils/handle-key-down-event/handle-key-down-event";

interface IProps {
  pageName: string;
}

function ProblemSettings({ pageName }: IProps): ReactElement {
  const dispatch = useAppDispatch();

  const arithmeticSettings = useAppSelector(arithmeticSettingsState);
  const fractionsSettings = useAppSelector(fractionsSettingsState);

  let settingsList: ISettings[] = [];
  if (pageName === routes.arithmetic) settingsList = arithmeticSettings;
  if (pageName === routes.fractions) settingsList = fractionsSettings;

  function handleChangeSetting(
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    if (pageName === routes.arithmetic)
      dispatch(
        changeArithmeticSetting({
          index,
          name: "quantity",
          value: event.target.value,
        })
      );

    if (pageName === routes.fractions)
      dispatch(
        changeFractionsSetting({
          index,
          name: "quantity",
          value: event.target.value,
        })
      );
  }

  function handleGenerateProblems() {
    if (pageName === routes.arithmetic) dispatch(generateArithmeticProblems());
    if (pageName === routes.fractions) dispatch(generateFractionsProblems());
  }

  const collapsibleContent = (
    <div className="settings__settings-group">
      {settingsList.map((setting, index) => (
        <div className="settings__row" key={index}>
          <div className="settings__col settings__col--controls">
            {pageName === routes.fractions && (
              <SettingsSection
                index={index}
                setting={setting}
                pageName={pageName}
              />
            )}

            <SettingsOperation
              index={index}
              setting={setting}
              pageName={pageName}
            />

            {pageName === routes.arithmetic && (
              <SettingsMissing
                index={index}
                setting={setting}
                pageName={pageName}
              />
            )}

            <SettingsTypes
              index={index}
              setting={setting}
              pageName={pageName}
            />
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
                onChange={(event) => handleChangeSetting(event, index)}
                onKeyDown={(event) => handleKeyDown(event)}
              />
            </div>
            <SettingsControlButtons index={index} pageName={pageName} />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="settings">
      <Collapsible
        title="Settings"
        id="settings"
        collapsibleClassName="collapsible collapsible__border-bottom"
        titleClassName="collapsible__title collapsible__title--level-one"
        iconBoxClassName="collapsible__icon-box collapsible__icon-box--level-one"
        iconClassName="collapsible__icon--level-one"
        borderBottom={false}
      >
        {collapsibleContent}
      </Collapsible>
      <input
        type="button"
        className="btn settings__go-btn"
        value="Generate"
        onClick={handleGenerateProblems}
      />
    </div>
  );
}

export default ProblemSettings;
