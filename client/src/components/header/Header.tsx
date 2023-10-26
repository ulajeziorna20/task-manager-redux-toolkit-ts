import { useSelector, useDispatch } from 'react-redux';
import './header.scss'
import { AppDispatch, RootState } from '../../slices/store';
import { Link } from 'react-router-dom';
import history from '../../browserHistory';
import { logoutSuccess } from '../../slices/authSlice';

const Header = () => {

  const dispatch: AppDispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth.currentUser);


  const handleClick = (e : React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(logoutSuccess());
    localStorage.removeItem('auth');
    history.push('/signin');
    window.location.reload();
  };



  const homeDirecLogo = () => {
    history.push('/');
    window.location.reload();
  }

  return (
    <div className="Header">
      <nav className="header">
        <div className="header_logo">
          <h3 className='brandLogo' onClick={homeDirecLogo}>Task Manager</h3>
        </div>
        <div className="header_buttons">
          {auth && auth?.token ? (
           <Link to='/signin' className='button' onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClick(e)}>
           SignOut
         </Link>) : (
            <div>
              <Link to='/signin' className='button'>
                SignIn
              </Link>
              <Link to='/signup' className='button'>
                SignUp
              </Link>
            </div>
          )}

        </div>
      </nav>
    </div>
  );
}

export default Header;