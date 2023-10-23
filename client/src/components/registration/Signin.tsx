import './registration.scss';
import '../../styles/components/_button.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signin } from '../../api/loginAPI';
import { AppDispatch } from '../../slices/store';



export type SignInData = {
  email: string,
  password: string,
}





const Signin = () => {
  const dispatch: AppDispatch = useDispatch();

  const [state, setState] = useState<SignInData>({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();


    let signinDataJSON = JSON.stringify({
      email: state.email,
      password: state.password,
    })

    dispatch(
      signin(signinDataJSON)
    )


  };

  return (
    <div className='signup-form'>
      <div className='signup-form__wrapper'>
        <form className='form' onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
          <h4>Sign In</h4>
          <div className='form-group'>
            <input
              type='email'
              name='email'
              value={state.email}
              placeholder='Enter Email'
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              name='password'
              value={state.password}
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