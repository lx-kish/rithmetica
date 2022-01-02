import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

import initialMultiplicationTabSettings from '../../pages/multiplication-tab/initial-multiplication-tab-settings';

import { getStorage } from '../../utils/process-local-storage/process-local-storage';

export interface IMultiplicationTabState {
  subtract: boolean,
  values: string[][],
};

const initialState: IMultiplicationTabState = {
  subtract: false,
  values: getStorage()?.getItem("multiplicationTab", true)?.values || initialMultiplicationTabSettings,
};

const localStorageData = (state: IMultiplicationTabState) => {
  return {
    subtract: state.subtract,
    values: JSON.parse(JSON.stringify(state.values)),
  }
}

export const multiplicationTabSlice = createSlice({
  name: "multiplicationTab",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // 1) set input value
    setInputValue: (state, action: PayloadAction<{ row: number; col: number; value: number }>) => {

      let { row, col, value } = action.payload;

      state.values[row][col] = "" + value || "";

      getStorage()?.setItem("multiplicationTab", localStorageData(state));
    },
    // 2) clear all input values
    clearAllInputs: (state) => {
      state.values = initialMultiplicationTabSettings;
      getStorage()?.removeItem("multiplicationTab");
    },
    // 3) switch subtract
    switchSubtract: (state) => {
      state.subtract = !state.subtract;
    },
  },
});

export const {
  setInputValue,
  clearAllInputs,
  switchSubtract,
} = multiplicationTabSlice.actions;

export const selectMultiplicationTab = (state: RootState) => state.multiplicationTab;
export const subtract = (state: RootState) => state.multiplicationTab.subtract;
export const values = (state: RootState) => state.multiplicationTab.values;

export default multiplicationTabSlice;