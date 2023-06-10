import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return(
    <header className='header'>
      <div className='header-container'>
        <NavLink to='/'>
          <img className='home-logo' src='/homelogo.png' alt='blue and white ship on waves' />
        </NavLink>
        <div className='header-text-container'>
          <p className='header-title'>British Columbia Ferry Finder</p>
          <p className='header-slogan'>Relax. We've got it figured out so you don't have to.</p>
        </div>
      </div>
    </header>
  );
};

export default Header;