import { store } from "../../redux/store";
import { changeSetting } from "../../redux/arithmetic/arithmeticSlice";

import ProblemTypes from "../../components/math/problem-types";

import { ISettings, IProblemType } from "../../TS/interfaces/interfaces";
import { arithmeticMissing, routes } from "../../TS/constatnts/constants";

/**
 * Handles key-down event, runs key validation,
 * decline input of the key if invalid
 * @param  {number} index an index of the settings array
 * @param  {event} e a key down event
 *
 * @return {void}
 */
const handleChangeArithmeticalSettings =
  (index: number, previousStateSetting: ISettings[]) =>
  (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ): void => {
    // 1) Set variables and values
    let currentTaskType: IProblemType | undefined;

    const types = ProblemTypes.filter(
      (type) => type.page === routes.arithmetic
    );
    // 1) Define the type of the field fired the event
    let fieldType = "";
    if (e.target.type === "radio" && e.target.name.indexOf("operation") > -1)
      fieldType = "operation";
    if (e.target.type === "radio" && e.target.name.indexOf("missing") > -1)
      fieldType = "missing";
    if (e.target.name === "type") fieldType = "problemType";

    // 2) Apply conditions for each type of field
    switch (fieldType) {
      case "operation":
        currentTaskType = types
          .filter((type) => type.operation === e.target.value)
          .find((type) => type.name === previousStateSetting[index].name);

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
            name: "type",
            value: currentTaskType?.type || "",
          })
        );
        if (!currentTaskType) {
          store.dispatch(
            changeSetting({ index: index, name: "name", value: "" })
          );
          store.dispatch(
            changeSetting({ index: index, name: "type", value: "" })
          );
          store.dispatch(
            changeSetting({
              index: index,
              name: "missing",
              value: arithmeticMissing.random,
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
          .filter(
            (type) => type.operation === previousStateSetting[index].operation
          )
          .find((type) => type.name === e.target.value);

        const name = e.target.value === "-- select --" ? "" : e.target.value;
        store.dispatch(
          changeSetting({ index: index, name: "name", value: name })
        );
        store.dispatch(
          changeSetting({
            index: index,
            name: "type",
            value: currentTaskType?.type || "",
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

export default handleChangeArithmeticalSettings;
