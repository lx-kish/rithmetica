import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

import fractionsProblemsController from "../../components/math/fractions/fractions-problems-controller";

import { getStorage } from "../../utils/process-local-storage/process-local-storage";

import IFractionsSetting from "../../TS/interfaces/IFractionsSetting";
import IFractionsProblem from "../../TS/interfaces/IFractionsProblem";

import initialProblemSettings from "../../pages/fractions/initial-problem-settings";
import { numberOfColumns } from "../../TS/constatnts/constants";

export interface FractionsState {
  settings: IFractionsSetting[];
  columns: number;
  problems: IFractionsProblem[][];
}

const initialState: FractionsState = {
  settings:
    getStorage()?.getItem("fractions", true)?.settings ||
    initialProblemSettings,
  columns: numberOfColumns.one,
  problems:
    getStorage()?.getItem("fractions", true)?.problems ||
    fractionsProblemsController(initialProblemSettings),
};

const localStorageData = (
  state: FractionsState,
  settings: IFractionsSetting[]
) => {
  return {
    settings,
    columns: state.columns,
    problems: JSON.parse(JSON.stringify(state.problems)),
  };
};

const validProblemSettings = (state: FractionsState): IFractionsSetting[] => {
  return state.settings.filter(
    (setting: IFractionsSetting) =>
      setting.section && setting.operation && setting.type && setting.quantity
  );
};

export const fractionsSlice = createSlice({
  name: "fractions",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // 1) set input value
    setInputValue: (
      state,
      action: PayloadAction<{ index: number; name: string; value: string }>
    ) => {
      const { index, name, value } = action.payload;
      state.problems[index][state.problems[index].length - 1][name] =
        "" + value;

      const currentValidSettings = validProblemSettings(state);

      getStorage()?.setItem(
        "fractions",
        localStorageData(state, currentValidSettings)
      );
    },
    // 2) clear all locally saved problems and settings
    clearAllProblemsAndSettings: (state) => {
      getStorage()?.removeItem("fractions");
    },
    // 3) generate problems
    generateProblems: (state) => {
      const currentValidSettings = validProblemSettings(state);

      const problems = fractionsProblemsController(currentValidSettings) || [];

      state.problems = problems;

      if (problems.length)
        getStorage()?.setItem(
          "fractions",
          localStorageData(state, currentValidSettings)
        );

      if (!problems.length) getStorage()?.removeItem("fractions");
    },
    // 4) insert setting
    insertSetting: (state, action: PayloadAction<number>) => {
      const newProblemSettings: IFractionsSetting[] = [
        ...state.settings.slice(0, action.payload + 1),
        {
          section: "½",
          operation: "+",
          name: "",
          type: "",
          numberOfOperands: 2,
          quantity: 0,
        },
        ...state.settings.slice(action.payload + 1),
      ];

      state.settings = newProblemSettings;
    },
    // 5) delete setting
    deleteSetting: (state, action: PayloadAction<number>) => {
      const newProblemSettings = [
        ...state.settings.slice(0, action.payload),
        ...state.settings.slice(action.payload + 1),
      ];

      if (!newProblemSettings.length)
        newProblemSettings.push({
          section: "½",
          operation: "+",
          name: "",
          type: "",
          numberOfOperands: 2,
          quantity: 0,
        });

      state.settings = newProblemSettings;
    },
    // 6) set setting on change
    changeSetting: (
      state,
      action: PayloadAction<{ index: number; name: string; value: string }>
    ) => {
      const newProblemSettings = [...state.settings];
      const { index, name, value } = action.payload;

      const newSettings = Object.assign({}, newProblemSettings[index], {
        [name]: value,
      });

      newProblemSettings[index] = newSettings;

      state.settings = newProblemSettings;
    },
  },
});

export const {
  setInputValue,
  clearAllProblemsAndSettings,
  generateProblems,
  insertSetting,
  deleteSetting,
  changeSetting,
} = fractionsSlice.actions;

export const selectFractions = (state: RootState) => state.fractions;
export const settings = (state: RootState) => state.fractions.settings;
export const columns = (state: RootState) => state.fractions.columns;
export const problems = (state: RootState) => state.fractions.problems;

export default fractionsSlice;
