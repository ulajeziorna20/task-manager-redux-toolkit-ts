import { configureStore } from "@reduxjs/toolkit";

import reducer, { initialStateType } from './authSlice'


export const store = configureStore({
  reducer: { auth: reducer }
})


// TO JEST BARDZO WAZNE LINIA 14, 16

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch