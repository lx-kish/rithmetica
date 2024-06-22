import { ReactElement } from "react";
import { useAppDispatch } from "../../../redux/hooks";

import {
  insertSetting as insertArithmetic,
  deleteSetting as deleteArithmetic,
} from "../../../redux/arithmetic/arithmeticSlice";
import {
  insertSetting as insertFractions,
  deleteSetting as deleteFractions,
} from "../../../redux/fractions/fractionsSlice";

import { routes } from "../../../TS/constatnts/constants";

interface IProps {
  index: number;
  pageName: string;
}

function SettingsControlButtons({ index, pageName }: IProps): ReactElement {
  const dispatch = useAppDispatch();

  function handleInsert() {
    if (pageName === routes.arithmetic) dispatch(insertArithmetic(index));
    if (pageName === routes.fractions) dispatch(insertFractions(index));
  }

  function handleDelete() {
    if (pageName === routes.arithmetic) dispatch(deleteArithmetic(index));
    if (pageName === routes.fractions) dispatch(deleteFractions(index));
  }

  return (
    <div className="settings__control settings__control--btns">
      <input
        type="button"
        value="+"
        className="btn settings__control-btn"
        onClick={handleInsert}
        title="add line"
      />
      <input
        type="button"
        value="&times;"
        className="btn settings__control-btn"
        onClick={handleDelete}
        title="remove line"
      />
    </div>
  );
}

export default SettingsControlButtons;
