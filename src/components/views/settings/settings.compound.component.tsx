import React, {
  Dispatch,
  ReactElement,
  createContext,
  useContext,
} from "react";

import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { AppDispatch, RootState } from "../../../redux/store";

import Collapsible from "../../collapsible/collapsible.component";

import {
  arithmeticMissing,
  operations,
  sections,
} from "../../../TS/constatnts/constants";
import { IProblemType, ISettings } from "../../../TS/interfaces/interfaces";
import { TArithmeticMissing } from "../../../TS/types/types";

import handleKeyDown from "../../../utils/handle-key-down-event/handle-key-down-event";
import {
  Action,
  PayloadAction,
  UnknownAction,
  ActionCreatorWithPayload,
} from "@reduxjs/toolkit";

interface ISettingsContext {
  types: IProblemType[];
  settings: ISettings[];
  dispatch: Dispatch<Action>;
  handleChangeSetting: (
    index: number,
    name: string,
    value: number | string
  ) => void;
  handleInsertSetting: (
    index: number
  ) => ActionCreatorWithPayload<number, string>;
  handleDeleteSetting: (index: number) => PayloadAction<number>;
  handleGenerate: () => AppDispatch;
}

const SettingsContext = createContext({} as ISettingsContext);

const RowContext = createContext(
  {} as {
    index: number;
    setting: ISettings;
    typesFilter: (type: IProblemType) => boolean;
  }
);

function Settings({
  types,
  generateProblems,
  insertSetting,
  deleteSetting,
  changeSetting,
  settingsState,
  children,
}: {
  types: IProblemType[];
  generateProblems: () => UnknownAction;
  insertSetting: ActionCreatorWithPayload<number, string>;
  deleteSetting: (index: number) => PayloadAction<number>;
  changeSetting: ({
    index,
    name,
    value,
  }: {
    index: number;
    name: string;
    value: string | number;
  }) => PayloadAction<{
    index: number;
    name: string;
    value: number | string;
  }>;
  settingsState: (state: RootState) => ISettings[];
  children: ReactElement;
}) {
  const dispatch = useAppDispatch();

  const settings = useAppSelector(settingsState);

  function handleChangeSetting(
    index: number,
    name: string,
    value: string | number
  ) {
    dispatch(
      changeSetting({
        index,
        name,
        value,
      })
    );
  }

  function handleGenerate(): any {
    dispatch(generateProblems());
  }

  function handleInsertSetting(index: number): any {
    dispatch(insertSetting(index));
  }

  function handleDeleteSetting(index: number): any {
    dispatch(deleteSetting(index));
  }

  return (
    <SettingsContext.Provider
      value={{
        types,
        settings,
        dispatch,
        handleChangeSetting,
        handleInsertSetting,
        handleDeleteSetting,
        handleGenerate,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

function Body({ children }: { children: ReactElement }): ReactElement {
  const { handleGenerate } = useContext(SettingsContext);

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
        {children}
      </Collapsible>
      <input
        type="button"
        className="btn settings__go-btn"
        value="Generate"
        onClick={handleGenerate}
      />
    </div>
  );
}

function Group({
  data,
  render,
}: {
  data: ISettings[];
  render: (setting: ISettings, index: number) => ReactElement;
}) {
  return <div className="settings__settings-group">{data?.map(render)}</div>;
}

function Row({
  index,
  setting,
  typesFilter,
  children,
}: {
  index: number;
  setting: ISettings;
  typesFilter: (type: IProblemType) => boolean;
  children: ReactElement | ReactElement[];
}) {
  return (
    <RowContext.Provider value={{ index, setting, typesFilter }}>
      <div className="settings__row">{children}</div>
    </RowContext.Provider>
  );
}

function Container({
  className,
  children,
}: {
  className: string;
  children: ReactElement | ReactElement[];
}): ReactElement {
  return <div className={className}>{children}</div>;
}

function Sections(): ReactElement {
  const { handleChangeSetting, types } = useContext(SettingsContext);
  const { index, setting } = useContext(RowContext);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const currentTaskType = types
      .filter((type) => type.section === e.currentTarget.value)
      .find((type) => type.name === setting.name);

    handleChangeSetting(index, "section", e.currentTarget.value);

    handleChangeSetting(index, "colPerRow", currentTaskType?.colPerRow || 1);

    if (!currentTaskType) {
      handleChangeSetting(index, "name", "");
      handleChangeSetting(index, "colPerRow", 1);
    }
  }

  const sectionElements = Object.keys(sections).map((section, i) => (
    <React.Fragment key={`section-${index}-${i}`}>
      <input
        type="radio"
        id={`${section}-${index}`}
        name={`section-${index}`}
        value={sections[section as keyof typeof sections]}
        className="settings__input settings__input--radio"
        onChange={handleChange}
        checked={
          setting?.section === sections[section as keyof typeof sections]
        }
      />
      <label
        className="settings__radio-label settings__radio-label--section"
        htmlFor={`${section}-${index}`}
        title={section}
      >
        {sections[section as keyof typeof sections]}
      </label>
    </React.Fragment>
  ));

  return (
    <div className="settings__control settings__control--radio settings__control--operation">
      {sectionElements}
    </div>
  );
}

function Operations(): ReactElement {
  const { handleChangeSetting, types } = useContext(SettingsContext);
  const { index, setting } = useContext(RowContext);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const currentTaskType = types
      .filter((type) => type.operation === e.currentTarget.value)
      .find((type) => type.name === setting.name);

    handleChangeSetting(index, "operation", e.currentTarget.value);

    handleChangeSetting(index, "colPerRow", currentTaskType?.colPerRow || 2);

    if (!currentTaskType) {
      handleChangeSetting(index, "name", "");
      handleChangeSetting(index, "type", "");
    }

    if (currentTaskType?.missing && !setting.missing) {
      handleChangeSetting(index, "missing", currentTaskType.missing);
    }
  }

  const operationElements = Object.keys(operations).map((operation, i) => (
    <React.Fragment key={`operation-${index}-${i}`}>
      <input
        type="radio"
        id={`${operation}-${index}`}
        name={`operation-${index}`}
        value={operations[operation as keyof typeof operations]}
        className="settings__input settings__input--radio"
        onChange={handleChange}
        checked={
          setting?.operation ===
          operations[operation as keyof typeof operations]
        }
        disabled={operation === "½" || operation === "%"}
      />
      <label
        className="settings__radio-label settings__radio-label--operation"
        htmlFor={`${operation}-${index}`}
        title={operation}
      >
        {operations[operation as keyof typeof operations]}
      </label>
    </React.Fragment>
  ));

  return (
    <div className="settings__control settings__control--radio settings__control--operation">
      {operationElements}
    </div>
  );
}

function Missing(): ReactElement {
  const { types, handleChangeSetting } = useContext(SettingsContext);
  const { index, setting } = useContext(RowContext);

  const disabled =
    types.find(
      (type) =>
        setting?.name === type.name && setting?.operation === type.operation
    )?.missing === arithmeticMissing.result;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    handleChangeSetting(index, "missing", e.currentTarget.value);
  }

  const missings = Object.keys(arithmeticMissing).map((missing, i) => (
    <React.Fragment key={`missing-${index}-${i}`}>
      <input
        type="radio"
        id={`${missing}-${index}`}
        name={`missing-${index}`}
        value={missing}
        className="settings__input settings__input--radio"
        onChange={handleChange}
        checked={
          setting?.missing === arithmeticMissing[missing as TArithmeticMissing]
        }
        disabled={disabled}
      />
      <label className="settings__radio-label" htmlFor={`${missing}-${index}`}>
        {missing}
      </label>
    </React.Fragment>
  ));

  return (
    <div className="settings__control settings__control--radio">{missings}</div>
  );
}

function Types(): ReactElement {
  const { types, handleChangeSetting } = useContext(SettingsContext);
  const { index, setting, typesFilter } = useContext(RowContext);

  const filteredTypes = types.filter(typesFilter);

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const currentTaskType = filteredTypes
      .filter((type) => type.operation === setting.operation)
      .find((type) => type.name === e.currentTarget.value);

    const name =
      e.currentTarget.value === "-- select --" ? "" : e.currentTarget.value;
    handleChangeSetting(index, "name", name);
    handleChangeSetting(index, "colPerRow", currentTaskType?.colPerRow || 2);

    if (currentTaskType?.missing === arithmeticMissing.result) {
      handleChangeSetting(index, "missing", arithmeticMissing.result);
    }
  }

  return (
    <div className="settings__control settings__control--types">
      <label
        htmlFor="settings-type"
        className="settings__label settings__label--types"
      >
        Type:
      </label>
      <select
        name="type"
        id="settings-type"
        className="settings__select"
        value={setting?.name}
        onChange={handleChange}
      >
        <option>-- select --</option>
        {filteredTypes.map((type, i) => (
          <option key={i} value={type.name} className="settings__option">
            {type.name}
          </option>
        ))}
      </select>
    </div>
  );
}

function Quantity(): ReactElement {
  const { handleChangeSetting } = useContext(SettingsContext);
  const { index, setting } = useContext(RowContext);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    handleChangeSetting(index, "quantity", e.currentTarget.value);
  }

  return (
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
        value={setting?.quantity}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

function ControlBtns(): ReactElement {
  const { handleInsertSetting, handleDeleteSetting } =
    useContext(SettingsContext);
  const { index } = useContext(RowContext);

  function handleInsert() {
    handleInsertSetting(index);
  }

  function handleDelete() {
    handleDeleteSetting(index);
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

Settings.Body = Body;
Settings.Group = Group;
Settings.Row = Row;
Settings.Container = Container;
Settings.Sections = Sections;
Settings.Operations = Operations;
Settings.Missing = Missing;
Settings.Types = Types;
Settings.Quantity = Quantity;
Settings.ControlBtns = ControlBtns;

export default Settings;
