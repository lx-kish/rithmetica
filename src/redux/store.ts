import { configureStore } from '@reduxjs/toolkit'

import multiplicationTabReducer from './multiplicationTable/multiplicationTabSlice';
import additionSubtractionReducer from './arithmetic/arithmeticSlice';
import fractionsReducer from './fractions/fractionsSlice';

export const store = configureStore({
  reducer: {
    multiplicationTab: multiplicationTabReducer.reducer,
    arithmetic: additionSubtractionReducer.reducer,
    fractions: fractionsReducer.reducer,
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch