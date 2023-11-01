import axios, { AxiosResponse } from "axios";
import { SignUpData } from "../components/registration/Signup";
import { toast } from "react-toastify";
import { registerFailure, registerSuccess } from "../slices/authSlice";

import history from '../browserHistory'

export const register = (user: String) => async (dispatch: any) => {
  console.log(user);

  const config = {
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  };

  await axios.post("http://localhost:4000/auth/register",
    user,
    config,

  ).then((res: AxiosResponse) => {
    if (res) {

      console.log(res);

      dispatch(registerSuccess(res.data));
      toast.success('registration successfull!', {
        position: toast.POSITION.TOP_CENTER
      })
    
      // trtzeba naprawic
      history.push('/signin');
      window.location.reload();
    }
  }).catch((error) => {
    console.error(error);
    dispatch(registerFailure(error.response.data));

    toast.error('registration failed', {
      position: toast.POSITION.TOP_CENTER
    })
  })
}