import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

import problemsController from "../../components/math/problems-processing/problems-controller";

import { getStorage } from "../../utils/process-local-storage/process-local-storage";

import { ISettings, IProblemsState } from "../../TS/interfaces/interfaces";

import {
  DEFAULT_ARITHMETIC_ROUTE,
  DEFAULT_MISSING,
  DEFAULT_NUMBER_OF_OPERANDS,
  DEFAULT_OPERATION,
  defaultArithmeticProblemSettings,
} from "../default-problem-settings";
import { columnsPerRow } from "../../TS/constatnts/constants";

const SLICE_NAME = "arithmetic";

const initialState: IProblemsState = {
  settings:
    getStorage()?.getItem(SLICE_NAME, true)?.settings ||
    defaultArithmeticProblemSettings,
  columns: columnsPerRow.two,
  problems:
    getStorage()?.getItem(SLICE_NAME, true)?.problems ||
    problemsController(defaultArithmeticProblemSettings),
};

function localStorageData(state: IProblemsState, settings: ISettings[]) {
  return {
    settings,
    columns: state.columns,
    problems: JSON.parse(JSON.stringify(state.problems)),
  };
}

function validProblemSettings(state: IProblemsState): ISettings[] {
  return state.settings.filter(
    (setting: ISettings) =>
      setting.operation && setting.missing && setting.quantity
  );
}

export const arithmeticSlice = createSlice({
  name: SLICE_NAME,
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // 1) set input value
    setInputValue(
      state,
      action: PayloadAction<{ index: number; value: string }>
    ) {
      const { index, value } = action.payload;
      state.problems[index][state.problems[index].length - 1].value =
        "" + value;

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
    generateProblems(state) {
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
    insertSetting(state, action: PayloadAction<number>) {
      const newProblemSettings: ISettings[] = [
        ...state.settings.slice(0, action.payload + 1),
        {
          page: DEFAULT_ARITHMETIC_ROUTE,
          operation: DEFAULT_OPERATION,
          name: "",
          // type: "",
          missing: DEFAULT_MISSING,
          numberOfOperands: DEFAULT_NUMBER_OF_OPERANDS,
          quantity: 0,
        },
        ...state.settings.slice(action.payload + 1),
      ];

      state.settings = newProblemSettings;
    },
    // 5) delete setting
    deleteSetting(state, action: PayloadAction<number>) {
      const newProblemSettings = [
        ...state.settings.slice(0, action.payload),
        ...state.settings.slice(action.payload + 1),
      ];

      if (!newProblemSettings.length)
        newProblemSettings.push({
          page: DEFAULT_ARITHMETIC_ROUTE,
          operation: DEFAULT_OPERATION,
          name: "",
          missing: DEFAULT_MISSING,
          numberOfOperands: DEFAULT_NUMBER_OF_OPERANDS,
          quantity: 0,
        });

      state.settings = newProblemSettings;
    },
    // 6) set setting on change
    changeSetting(
      state,
      action: PayloadAction<{
        index: number;
        name: string;
        value: string | number;
      }>
    ) {
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
} = arithmeticSlice.actions;

export const selectArithmetic = (state: RootState) => state.arithmetic;
export const settings = (state: RootState) => state.arithmetic.settings;
export const columns = (state: RootState) => state.arithmetic.columns;
export const problems = (state: RootState) => state.arithmetic.problems;

export default arithmeticSlice;
