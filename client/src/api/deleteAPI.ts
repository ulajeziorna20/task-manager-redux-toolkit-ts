import axios, { AxiosResponse } from "axios";
import { deleteSuccess, deletefail } from "../slices/taskSlice";
import { toast } from 'react-toastify';


export const deleteItem = (id: string) => async (dispatch: any) => {
  let res: AxiosResponse = await axios.delete(`http://localhost:4000/task/${id}`);

  if (res) {
    dispatch(deleteSuccess(res.data));
    toast.success('task deleted successfully');

    window.location.reload();
  } else {
    dispatch(deletefail());
  }
};