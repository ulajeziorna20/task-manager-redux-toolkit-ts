import axios, { AxiosResponse } from "axios";
import { editTaskSuccess, editTaskFailure } from "../slices/taskSlice";


export const editTaskAPI = (editedContent: string, id: string) => async (dispatch: any) => {
  const config = {
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  };
  console.log(editedContent);


  let data = {
    content: editedContent
  }


  await axios.put(
    `http://localhost:4000/task/edit/${id}`,
    JSON.stringify(data),
    config
  ).then((response: AxiosResponse) => {


    dispatch(editTaskSuccess(response.data));
    console.log(response);

    window.location.reload();

  }).catch((error: any) => {
    console.log('jesten');

    console.log(error);

    if (error.response.status === 404) {
      dispatch(editTaskFailure());
    }

  })

};