import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

import problemsController from '../../components/math/arithmetic/problems-controller';

import { getStorage } from '../../utils/process-local-storage/process-local-storage';

import IArithmeticSetting from '../../TS/interfaces/IArithmeticSetting';
import IProblem from '../../TS/interfaces/IProblem';

import initialProblemSettings from '../../pages/arithmetic/initial-problem-settings';
import { COLUMN_NUMBER_ARITHMETIC as columnNumber } from '../../constants';

export interface ArithmeticState {
  settings: IArithmeticSetting[],
  columns: number,
  problems: IProblem[][],
}

const initialState: ArithmeticState = {
  settings: getStorage()?.getItem("arithmetic", true)?.settings || initialProblemSettings,
  columns: columnNumber,
  problems: getStorage()?.getItem("arithmetic", true)?.problems || problemsController(initialProblemSettings),
};

const localStorageData = (state: ArithmeticState, settings: IArithmeticSetting[]) => {
  return {
    settings,
    columns: state.columns,
    problems: JSON.parse(JSON.stringify(state.problems)),
  }
}

const validProblemSettings = (state: ArithmeticState): IArithmeticSetting[] => {
  return state.settings.filter(
    (setting: IArithmeticSetting) => setting.operation && setting.type && setting.missing && setting.quantity
  );
}

export const arithmeticSlice = createSlice({
  name: 'arithmetic',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // 1) set input value
    setInputValue: (state, action: PayloadAction<{ index: number, value: string }>) => {
      const { index, value } = action.payload;
      state.problems[index][state.problems[index].length - 1].value = "" + value;

      const currentValidSettings = validProblemSettings(state);

      getStorage()?.setItem("arithmetic", localStorageData(state, currentValidSettings));
    },
    // 2) clear all locally saved problems and settings
    clearAllProblemsAndSettings: (state) => {
      getStorage()?.removeItem("arithmetic");
    },
    // 3) generate problems
    generateProblems: (state) => {
      const currentValidSettings = validProblemSettings(state);

      const problems = problemsController(currentValidSettings) || [];

      state.problems = problems;

      if (problems.length) getStorage()?.setItem("arithmetic", localStorageData(state, currentValidSettings));

      if (!problems.length) getStorage()?.removeItem("arithmetic");
      console.log(
        "%c :::::::::::::::: 68 line of changeSetings() of arithmeticSlice.ts ::::::::::::::::",
        "color: olive; font-weight: bold",
        "\n",
        "state.settings ===> ",
        state.settings,
        "\n",
        "currentValidSettings ===> ",
        currentValidSettings,
        "\n",
        "state.problems ===> ",
        state.problems,
        "\n",
      );
    },
    // 4) insert setting
    insertSetting: (state, action: PayloadAction<number>) => {

      const newProblemSettings: IArithmeticSetting[] = [
        ...state.settings.slice(0, action.payload + 1),
        {
          operation: '+',
          name: '',
          type: '',
          missing: 'random',
          numberOfOperands: 2,
          quantity: 0
        },
        ...state.settings.slice(action.payload + 1)
      ];

      state.settings = newProblemSettings;
    },
    // 5) delete setting
    deleteSetting: (state, action: PayloadAction<number>) => {
      const newProblemSettings = [
        ...state.settings.slice(0, action.payload),
        ...state.settings.slice(action.payload + 1)
      ];

      if (!newProblemSettings.length)
        newProblemSettings.push({
          operation: '+',
          name: '',
          type: '',
          missing: 'random',
          numberOfOperands: 2,
          quantity: 0
        });

      state.settings = newProblemSettings;
    },
    // 6) set setting on change
    changeSetting: (state, action: PayloadAction<{ index: number; name: string; value: string }>) => {
      const newProblemSettings = [...state.settings];
      const { index, name, value } = action.payload;

      const newSettings = Object.assign(
        {},
        newProblemSettings[index],
        { [name]: value }
      );
      
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