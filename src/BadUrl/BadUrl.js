import './BadUrl.css';
import { NavLink } from 'react-router-dom';
import React from 'react';

const BadUrl = () => {
  return (
    <div className='bad-url-container'>
      <img className='bad-url-logo' src='/badurllogo.png' alt='white drowning hand' />
      <p className='bad-url-text'>Uh-oh. There doesn't appear to be anything here.</p>
      <NavLink to='/' className='return-home'>
        Return Home
      </NavLink>
    </div>
  ); 
};

export default BadUrl;


