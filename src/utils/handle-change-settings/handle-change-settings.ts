import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

import { store } from "../../redux/store";
import { changeSetting as changeArithmeticSetting } from "../../redux/arithmetic/arithmeticSlice";
import { changeSetting as changeFractionsSetting } from "../../redux/fractions/fractionsSlice";

import ProblemTypes from "../../components/math/problem-types";
import { ISettings, IProblemType } from "../../TS/interfaces/interfaces";
import { arithmeticMissing, routes } from "../../TS/constatnts/constants";

/**
 * Handles change event,
 * decline input of the key if invalid
 * @param  {number} index an index of the settings array
 * @param  {ISettings} previousStateSetting current settings state
 *
 * @return {void}
 */
const handleChangeSettings =
  (index: number, currentSetting: ISettings, pageName: string) =>
  (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ): void => {
    let changeSetting!: ActionCreatorWithPayload<{
      index: number;
      name: string;
      value: string | number;
    }>;

    if (pageName === routes.arithmetic) changeSetting = changeArithmeticSetting;
    if (pageName === routes.fractions) changeSetting = changeFractionsSetting;

    // 1) Set variables and values
    let currentTaskType: IProblemType | undefined;

    const types = ProblemTypes.filter((type) => type.page === pageName);

    // 1) Define the type of the field fired the event
    let fieldType = "";
    if (e.target.type === "radio" && e.target.name.indexOf("section") > -1)
      fieldType = "section";
    if (e.target.type === "radio" && e.target.name.indexOf("operation") > -1)
      fieldType = "operation";
    if (e.target.type === "radio" && e.target.name.indexOf("missing") > -1)
      fieldType = "missing";
    if (e.target.name === "type") fieldType = "problemType";

    // 2) Apply conditions for each type of field
    switch (fieldType) {
      case "section":
        currentTaskType = types
          .filter((type) => type.section === e.target.value)
          .find((type) => type.name === currentSetting.name);

        store.dispatch(
          changeSetting({
            index: index,
            name: "section",
            value: e.target.value,
          })
        );

        store.dispatch(
          changeSetting({
            index: index,
            name: "colPerRow",
            value: currentTaskType?.colPerRow || 1,
          })
        );
        if (!currentTaskType) {
          store.dispatch(
            changeSetting({ index: index, name: "name", value: "" })
          );
          store.dispatch(
            changeSetting({ index: index, name: "colPerRow", value: 1 })
          );
        }
        break;

      case "operation":
        currentTaskType = types
          .filter((type) => type.operation === e.target.value)
          .find((type) => type.name === currentSetting.name);

        store.dispatch(
          changeSetting({
            index: index,
            name: "operation",
            value: e.target.value,
          })
        );

        store.dispatch(
          changeSetting({
            index: index,
            name: "colPerRow",
            value: currentTaskType?.colPerRow || 2,
          })
        );
        if (!currentTaskType) {
          store.dispatch(
            changeSetting({ index: index, name: "name", value: "" })
          );
          store.dispatch(
            changeSetting({ index: index, name: "type", value: "" })
          );
        }

        if (currentTaskType?.missing && !currentSetting.missing) {
          store.dispatch(
            changeSetting({
              index: index,
              name: "missing",
              value: currentTaskType.missing,
            })
          );
        }
        break;

      case "missing":
        store.dispatch(
          changeSetting({
            index: index,
            name: "missing",
            value: e.target.value,
          })
        );
        break;

      case "problemType":
        currentTaskType = types
          .filter((type) => type.operation === currentSetting.operation)
          .find((type) => type.name === e.target.value);

        const name = e.target.value === "-- select --" ? "" : e.target.value;
        store.dispatch(
          changeSetting({ index: index, name: "name", value: name })
        );
        store.dispatch(
          changeSetting({
            index: index,
            name: "colPerRow",
            value: currentTaskType?.colPerRow || 2,
          })
        );

        if (currentTaskType?.missing === arithmeticMissing.result) {
          store.dispatch(
            changeSetting({
              index: index,
              name: "missing",
              value: arithmeticMissing.result,
            })
          );
        }
        break;

      default:
        break;
    }
  };

export default handleChangeSettings;
