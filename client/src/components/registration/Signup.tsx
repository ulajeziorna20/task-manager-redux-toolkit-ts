import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../api/registerAPI';


import './registration.scss';
import '../../styles/components/_button.scss';
import { AppDispatch } from '../../slices/store';


export type SignUpData = {
  email: string,
  password: string,
  username: string,
}


const Signup = () => {



  const dispatch: AppDispatch = useDispatch();


  const [signUpData, setSignUpData] = useState<SignUpData>({
    email: '',
    password: '',
    username: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(signUpData);


    let signupPayload = {
      username: signUpData.username,
      email: signUpData.email,
      password: signUpData.password

    }


    dispatch(
      register(JSON.stringify(signUpData))
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