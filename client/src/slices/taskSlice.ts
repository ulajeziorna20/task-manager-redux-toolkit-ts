import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';




type initialTask = {
  task: string,
  status: {
    type: string,
    enum: string[],
    default: string,
  },
  cretedBy: {
    type: string,
    ref: string,
  },
}


const initalTask: string | null = (localStorage.getItem('task') ? localStorage.getItem('task') : null);


let parseInitalTask: initialTask | null = (initalTask !== null ? JSON.parse(initalTask) : null)



const initialState = {
  TaskData: parseInitalTask,
  AllTasks: {},
};


export const taskSlice = createSlice({
  name: 'task',
  initialState,

  reducers: {
    taskAddedSuccessfully: (state, action) => {
      state.TaskData = action.payload;
    },
    taskAddFailure: (state) => {
      return state;
    },
    getAllTaskSuccess: (state, action) => {
      state.AllTasks = action.payload;
    },
    getAllTaskFailure: (state) => {
      return state;
    },

    editTaskSuccess: (state, action) => {
      state.TaskData = action.payload;
    },

    deleteSuccess: (state, action) => {
      state.TaskData = action.payload;
    },
    deletefail: (state) => {
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