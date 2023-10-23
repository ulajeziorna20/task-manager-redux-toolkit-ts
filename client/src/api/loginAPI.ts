import { loginFailure, loginSuccess } from "../slices/authSlice";
import history from '../browserHistory'
import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";


export const signin = (user: String) => async (dispatch: any) => {




  const config = {
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  };


  await axios.post(
    'http://localhost:4000/auth/signin',
    user,
    config
  ).then((response: AxiosResponse) => {
    localStorage.setItem('auth', JSON.stringify(response.data));
    dispatch(loginSuccess(response.data));

    history.push('/dashboard');
    toast.success('login successfull');

    window.location.reload();
  }).catch((error) => {
    dispatch(loginFailure(error))
    toast.error('login failed');
  })
};