import { configureStore } from '@reduxjs/toolkit'

import multiplicationTabReducer from './multiplicationTable/multiplicationTabSlice';
import additionSubtractionReducer from './addition-subtraction/additionSubtractionSlice';
// import settingsReducer from './settingsProcessing/settingsProcessing';

export const store = configureStore({
  reducer: {
    multiplicationTab: multiplicationTabReducer.reducer,
    additionSubtraction: additionSubtractionReducer.reducer,
    // settingsState: settingsReducer.reducer,
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch