import './sidebar.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../slices/store';

const Sidebar = () => {

  const auth = useSelector((state: RootState) => state.auth.currentUser);

  return (
    <div>
      <ul className='sidebar'>
        <li className='list-item'>
          <h5>{auth?.username}</h5>
        </li>
        <li className='list-item'>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
        <li className='list-item'>
          <Link to='/settings'>Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;