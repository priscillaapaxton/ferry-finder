import './Results.css';
import React from 'react';
import Result from '../Result/Result';
import destniationObject from '../DestinationObject';

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


