import { useSelector } from 'react-redux';
import './home.scss';
import { Link } from 'react-router-dom';
import { RootState } from '../../slices/store';
import { initialStateType } from '../../slices/authSlice';


const Home = () => {

  // const auth = useSelector<RootState, object>((state) => state.auth);
  const auth = useSelector((state: RootState) => state.auth.currentUser);

  console.log(auth?.token);



  return (
    <div className='home'>
      <div className='home__container'>
        <h2>Organize it all</h2>
        <p>With TaskManager</p>

        {auth && auth?.token ? (
          <Link to='/dashboard' className='button'>
            Get Started
          </Link>
        ) : (
          <Link to='/signin' className='button'>
            Get Started
          </Link>
        )}
      </div>
    </div>
  );
}

export default Home;