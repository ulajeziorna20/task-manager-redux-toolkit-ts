import { configureStore } from "@reduxjs/toolkit";
// czemu imprtuje z authSlice a juz z taskSlice nie muszę ???
import  { initialStateType } from './authSlice'
import authReducer from './authSlice'
import taskReducer from './taskSlice'

export const store = configureStore({
  reducer: { auth: authReducer, task: taskReducer }
})


// TO JEST BARDZO WAZNE LINIA 14, 16

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch