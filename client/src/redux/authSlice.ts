import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../redux/store'


type initialState = {
  isLoading: Boolean,
  currentUser: any,
  error: any,
}


const initialState: initialState = {
  isLoading: false,
  currentUser: null,
  error: null,
};


export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<number>) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    },
    loginFailure: (state, action: PayloadAction<number>) => {
      state.error = action.payload;
    },
    registerSuccess: (state, action: PayloadAction<number>) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    },
    registerFailure: (state, action: PayloadAction<number>) => {
      state.error = action.payload;
    },
    logoutSuccess: (state) => {
      state.currentUser = null;
    },
  },
});

export const {
  loginFailure,
  loginSuccess,
  registerFailure,
  registerSuccess,
  logoutSuccess,
} = authSlice.actions;


// ???? nie wiem czy to jest dobre
export const auth = (state: RootState) => state.authReducer

export default authSlice.reducer;