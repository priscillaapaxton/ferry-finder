import './Results.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import Result from '../Result/Result';
import destniationObject from '../DestinationObject';

const Results = ({origin, availRoutes, getScheduleAndDestination, resetResults}) => {
  return(
    <div className='results-container'>
      <p className='starting-point'>Available Destinations From: {origin}</p>
      <div className='results-cards-container'>
      {availRoutes.map((route, i) => {
      return(
          <Result getSchedule={getScheduleAndDestination} route={destniationObject[route]} routeAbbr={route} key={i}/>
      )})
      }
      </div>
      <NavLink to='/' onClick={resetResults}>
        <button className='return-home'>
          Return Home
        </button>
      </NavLink>
    </div>
  )  
}

export default Results;

Results.propTypes = {
  origin: PropTypes.string.isRequired,
  availRoutes: PropTypes.arrayOf(PropTypes.string).isRequired,
  getScheduleAndDestination: PropTypes.func.isRequired,
  resetResults: PropTypes.func.isRequired
}

