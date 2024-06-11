import React, { ReactElement } from "react";
// import { useLocation } from "react-router-dom";

import { useAppSelector } from "../../../../redux/hooks";
import { settings } from "../../../../redux/arithmetic/arithmeticSlice";

import operations from "../../../math/arithmetic-operands-generators/operations";
import handleChangeArithmeticalSettings from "../../../../utils/handle-change-event/handle-change-arithmetical-settings-event";

import { ISettings } from "../../../../TS/interfaces/interfaces";
// import ProblemTypes from "../../../math/problem-types";

interface IProps {
  index: number;
  setting: ISettings;
}

function SettingsOperation({ index, setting }: IProps): ReactElement {
  const stateSettings = useAppSelector(settings);
  // TODO - consider to use operation name in ProblemTypes
  // const location = useLocation();

  // const operations1 = [
  //   ...new Set(
  //     ProblemTypes.filter((type) => type.page === location.pathname).map(
  //       (type) => type.operation
  //     )
  //   ),
  // ];
  // console.log("SettingsOperation ===> operations ===> ", operations1);

  const getOperations = () => {
    return operations.map((operation, i) => (
      <React.Fragment key={`operation-${index}-${i}`}>
        <input
          type="radio"
          id={`${operation.name}-${index}`}
          name={`operation-${index}`}
          value={operation.symbol}
          className="settings__input settings__input--radio"
          onChange={handleChangeArithmeticalSettings(index, stateSettings)}
          checked={stateSettings[index].operation === operation.symbol}
          disabled={operation.symbol === "½" || operation.symbol === "%"}
        />
        <label
          className="settings__radio-label settings__radio-label--operation"
          htmlFor={`${operation.name}-${index}`}
          title={operation.name}
        >
          {operation.symbol}
        </label>
      </React.Fragment>
    ));
  };
  return (
    <div className="settings__control settings__control--radio settings__control--operation">
      {getOperations()}
    </div>
  );
}

export default SettingsOperation;
