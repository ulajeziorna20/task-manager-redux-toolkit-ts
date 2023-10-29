import axios, { AxiosResponse } from "axios";
import { getAllTaskFailure, getAllTaskSuccess } from "../slices/taskSlice";


export const getAllTasks = (token: string, id: string) => async (dispatch: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      id,
    },
  };

  await axios.get(
    'http://localhost:4000/task/tasks',
    config
  ).then((response: AxiosResponse) => {
    dispatch(getAllTaskSuccess(response.data));
  }).catch((error: any) => {

console.log(error);

    if (error.response.status === 404) {
      dispatch(getAllTaskFailure());
    }

  })

};