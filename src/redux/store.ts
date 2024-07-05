import { configureStore } from "@reduxjs/toolkit";

import multiplicationTabReducer from "./multiplicationTable/multiplicationTabSlice";
import problemsReducer from "./problems/problemsSlice";

export const store = configureStore({
  reducer: {
    multiplicationTab: multiplicationTabReducer.reducer,
    problems: problemsReducer.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
