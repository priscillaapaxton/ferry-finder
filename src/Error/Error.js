import './Error.css';
import React from 'react';

const Error = () => {
  return (
    <div className='error-container'>
      <img className='error-logo' src='/errorlogo.png' alt='red and white lifebuoy' />
      <p className='error-text'>
        Man overboard! Looks like we are experiencing some issues with our server...
      </p>
    </div>
  )
}

export default Error