import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

import problemsController from "../../components/math/problems-processing/problems-controller";

import { getStorage } from "../../utils/process-local-storage/process-local-storage";

import {
  ISettings,
  IProblemsState,
  IProblemState,
} from "../../TS/interfaces/interfaces";

import {
  DEFAULT_ARITHMETIC_NAME,
  DEFAULT_ARITHMETIC_ROUTE,
  DEFAULT_FRACTIONS_NAME,
  DEFAULT_FRACTIONS_ROUTE,
  DEFAULT_MISSING,
  DEFAULT_NUMBER_OF_OPERANDS,
  DEFAULT_OPERATION,
  DEFAULT_SECTION,
  defaultSettings,
} from "../default-problem-settings";
import { routes } from "../../TS/constatnts/constants";
import { TRoutes } from "../../TS/types/types";

import getRandomStringValue from "../../utils/get-random-string-value/get-random-string-value";

const SLICE_NAME = "problems";

const initialState: IProblemsState = {
  settings:
    getStorage()?.getItem(SLICE_NAME, true)?.settings || defaultSettings,
  problems: getStorage()?.getItem(SLICE_NAME, true)?.problems || [
    ...defaultSettings.map((defaultSetting) =>
      Object.assign({}, defaultSetting, {
        problems: problemsController(defaultSetting),
      })
    ),
  ],
};

function cleanData(
  state: ISettings | ISettings[] | IProblemsState | IProblemsState[]
) {
  return JSON.parse(JSON.stringify(state));
}

function setLocalStorageData(state: IProblemsState) {
  getStorage()?.setItem(SLICE_NAME, cleanData(state));
}

function problemsWithValidSettings(
  state: ISettings[],
  route: TRoutes
): ISettings[] {
  const pageProblemTypes = state.filter(
    (problemType) => problemType.page === route
  );

  let validProblemTypes: ISettings[] = [];

  if (route === routes.arithmetic)
    validProblemTypes = pageProblemTypes!.filter(
      (problemType) =>
        problemType.name !== "-- select --" &&
        problemType.operation &&
        problemType.missing &&
        problemType.quantity
    );

  if (route === routes.fractions)
    validProblemTypes = pageProblemTypes!.filter(
      (problemType) =>
        problemType.name !== "-- select --" &&
        problemType.operation &&
        problemType.section &&
        problemType.quantity
    );

  return validProblemTypes;
}

export const problemsSlice = createSlice({
  name: SLICE_NAME,
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // 1) set input value
    setInputValue(
      state: IProblemsState,
      action: PayloadAction<{
        id: string;
        problemIndex: number;
        name: string;
        value: string;
      }>
    ) {
      const { id, problemIndex, name, value } = action.payload;

      const problemTypeIndex = state.problems.findIndex(
        (problemType: IProblemState) => problemType.id === id
      );

      const newState = state;

      const problem =
        newState.problems[problemTypeIndex].problems[problemIndex];

      newState.problems[problemTypeIndex].problems[problemIndex][
        problem.length - 1
      ][name] = value.toString();

      getStorage()?.setItem(SLICE_NAME, cleanData(newState));

      return newState;
    },
    // 2) clear all locally saved problems and settings
    // clearAllProblemsAndSettings: (state) => {
    //   getStorage()?.removeItem(SLICE_NAME);
    // },
    // 3) generate problems
    generateProblems(
      state: IProblemsState,
      action: PayloadAction<{
        route: TRoutes | string;
      }>
    ) {
      const { route } = action.payload;

      const newState = state;

      const problemsList = state.problems;

      const stateByRoute: any = [];
      problemsList.forEach((problemsObj: IProblemState) => {
        if (!stateByRoute[problemsObj.page])
          stateByRoute[problemsObj.page] = [];
        stateByRoute[problemsObj.page].push(cleanData(problemsObj));
      });

      const currentValidSettings = problemsWithValidSettings(
        state.settings,
        route as TRoutes
      );

      if (currentValidSettings.length) {
        stateByRoute[route] = currentValidSettings.map((validSetting) => {
          return Object.assign({}, validSetting, {
            problems: problemsController(cleanData(validSetting)),
          });
        });
      }

      const prblmsArr = Object.keys(stateByRoute).map(
        (key) => stateByRoute[key]
      );

      const prblms = [].concat.apply([], prblmsArr);

      newState.problems = prblms;

      getStorage()?.setItem(SLICE_NAME, cleanData(newState));

      return newState;
    },
    // 4) insert setting
    insertSetting(
      state: IProblemsState,
      action: PayloadAction<{
        id: string;
        route: string;
      }>
    ) {
      const { id, route } = action.payload;

      const newState = state;

      const index = state.settings.findIndex(
        (problemSetting: ISettings) => problemSetting.id === id
      );

      const newProblemSetting: ISettings = {
        id: getRandomStringValue(),
        page: route as TRoutes,
        operation: DEFAULT_OPERATION,
        name: "",
        numberOfOperands: DEFAULT_NUMBER_OF_OPERANDS,
        quantity: 0,
      };

      if (route === routes.arithmetic)
        newProblemSetting.missing = DEFAULT_MISSING;

      if (route === routes.fractions)
        newProblemSetting.section = DEFAULT_SECTION;

      const newStateSettings = [
        ...newState.settings.slice(0, index + 1),
        newProblemSetting,
        ...newState.settings.slice(index + 1),
      ];

      newState.settings = newStateSettings;

      setLocalStorageData(newState);

      return newState;
    },
    // 5) delete setting
    deleteSetting(
      state: IProblemsState,
      action: PayloadAction<{
        id: string;
        route: string;
      }>
    ) {
      const { id, route } = action.payload;

      // const newState = state;

      const index = state.settings.findIndex(
        (problemSetting: ISettings) => problemSetting.id === id
      );

      const previousState = cleanData(state);

      const newState = state;

      const pageSettings = state.settings.filter(
        (problemType: ISettings) => problemType.page === route
      );

      // common case
      newState.settings = [
        ...previousState.settings.slice(0, index),
        ...previousState.settings.slice(index + 1),
      ];

      // last settings on /arithmetic page
      if (pageSettings.length === 1 && index === 0) {
        newState.settings = [
          {
            id: getRandomStringValue(),
            page: DEFAULT_ARITHMETIC_ROUTE,
            operation: DEFAULT_OPERATION,
            missing: DEFAULT_MISSING,
            name: DEFAULT_ARITHMETIC_NAME,
            numberOfOperands: DEFAULT_NUMBER_OF_OPERANDS,
            quantity: 0,
          },
          ...previousState.slice(index + 1),
        ];
      }

      // last settings on /fractions page
      if (pageSettings.length === 1 && index === state.settings.length - 1) {
        newState.settings = [
          ...previousState.slice(0, index + 1),
          {
            id: getRandomStringValue(),
            page: DEFAULT_FRACTIONS_ROUTE,
            section: DEFAULT_SECTION,
            operation: DEFAULT_OPERATION,
            name: DEFAULT_FRACTIONS_NAME,
            numberOfOperands: DEFAULT_NUMBER_OF_OPERANDS,
            quantity: 0,
          },
        ];
      }

      setLocalStorageData(newState);

      return newState;
    },
    // 6) set setting on change
    changeSetting(
      state: IProblemsState,
      action: PayloadAction<{
        id: string;
        name: string;
        value: string | number;
      }>
    ) {
      const { id, name, value } = action.payload;

      const previousState = cleanData(state);

      const newState = cleanData(state);

      const index = state.settings.findIndex(
        (problemSetting: ISettings) => problemSetting.id === id
      );

      const newProblemSettings = Object.assign(
        {},
        previousState.settings[index],
        {
          [name]: value,
        }
      );

      newState.settings[index] = newProblemSettings;

      setLocalStorageData(newState);

      return newState;
    },
  },
});

export const {
  setInputValue,
  // clearAllProblemsAndSettings,
  generateProblems,
  insertSetting,
  deleteSetting,
  changeSetting,
} = problemsSlice.actions;

export const settings = (state: RootState) => state.problems.settings;
export const problems = (state: RootState) => state.problems.problems;

export default problemsSlice;
