import './Result.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Result = ({ route, routeAbbr, getSchedule }) => {
  const handleClick = () => {
    getSchedule(routeAbbr, route)
  }
  return(
    <NavLink  to={`/schedule/${routeAbbr}`} >
      <div className='result-card'>
        <h1 className='route-name' onClick={handleClick}>Ferry Schedule to {route}</h1>
      </div>
    </NavLink>
  )
}

export default Result;

Result.propTypes = {
  route: PropTypes.string.isRequired,
  routeAbbr: PropTypes.string.isRequired,
  getSchedule: PropTypes.func.isRequired
}