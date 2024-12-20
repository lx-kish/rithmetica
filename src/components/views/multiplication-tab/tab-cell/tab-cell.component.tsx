import { ReactElement } from "react";

import { useAppSelector, useAppDispatch } from "../../../../redux/hooks";
import {
  setInputValue,
  values,
} from "../../../../redux/multiplicationTable/multiplicationTabSlice";

import TabCellInput from "../tab-cell-input/tab-cell-input.component";
import TabCellScore from "../tab-cell-score/tab-cell-score.component";

interface IProps {
  line: number;
  col: number;
  value: number;
}

function TabCell({ line, col, value }: IProps): ReactElement {
  const dispatch = useAppDispatch();

  const stateValues = useAppSelector(values);

  const lineIndex = line - 2;
  const colIndex = col - 2;

  /**
   * Returns an Input className, all Inputs have the same,
   * except Input for 100
   * @return {String} className for Input field
   */
  function getInputClassName() {
    const isValid =
      value.toString() === stateValues[lineIndex][colIndex].toString();

    const elemtnClasses = `component__input${
      value < 100 ? "" : " component__input--hundreed"
    }${isValid ? "" : " component__input--invalid"}`;

    return elemtnClasses;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    dispatch(
      setInputValue({
        row: lineIndex,
        col: colIndex,
        value: e.currentTarget.value,
      })
    );
  }

  return (
    <div className="component">
      <TabCellInput
        className={getInputClassName()}
        answer={value}
        value={stateValues[lineIndex][colIndex]}
        handleChange={handleChange}
      />
      <TabCellScore tabLine={line} />
    </div>
  );
}

export default TabCell;
