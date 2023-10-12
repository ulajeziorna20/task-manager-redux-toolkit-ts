import './header.scss'

const Header = () => {
  return (
    <div className="Header">
      <nav className="header">
        <div className="header_logo">
          <h3>Task Manager</h3>
        </div>
        <div className="header_buttons">
          <button className='button'>Sign in</button>
          <button className='button'>Sign out</button>
        </div>
      </nav>
    </div>
  );
}

export default Header;