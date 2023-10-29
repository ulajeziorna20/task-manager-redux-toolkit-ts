import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';




export type initialTask = {
  task: string,
  status: string
  cretedBy: string,
  _id: string
}


const initalTask: string | null = (localStorage.getItem('task') ? localStorage.getItem('task') : null);


let parseInitalTask: initialTask | null = (initalTask !== null ? JSON.parse(initalTask) : null)



type InitialState = {
  TaskData: initialTask | null,
  AllTasks: initialTask[],
}


const initialState: InitialState = {
  TaskData: parseInitalTask,
  AllTasks: [],
};


export const taskSlice = createSlice({
  name: 'task',
  initialState,

  reducers: {
    taskAddedSuccessfully: (state: InitialState, action: PayloadAction<initialTask>) => {
      state.TaskData = action.payload;
    },
    taskAddFailure: (state) => {
      return state;
    },
    getAllTaskSuccess: (state: InitialState, action: PayloadAction<initialTask[]>) => {
      state.AllTasks = action.payload;
    },
    getAllTaskFailure: (state: InitialState,) => {
      return state;
    },

    editTaskSuccess: (state: InitialState, action: PayloadAction<initialTask>) => {
      state.TaskData = action.payload;
    },

    deleteSuccess: (state: InitialState, action: PayloadAction<initialTask>) => {
      state.TaskData = action.payload;
    },
    deletefail: (state: InitialState) => {
      return state;
    },
  },
});

export const {
  taskAddFailure,
  taskAddedSuccessfully,
  getAllTaskFailure,
  getAllTaskSuccess,
  deleteSuccess,
  deletefail,
  editTaskSuccess,
} = taskSlice.actions;

export default taskSlice.reducer;