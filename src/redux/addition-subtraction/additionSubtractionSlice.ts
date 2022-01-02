import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

import problemsController from '../../components/math/problems-controller';

import { getStorage } from '../../utils/process-local-storage/process-local-storage';

import IAdditionSubtractionSetting from '../../TS/interfaces/IAdditionSubtractionSetting';
import IProblem from '../../TS/interfaces/IProblem';

import initialProblemSettings from '../../pages/addition-subtraction/initial-problem-settings';

export interface AdditionSubtractionState {
  settings: IAdditionSubtractionSetting[],
  columns: number,
  problems: IProblem[][],
}

const initialState: AdditionSubtractionState = {
  settings: getStorage()?.getItem("additionSubtraction", true)?.settings || initialProblemSettings,
  columns: 2,
  problems: getStorage()?.getItem("additionSubtraction", true)?.problems || problemsController(initialProblemSettings),
};

const localStorageData = (state: AdditionSubtractionState, settings: IAdditionSubtractionSetting[]) => {
  return {
    settings,
    columns: state.columns,
    problems: JSON.parse(JSON.stringify(state.problems)),
  }
}

const validProblemSettings = (state: AdditionSubtractionState): IAdditionSubtractionSetting[] => {
  return state.settings.filter(
    // const validProblemSettings = action.payload.filter(
    (setting: IAdditionSubtractionSetting) => setting.operation && setting.type && setting.missing && setting.quantity
  );
}

export const additionSubtractionSlice = createSlice({
  name: 'additionSubtraction',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // 1) set input value
    setInputValue: (state, action: PayloadAction<{ index: number, value: string }>) => {
      const { index, value } = action.payload;
      state.problems[index][5].value = "" + value;
      
      const currentValidSettings = validProblemSettings(state);

      getStorage()?.setItem("additionSubtraction", localStorageData(state, currentValidSettings));
    },
    // 2) clear all locally saved problems and settings
    clearAllProblemsAndSettings: (state) => {
      getStorage()?.removeItem("additionSubtraction");
    },
    // 3) generate problems
    generateProblems: (state) => {
      // generateProblems: (state, action: PayloadAction<IAdditionSubtractionSetting[]>) => {
      const currentValidSettings = validProblemSettings(state);

      const problems = problemsController(currentValidSettings);

      state.problems = problems;

      if (problems.length) getStorage()?.setItem("additionSubtraction", localStorageData(state, currentValidSettings));

      if (!problems.length) getStorage()?.removeItem("additionSubtraction");
    },
    // 4) insert setting
    insertSetting: (state, action: PayloadAction<number>) => {

      const newProblemSettings: IAdditionSubtractionSetting[] = [
        ...state.settings.slice(0, action.payload + 1),
        {
          operation: 'addition',
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
      const newProblemSettings = [...state.settings.slice(0, action.payload), ...state.settings.slice(action.payload + 1)];

      if (!newProblemSettings.length)
        newProblemSettings.push({
          operation: 'addition',
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

      newProblemSettings[index] = {
        ...newProblemSettings[index],
        [name]: value,
      };

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
} = additionSubtractionSlice.actions;

export const selectAdditionSubtraction = (state: RootState) => state.additionSubtraction;
export const settings = (state: RootState) => state.additionSubtraction.settings;
export const columns = (state: RootState) => state.additionSubtraction.columns;
export const problems = (state: RootState) => state.additionSubtraction.problems;

export default additionSubtractionSlice;