import './registration.scss';
import '../../styles/components/_button.scss';


const Signup = () => {
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
            />
          </div>
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
            <button className='button'>Sing Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;