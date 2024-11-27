import {
  ChangeEvent,
  Dispatch,
  Fragment,
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
import Input from "../elements/input.component";

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
  children?: ReactElement | undefined | null;
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

function Body({
  children,
}: {
  children?: ReactElement | undefined | null;
}): ReactElement {
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
  children,
}: {
  children: (settings: ISettings, index: number) => ReactElement;
}) {
  const { settingsState } = useContext(SettingsContext);
  return (
    <div className="settings__settings-group">
      {settingsState?.map(children)}
    </div>
  );
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
  children?: ReactElement | ReactElement[] | undefined | null;
}) {
  return (
    <RowContext.Provider value={{ id, settings, typesFilter }}>
      {children && <div className="settings__row">{children}</div>}
    </RowContext.Provider>
  );
}

function Container({
  className,
  children,
}: {
  className: string;
  children?: ReactElement | ReactElement[] | undefined | null;
}): ReactElement {
  return <div className={className}>{children}</div>;
}

function Sections(): ReactElement {
  const { handleChangeSetting, types } = useContext(SettingsContext);
  const { id, settings } = useContext(RowContext);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
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
    <Fragment key={`${id}-${i}-section`}>
      <Input
        type="radio"
        id={`${id}-${section}`}
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
        htmlFor={`${id}-${section}`}
        title={section}
      >
        {sections[section as keyof typeof sections]}
      </label>
    </Fragment>
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

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
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
    <Fragment key={`${id}-${i}-operation`}>
      <Input
        type="radio"
        id={`${id}-${operation}`}
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
        htmlFor={`${id}-${operation}`}
        title={operation}
      >
        {operations[operation as keyof typeof operations]}
      </label>
    </Fragment>
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

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    handleChangeSetting(id, "missing", e.currentTarget.value);
  }

  const missings = Object.keys(arithmeticMissing).map((missing, i) => (
    <Fragment key={`${id}-${i}-missing`}>
      <Input
        type="radio"
        id={`${id}-${missing}`}
        name={`missing-${id}`}
        value={missing}
        className="settings__input settings__input--radio"
        onChange={handleChange}
        checked={
          settings?.missing === arithmeticMissing[missing as TArithmeticMissing]
        }
        disabled={disabled}
      />
      <label className="settings__radio-label" htmlFor={`${id}-${missing}`}>
        {missing}
      </label>
    </Fragment>
  ));

  return (
    <div className="settings__control settings__control--radio">{missings}</div>
  );
}

function Types(): ReactElement {
  const { types, handleChangeSetting } = useContext(SettingsContext);
  const { id, settings, typesFilter } = useContext(RowContext);

  const filteredTypes = types.filter(typesFilter);

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
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
        htmlFor={`${id}-settings-type`}
        className="settings__label settings__label--types"
      >
        Type:
      </label>
      <select
        name="type"
        id={`${id}-settings-type`}
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

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    handleChangeSetting(id, "quantity", Number(e.currentTarget.value));
  }

  return (
    <div className="settings__control">
      <label htmlFor={`${id}-quantity`} className="settings__label">
        Qty:
      </label>
      <Input
        id={`${id}-quantity`}
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
