import { store } from "../../redux/store";
import { changeSetting } from "../../redux/fractions/fractionsSlice";

import types from "../../components/views/fractions/types";

import { IProblemType, ISettings } from "../../TS/interfaces/interfaces";

/**
 * Handles key-down event, runs key validation,
 * decline input of the key if invalid
 * @param  {number} index an index of the settings array
 * @param  {event} e a key down event
 *
 * @return {void}
 */
const handleChangeFractionsSettings =
  (index: number, previousStateSetting: ISettings[]) =>
  (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ): void => {
    // 1) Set variables and values
    let currentTaskType: IProblemType | undefined;

    // 1) Define the type of the field fired the event
    let fieldType = "";
    if (e.target.type === "radio" && e.target.name.indexOf("section") > -1)
      fieldType = "section";
    if (e.target.type === "radio" && e.target.name.indexOf("operation") > -1)
      fieldType = "operation";
    if (e.target.name === "type") fieldType = "problemType";

    // 2) Apply conditions for each type of field
    switch (fieldType) {
      case "section":
        currentTaskType = types
          .filter((type) => type.section === e.target.value)
          .find((type) => type.name === previousStateSetting[index].name);

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
        }
        break;

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
        }
        break;

      case "problemType":
        currentTaskType = types
          .filter((type) => {
            return (
              type.operation === previousStateSetting[index].operation &&
              type.section === previousStateSetting[index].section
            );
          })
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

        break;

      default:
        break;
    }
  };

export default handleChangeFractionsSettings;
