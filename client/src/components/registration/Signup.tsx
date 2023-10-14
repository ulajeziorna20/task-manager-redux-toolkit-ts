import * as React from 'react';
import { useState, useEffect } from 'react';


import './registration.scss';
import '../../styles/components/_button.scss';


type SignUpData = {
  email: string,
  password: string,
  username: string,
}


const Signup = () => {


  const [signUpData, setSignUpData] = useState<SignUpData>({
    email: '',
    password: '',
    username: '',
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };


  const handleChange = (e: any): void => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value,
    });
  };



  return (
    <div className='signup-form'>
      <div className='signup-form__wrapper'>
        <form className='form'>
          <h4>Sign up</h4>

          <div className='form-group'>
            <input
              type='text'
              placeholder='Enter Name'
              name='username'
              value={signUpData.username}
              onChange={(e:React.ChangeEvent<HTMLInputElement>): void => handleChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              name='email'
              value={signUpData.email}
              id=''
              placeholder='Enter Email'
              onChange={(e:React.ChangeEvent<HTMLInputElement>): void => handleChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              name='password'
              value={signUpData.password}
              id=''
              placeholder='Enter Password'
              onChange={(e:React.ChangeEvent<HTMLInputElement>): void => handleChange(e)}
            />
          </div>
          <div className='form-group'>
            <button className='button'>Sing Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;