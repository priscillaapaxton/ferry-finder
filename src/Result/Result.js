import './Result.css'
import React from 'react';
import { NavLink } from 'react-router-dom';

const Result = ({ route }) => {
  return(
    <div className='result-card'>
      <h1 className='route-name'>Ferry Schedule to {route}</h1>
    </div>
  )
}

export default Result;