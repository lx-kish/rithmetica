import { ReactElement } from "react";

import { useAppDispatch } from "../../../../redux/hooks";
import {
  insertSetting,
  deleteSetting,
} from "../../../../redux/arithmetic/arithmeticSlice";

interface IProps {
  index: number;
}

function SettingsControlButtons({ index }: IProps): ReactElement {
  const dispatch = useAppDispatch();

  return (
    <div className="settings__control settings__control--btns">
      <input
        type="button"
        value="+"
        className="btn settings__control-btn"
        onClick={() => dispatch(insertSetting(index))}
        title="add line"
      />
      <input
        type="button"
        value="&times;"
        className="btn settings__control-btn"
        onClick={() => dispatch(deleteSetting(index))}
        title="remove line"
      />
    </div>
  );
}

export default SettingsControlButtons;
