import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

import problemsController from "../../components/math/problems-processing/problems-controller";

import { getStorage } from "../../utils/process-local-storage/process-local-storage";

import { ISettings, IProblemsState } from "../../TS/interfaces/interfaces";

import {
  DEFAULT_FRACTIONS_ROUTE,
  DEFAULT_FRACTIONS_SECTION,
  DEFAULT_NUMBER_OF_OPERANDS,
  DEFAULT_OPERATION,
  defaultFractionsProblemSettings,
} from "../default-problem-settings";
import { columnsPerRow } from "../../TS/constatnts/constants";

const SLICE_NAME = "fractions";

const initialState: IProblemsState = {
  settings:
    getStorage()?.getItem(SLICE_NAME, true)?.settings ||
    defaultFractionsProblemSettings,
  columns: columnsPerRow.one,
  problems:
    getStorage()?.getItem(SLICE_NAME, true)?.problems ||
    problemsController(defaultFractionsProblemSettings),
};

function localStorageData(state: IProblemsState, settings: ISettings[]) {
  return {
    settings,
    columns: state.columns,
    problems: JSON.parse(JSON.stringify(state.problems)),
  };
}

function validProblemSettings(state: IProblemsState): ISettings[] {
  const settings = state.settings.filter(
    (setting: ISettings) =>
      setting.section && setting.operation && setting.quantity
  );
  return settings;
}

export const fractionsSlice = createSlice({
  name: SLICE_NAME,
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // 1) set input value
    setInputValue: (
      state,
      action: PayloadAction<{ index: number; name: string; value: string }>
    ) => {
      const { index, name, value } = action.payload;
      state.problems[index][state.problems[index].length - 1][name] = value;

      const currentValidSettings = validProblemSettings(state);

      getStorage()?.setItem(
        SLICE_NAME,
        localStorageData(state, currentValidSettings)
      );
    },
    // 2) clear all locally saved problems and settings
    clearAllProblemsAndSettings: (state) => {
      getStorage()?.removeItem(SLICE_NAME);
    },
    // 3) generate problems
    generateProblems: (state) => {
      const currentValidSettings = validProblemSettings(state);

      const problems = problemsController(currentValidSettings) || [];

      state.problems = problems;

      if (problems.length)
        getStorage()?.setItem(
          SLICE_NAME,
          localStorageData(state, currentValidSettings)
        );

      if (!problems.length) getStorage()?.removeItem(SLICE_NAME);
    },
    // 4) insert setting
    insertSetting: (state, action: PayloadAction<number>) => {
      const newProblemSettings: ISettings[] = [
        ...state.settings.slice(0, action.payload + 1),
        {
          page: DEFAULT_FRACTIONS_ROUTE,
          section: DEFAULT_FRACTIONS_SECTION,
          operation: DEFAULT_OPERATION,
          name: "",
          numberOfOperands: DEFAULT_NUMBER_OF_OPERANDS,
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
          page: DEFAULT_FRACTIONS_ROUTE,
          section: DEFAULT_FRACTIONS_SECTION,
          operation: DEFAULT_OPERATION,
          name: "",
          numberOfOperands: DEFAULT_NUMBER_OF_OPERANDS,
          quantity: 0,
        });

      state.settings = newProblemSettings;
    },
    // 6) set setting on change
    changeSetting: (
      state,
      action: PayloadAction<{
        index: number;
        name: string;
        value: string | number;
      }>
    ) => {
      const newProblemSettings = JSON.parse(JSON.stringify(state.settings));

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
