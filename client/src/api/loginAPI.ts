import { loginFailure, loginSuccess } from "../slices/authSlice";
import history from '../browserHistory'
import axios, { AxiosResponse } from "axios";
import { ToastContainer, toast } from 'react-toastify';


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
  ).then(async (response: AxiosResponse) => {
    localStorage.setItem('auth', JSON.stringify(response.data));
    dispatch(loginSuccess(response.data));

    history.push('/dashboard');

    toast.success('Success logged! App Loading!', {
      position: toast.POSITION.TOP_CENTER
    })

    setTimeout(() => {
      window.location.reload();
    }, 3000)



  }).catch((error) => {
    dispatch(loginFailure(error.response.data))
    toast.error('invalid email or password', {
      position: toast.POSITION.TOP_CENTER
    })
  })
};