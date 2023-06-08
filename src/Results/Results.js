import './Results.css';
import React from 'react';
import Result from '../Result/Result';
import destniationObject from '../DestinationObject';
import PropTypes from 'prop-types';

const Results = ({origin, availRoutes, getScheduleAndDestination}) => {
  return(
    <div className='results-container'>
      <h1 className='starting-point'>Available Destinations From: {origin}</h1>
      {availRoutes.map((route, i) => {
      return(
          <Result getSchedule={getScheduleAndDestination} route={destniationObject[route]} routeAbbr={route} key={i}/>
      )})
    }
    </div>
  )  
}
export default Results;

Results.propTypes = {
  origin: PropTypes.string.isRequired,
  availRoutes: PropTypes.arrayOf(PropTypes.string).isRequired,
  getScheduleAndDestination: PropTypes.func.isRequired
}

