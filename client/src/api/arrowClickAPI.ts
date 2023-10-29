import axios, { AxiosResponse } from "axios";
import { toast } from 'react-toastify';
import { SingleTask } from "../components/taskManager/TaskList";
import { initialTask } from "../slices/taskSlice";

type TaskData = {
  id: string,
  status: string,
  string: string,
}



export const arrowClick = (item: initialTask, string: string) => async (dispatch: any) => {
  let taskData: TaskData = {
    id: item._id,
    status: item.status,
    string,
  };

  try {
    let response: AxiosResponse = await axios.put(
      `http://localhost:4000/task/${taskData.id}`,
      taskData
    );

    if (response) {
      window.location.reload();
    }
  } catch (error) {
    console.log(error);
  }
};