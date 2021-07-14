import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

import problemController from '../../components/math/problems-controller';

import IAdditionSubtractionSetting from '../../TS/interfaces/IAdditionSubtractionSetting';
import IProblem from '../../TS/interfaces/IProblem';

import initialProblemSettings from '../../pages/addition-subtraction/initial-problem-settings';

export interface AdditionSubtractionState {
  settings: IAdditionSubtractionSetting[];
  columns: Number;
  problems: IProblem[][];
}

const initialState = {
  settings: initialProblemSettings,
  columns: 2,
  problems: [[{type: '', value: ''}]],
};

export const additionSubtractionSlice = createSlice({
  name: 'additionSubtraction',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // 1) insert setting
    insertSetting: (state, action: PayloadAction<number>) => {

      const newProblemSettings: IAdditionSubtractionSetting[] = [
        ...state.settings.slice(0, action.payload + 1),
        {
          operation: 'addition',
          type: '',
          missing: 'result',
          numberOfOperands: 2,
          quantity: 0
        },
        ...state.settings.slice(action.payload + 1)
      ];

      state.settings = newProblemSettings;
    },
    // 2) delete setting
    deleteSetting: (state, action: PayloadAction<number>) => {
      const newProblemSettings = [...state.settings.slice(0, action.payload), ...state.settings.slice(action.payload + 1)];

      if (!newProblemSettings.length)
        newProblemSettings.push({
          operation: '',
          type: '',
          missing: '',
          numberOfOperands: 2,
          quantity: 0
        });

      state.settings = newProblemSettings;
    },
    // 3) set setting on change
    changeSetting: (state, action: PayloadAction<{ index: number; name: string; value: string }>) => {

      const newProblemSettings = [...state.settings];
      const { index, name, value } = action.payload;

      newProblemSettings[index] = {
        ...newProblemSettings[index],
        [name]: value,
      };

      // console.log(
      //   '%c redux additionSubtractionSlice.changeSetting index, name, value ===> ',
      //   'color: gold; font-weight: bold;',
      //   index,
      //   name,
      //   value,
      //   newProblemSettings[index],
      // );

      state.settings = newProblemSettings;

    },
    // 4) generate problems
    generateProblems: (state) => {
      const validProblemSettings = state.settings.filter(
        (setting) => setting.operation && setting.type && setting.missing && setting.quantity
      );

      state.problems = problemController(validProblemSettings);
    },

  },
});

export const {
  insertSetting,
  deleteSetting,
  changeSetting,
  generateProblems,
} = additionSubtractionSlice.actions;

export const selectAdditionSubtraction = (state: RootState) => state.additionSubtraction;
export const settings = (state: RootState) => state.additionSubtraction.settings;
export const problems = (state: RootState) => state.additionSubtraction.problems;
export const columns = (state: RootState) => state.additionSubtraction.columns;

export default additionSubtractionSlice.reducer;