import './Error.css';
import { NavLink } from 'react-router-dom';
import React from 'react';

const Error = () => {
  return (
    <div className='error-container'>
      <img className='error-logo' src='/errorlogo.png' alt='red and white lifebuoy' />
      <p className='error-text'>
        Man overboard! Looks like we are experiencing some issues with our server...
      </p>
      <NavLink to='/' className='return-home'>
        Return Home
      </NavLink>
    </div>
  )
}

export default Error