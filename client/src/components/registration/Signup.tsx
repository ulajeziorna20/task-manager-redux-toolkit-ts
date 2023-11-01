import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../api/registerAPI';

import { ToastContainer, toast } from 'react-toastify';

import './registration.scss';
import '../../styles/components/_button.scss';
import { AppDispatch } from '../../slices/store';


export type SignUpData = {
  email: string,
  password: string,
  username: string,
}

export type FormErrors = {
  default?: string,
  username?: string,
  email: string,
  password: string,
}

export type ToastTypes = {
  defaultInfo: () => void,
  usernameInfo: () => void,
  passwordInfo: () => void,
  emailInfo: () => void

}




const Signup = () => {



  const dispatch: AppDispatch = useDispatch();


  const [signUpData, setSignUpData] = useState<SignUpData>({
    email: '',
    password: '',
    username: '',
  });



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(signUpData);


    let errors: FormErrors = {
      default: '',
      username: '',
      email: '',
      password: '',
    }



    let toastBox: ToastTypes = {
      defaultInfo: () => toast.warning(errors.default, {
        position: toast.POSITION.TOP_CENTER
      }),
      usernameInfo: () => toast.warning(errors.username, {
        position: toast.POSITION.TOP_CENTER
      }),
      passwordInfo: () => toast.warning(errors.password, {
        position: toast.POSITION.TOP_CENTER
      }),
      emailInfo: () => toast.warning(errors.email, {
        position: toast.POSITION.TOP_CENTER
      })

    }



    if (!signUpData.username.trim() || !signUpData.email.trim() || !signUpData.password.trim()) {

      errors.default = 'Please fill in every field'

      toastBox.defaultInfo()

      return
    }

    if (signUpData.username.trim().length < 5 || !/\d/.test(signUpData.username.trim()) || !/[A-Z]/.test(signUpData.username.trim())) {

      console.log(/[A-Z]/.test(signUpData.username.trim()));
      console.log(signUpData.username.trim().length < 5);
      console.log(/\d/.test(signUpData.username.trim()));


      errors.username = 'Username should have  min 5 characetrs, number and capital letter'

      toastBox.usernameInfo()

      return
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(signUpData.email.trim())) {

      errors.email = 'Email is not valid'

      toastBox.emailInfo()

      return
    }

    if (
      !/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(signUpData.password.trim()) ||
      !/[A-Z]/.test(signUpData.password.trim()) ||
      !/\d/.test(signUpData.password.trim()) ||
      !/^[^\s]*$/.test(signUpData.password.trim())
    ) {

      errors.password = 'Password should contain capital letter, spacial chars, number, zero empty spaces '

      toastBox.passwordInfo()

      return
    }


    let signupPayload = {
      username: signUpData.username,
      email: signUpData.email,
      password: signUpData.password

    }


    setSignUpData({
      email: '',
      password: '',
      username: '',
    })


    errors.default = '',
      errors.username = '',
      errors.email = '',
      errors.password = ''

    // console.log('perfect');


    dispatch(
      register(JSON.stringify(signupPayload))
    );
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSignUpData({
      ...signUpData,
      [e.target?.name]: e.target.value,
    });
  };






  return (
    <div className='signup-form'>
      <div className='signup-form__wrapper'>


        {/* <button onClick={showToastMessage}>Notify</button> */}
        <ToastContainer />



        <form className='form' onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
          <h4>Sign up</h4>

          <div className='form-group'>
            <input
              type='text'
              placeholder='Enter Name'
              name='username'
              value={signUpData.username}
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              name='email'
              value={signUpData.email}
              placeholder='Enter Email'
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              name='password'
              value={signUpData.password}
              placeholder='Enter Password'
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleChange(e)}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='button'>Sing Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;