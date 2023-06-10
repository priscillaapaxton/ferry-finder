import './Result.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Result = ({ route, routeAbbr, originAbbr }) => {
  return(
    <NavLink className='result-nav-link' to={`/schedule/${originAbbr}/${routeAbbr}`} >
      <div className='result-card'>
        <h1 className='route-name' >Ferry Schedule to {route}</h1>
      </div>
    </NavLink>
  );
};

export default Result;

Result.propTypes = {
  route: PropTypes.string.isRequired,
  routeAbbr: PropTypes.string.isRequired,
  originAbbr: PropTypes.string.isRequired,
};