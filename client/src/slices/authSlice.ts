import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { SignUpData } from '../components/registration/Signup';

import axios, { AxiosResponse } from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DispatchProp } from 'react-redux';
import { Dispatch } from 'react';




type initialStateType = {
  isLoading: Boolean,
  currentUser: any,
  error: Error | null,
}


const initialState: initialStateType = {
  isLoading: false,
  currentUser: null,
  error: null,
};


export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    loginSuccess: (state: initialStateType, action: PayloadAction<initialStateType>): void => {
      state.currentUser = action.payload;
      state.isLoading = false;
    },
    loginFailure: (state: initialStateType, action: PayloadAction<Error>): void => {
      state.error = action.payload;
    },
    registerSuccess: (state: initialStateType, action: PayloadAction<initialStateType>): void => {
      state.currentUser = action.payload;
      state.isLoading = false;
    },
    registerFailure: (state: initialStateType, action: PayloadAction<Error>): void => {
      state.error = action.payload;
    },
    logoutSuccess: (state: initialStateType): void => {
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


// ???? nie wiem czy to jest dobre BARDZO WAZNE TO JEST 
export const auth = (state: RootState) => state.authReducer

export default authSlice.reducer;

