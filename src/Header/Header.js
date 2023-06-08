import './Header.css'
import { Link } from 'react-router-dom';

const Header = ({resetResults}) => {
  return(
    <header className='header'>
      <div className='header-container'>
        <Link to='/' onClick={resetResults}>
          <img className='home-logo' src='./homelogo.png' alt='blue and white ship on waves' />
        </Link>
        <div className='header-text-container'>
          <p className='header-title'>Ferry Finder</p>
          <p className='header-slogan'>Relax. We've got it figured out so you don't have to.</p>
        </div>
      </div>
    </header>
  )
}

export default Header;