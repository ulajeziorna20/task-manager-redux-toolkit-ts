import axios from "axios";
import { taskAddFailure, taskAddedSuccessfully } from "../slices/taskSlice";
import { toast } from "react-toastify";

export const addTask = (task: string, id: string) => async (dispatch: any) => {
  console.log(task);



  const config = {
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const taskData = {
    task: task,
    id: id,
  };
  
  const response = await axios.post('http://localhost:4000/task/add', taskData, config);
  if (response) {
    localStorage.setItem('task', JSON.stringify(response.data));

    dispatch(taskAddedSuccessfully(response.data));
    toast.success('task added successfully');
    window.location.reload();
  } else {
    dispatch(taskAddFailure());
  }
};