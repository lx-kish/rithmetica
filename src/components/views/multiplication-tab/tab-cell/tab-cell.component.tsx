import React, { ReactElement } from "react";

import { useAppSelector, useAppDispatch } from "../../../../redux/hooks";
import {
  setInputValue,
  values,
} from "../../../../redux/multiplicationTable/multiplicationTabSlice";

import IconCircle from "../../../icons-svg/icon-circle.component";

import content from "../../../../table.content";
import Input from "../../input/input.component";

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
   * Rounds half a number to a bigger whole digit
   * @return {Number} amount of dots on the top line
   */
  function getRoundedHalfANumber(aNumber: number): number {
    return Math.round(aNumber / 2);
  }

  /**
   * Split the amount of dots into 2 lines if amount bigger than 2
   * @return {Number} amount of dots on the top line
   */
  function getTopLineDotsAmount() {
    return line > 2 ? getRoundedHalfANumber(line) : line;
  }

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
      <div className="component__input-box">
        <Input
          pattern="[0-9]*"
          step="1"
          result={value.toString()}
          className={getInputClassName()}
          handleChange={handleChange}
          value={stateValues[lineIndex][colIndex].toString()}
        />
      </div>
      <div className="component__score">
        <div className="component__score-row">
          {[...Array(getTopLineDotsAmount())].map((x, i) => (
            <IconCircle
              key={i}
              className={`component__icon ${content.styles[i + 1]}`}
            />
          ))}
        </div>
        <div className="component__score-row">
          {[...Array(line - getTopLineDotsAmount())].map((x, i) => (
            <IconCircle
              key={i + getRoundedHalfANumber(line)}
              className={`component__icon ${
                content.styles[i + 1 + getRoundedHalfANumber(line)]
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TabCell;
