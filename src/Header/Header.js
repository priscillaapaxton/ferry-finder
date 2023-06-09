import './Header.css'
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({resetResults}) => {
  return(
    <header className='header'>
      <div className='header-container'>
        <NavLink to='/' onClick={resetResults}>
          <img className='home-logo' src='/homelogo.png' alt='blue and white ship on waves' />
        </NavLink>
        <div className='header-text-container'>
          <p className='header-title'>Ferry Finder</p>
          <p className='header-slogan'>Relax. We've got it figured out so you don't have to.</p>
        </div>
      </div>
    </header>
  )
}

export default Header;

Header.propTypes = {
  resetResults: PropTypes.func.isRequired
}