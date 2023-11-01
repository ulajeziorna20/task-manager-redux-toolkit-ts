import './registration.scss';
import '../../styles/components/_button.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signin } from '../../api/loginAPI';
import { AppDispatch } from '../../slices/store';

import { ToastContainer, toast } from 'react-toastify';
import { FormErrors, ToastTypes } from './Signup';


export type SignInData = {
  email: string,
  password: string,
}




const Signin = () => {
  const dispatch: AppDispatch = useDispatch();

  const [loginData, setLoginData] = useState<SignInData>({
    email: '',
    password: '',
  });



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();


    let errors: FormErrors = {
      default: '',
      email: '',
      password: '',
    }




    let toastBox: ToastTypes = {
      defaultInfo: () => toast.warning(errors.default, {
        position: toast.POSITION.TOP_CENTER
      }),
      usernameInfo: () => toast.warning('disactive', {
        position: toast.POSITION.TOP_CENTER
      }),
      passwordInfo: () => toast.warning(errors.password, {
        position: toast.POSITION.TOP_CENTER
      }),
      emailInfo: () => toast.warning(errors.email, {
        position: toast.POSITION.TOP_CENTER
      })

    }



    if (!loginData.email.trim() || !loginData.password.trim()) {

      errors.default = 'Please fill in every field'

      toastBox.defaultInfo()

      return
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(loginData.email.trim())) {

      errors.email = 'Email is not valid'

      toastBox.emailInfo()

      return
    }


    let signinDataJSON = JSON.stringify({
      email: loginData.email,
      password: loginData.password,
    })

    dispatch(
      signin(signinDataJSON)
    )


  };

  return (
    <div className='signup-form'>
      <div className='signup-form__wrapper'>
        <ToastContainer />
        <form className='form' onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
          <h4>Sign In</h4>
          <div className='form-group'>
            <input
              type='email'
              name='email'
              value={loginData.email}
              placeholder='Enter Email'
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              name='password'
              value={loginData.password}
              placeholder='Enter Password'
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleChange(e)}
            />
          </div>
          <div className='form-group'>
            <button type="submit" className='button'>Sing In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;