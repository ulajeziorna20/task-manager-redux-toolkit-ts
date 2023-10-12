import './registration.scss';
import '../../styles/components/_button.scss';


const Signin = () => {


  return (
    <div className='signup-form'>
      <div className='signup-form__wrapper'>
        <form className='form' >
          <h4>Sign In</h4>
          <div className='form-group'>
            <input
              type='email'
              name='email'
              id=''
              placeholder='Enter Email'
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              name='password'
              id=''
              placeholder='Enter Password'
            />
          </div>
          <div className='form-group'>
            <button className='button'>Sing In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;