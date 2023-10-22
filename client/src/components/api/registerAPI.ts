import axios, { AxiosResponse } from "axios";
import { SignUpData } from "../registration/Signup";
import { toast } from "react-toastify";
import { registerFailure, registerSuccess } from "../../slices/authSlice";

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
      toast.success('register successfull');
      // trtzeba naprawic
      // history.push('/signin');
      window.location.reload();
    }
  }).catch((error) => {
    console.error(error);
    // dispatch(registerFailure(error));
    // toast.error('registration failed');

  })
}