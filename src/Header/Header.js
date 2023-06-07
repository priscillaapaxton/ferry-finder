import './Header.css'
import { Link, NavLink } from 'react-router-dom';

const Header = ({resetResults}) => {
  return(
    <header className='header'>
      <div className='header-container'>
        <Link to='/' onClick={resetResults}>RETURN HOME</Link>
        <h1 className='header-text'>Ferry Finder!</h1>
        <p className='header-text'>We've got you.</p>
      </div>
    </header>
  )
}

export default Header;