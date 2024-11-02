import React, {
  Dispatch,
  ReactElement,
  createContext,
  useContext,
  useState,
} from "react";
import {
  Action,
  PayloadAction,
  ActionCreatorWithPayload,
} from "@reduxjs/toolkit";

import { useAppDispatch } from "../../../redux/hooks";
import { AppDispatch } from "../../../redux/store";

import Collapsible from "../collapsible/collapsible.component";

import {
  arithmeticMissing,
  operations,
  sections,
} from "../../../TS/constants/constants";
import { IProblemType, ISettings } from "../../../TS/interfaces/interfaces";
import { TArithmeticMissing } from "../../../TS/types/types";

import handleKeyDown from "../../../utils/handle-key-down-event/handle-key-down-event";
import Btn from "../elements/btn.component";

interface ISettingsContext {
  types: IProblemType[];
  settingsState: ISettings[];
  dispatch: Dispatch<Action>;
  handleChangeSetting: (
    id: string,
    name: string,
    value: number | string
  ) => void;
  handleInsertSetting: (id: string) => ActionCreatorWithPayload<number, string>;
  handleDeleteSetting: (id: string) => PayloadAction<number>;
  handleGenerate: () => AppDispatch;
}

const SettingsContext = createContext({} as ISettingsContext);

const RowContext = createContext(
  {} as {
    id: string;
    settings: ISettings;
    typesFilter: (type: IProblemType) => boolean;
  }
);

function Settings({
  route,
  types,
  generateProblems,
  insertSetting,
  deleteSetting,
  changeSetting,
  settingsState,
  children,
}: {
  route: string;
  types: IProblemType[];
  generateProblems: ActionCreatorWithPayload<
    { route: string },
    "problems/generateProblems"
  >;
  insertSetting: ActionCreatorWithPayload<
    { id: string; route: string },
    "problems/insertSetting"
  >;
  deleteSetting: ActionCreatorWithPayload<
    { id: string; route: string },
    "problems/deleteSetting"
  >;
  changeSetting: ActionCreatorWithPayload<
    { id: string; name: string; value: string | number },
    "problems/changeSetting"
  >;
  settingsState: ISettings[];
  children: ReactElement;
}) {
  const dispatch = useAppDispatch();

  function handleChangeSetting(
    id: string,
    name: string,
    value: string | number
  ) {
    dispatch(
      changeSetting({
        id,
        name,
        value,
      })
    );
  }

  function handleGenerate(): any {
    dispatch(
      generateProblems({
        route,
      })
    );
  }

  function handleInsertSetting(id: string): any {
    dispatch(
      insertSetting({
        id,
        route,
      })
    );
  }

  function handleDeleteSetting(id: string): any {
    dispatch(
      deleteSetting({
        id,
        route,
      })
    );
  }

  return (
    <SettingsContext.Provider
      value={{
        types,
        settingsState,
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
      <Collapsible title="Settings" level="one" borderBottom={true}>
        {children}
      </Collapsible>
      <Btn className="btn settings__go-btn" onClick={handleGenerate}>
        Generate
      </Btn>
    </div>
  );
}

function Group({
  data,
  render,
}: {
  data: ISettings[];

  render: (settings: ISettings, index: number) => ReactElement;
}) {
  return <div className="settings__settings-group">{data?.map(render)}</div>;
}

function Row({
  id,
  settings,
  typesFilter,
  children,
}: {
  id: string;
  settings: ISettings;
  typesFilter: (type: IProblemType) => boolean;
  children: ReactElement | ReactElement[];
}) {
  return (
    <RowContext.Provider value={{ id, settings, typesFilter }}>
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
  const { id, settings } = useContext(RowContext);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const currentTaskType = types
      .filter((type) => type.section === e.currentTarget.value)
      .find((type) => type.name === settings.name);

    handleChangeSetting(id, "section", e.currentTarget.value);

    handleChangeSetting(id, "colPerRow", currentTaskType?.colPerRow || 1);

    if (!currentTaskType) {
      handleChangeSetting(id, "name", "");
      handleChangeSetting(id, "colPerRow", 1);
    }
  }

  const sectionElements = Object.keys(sections).map((section, i) => (
    <React.Fragment key={`section-${id}-${i}`}>
      <input
        type="radio"
        id={`${section}-${id}`}
        name={`section-${id}`}
        value={sections[section as keyof typeof sections]}
        className="settings__input settings__input--radio"
        onChange={handleChange}
        checked={
          settings?.section === sections[section as keyof typeof sections]
        }
      />
      <label
        className="settings__radio-label settings__radio-label--section"
        htmlFor={`${section}-${id}`}
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
  const { id, settings } = useContext(RowContext);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const currentTaskType = types
      .filter((type) => type.operation === e.currentTarget.value)
      .find((type) => type.name === settings.name);

    handleChangeSetting(id, "operation", e.currentTarget.value);

    handleChangeSetting(id, "colPerRow", currentTaskType?.colPerRow || 2);

    if (!currentTaskType) {
      handleChangeSetting(id, "name", "");
      handleChangeSetting(id, "type", "");
    }

    if (currentTaskType?.missing && !settings.missing) {
      handleChangeSetting(id, "missing", currentTaskType.missing);
    }
  }

  const operationElements = Object.keys(operations).map((operation, i) => (
    <React.Fragment key={`operation-${id}-${i}`}>
      <input
        type="radio"
        id={`${operation}-${id}`}
        name={`operation-${id}`}
        value={operations[operation as keyof typeof operations]}
        className="settings__input settings__input--radio"
        onChange={handleChange}
        checked={
          settings?.operation ===
          operations[operation as keyof typeof operations]
        }
        disabled={operation === "½" || operation === "%"}
      />
      <label
        className="settings__radio-label settings__radio-label--operation"
        htmlFor={`${operation}-${id}`}
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
  const { id, settings } = useContext(RowContext);

  const disabled =
    types.find(
      (type) =>
        settings?.name === type.name && settings?.operation === type.operation
    )?.missing === arithmeticMissing.result;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    handleChangeSetting(id, "missing", e.currentTarget.value);
  }

  const missings = Object.keys(arithmeticMissing).map((missing, i) => (
    <React.Fragment key={`missing-${id}-${i}`}>
      <input
        type="radio"
        id={`${missing}-${id}`}
        name={`missing-${id}`}
        value={missing}
        className="settings__input settings__input--radio"
        onChange={handleChange}
        checked={
          settings?.missing === arithmeticMissing[missing as TArithmeticMissing]
        }
        disabled={disabled}
      />
      <label className="settings__radio-label" htmlFor={`${missing}-${id}`}>
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
  const { id, settings, typesFilter } = useContext(RowContext);

  const filteredTypes = types.filter(typesFilter);

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const currentTaskType = filteredTypes
      .filter((type) => type.operation === settings.operation)
      .find((type) => type.name === e.currentTarget.value);

    const name =
      e.currentTarget.value === "-- select --" ? "" : e.currentTarget.value;
    handleChangeSetting(id, "name", name);
    handleChangeSetting(id, "colPerRow", currentTaskType?.colPerRow || 2);

    if (currentTaskType?.missing === arithmeticMissing.result) {
      handleChangeSetting(id, "missing", arithmeticMissing.result);
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
        value={settings?.name}
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
  const { id, settings } = useContext(RowContext);

  const [value, setValue] = useState(settings?.quantity.toString()); // to not loose focus on changing input field, change redux value onBlur only

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    handleChangeSetting(id, "quantity", Number(e.currentTarget.value));
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
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        onBlur={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

function ControlBtns(): ReactElement {
  const { handleInsertSetting, handleDeleteSetting } =
    useContext(SettingsContext);
  const { id } = useContext(RowContext);

  function handleInsert() {
    handleInsertSetting(id);
  }

  function handleDelete() {
    handleDeleteSetting(id);
  }

  return (
    <div className="settings__control settings__control--btns">
      <Btn
        className="btn settings__control-btn"
        onClick={handleInsert}
        title="add line"
      >
        +
      </Btn>

      <Btn
        className="btn settings__control-btn"
        onClick={handleDelete}
        title="remove line"
      >
        &times;
      </Btn>
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
