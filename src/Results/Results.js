import './Results.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import Result from '../Result/Result';
import destinationObject from '../DestinationObject';

const Results = ({ originAbbr, data }) => {

  let origin = destinationObject[originAbbr]
  let routes = [];
  if (
    originAbbr in data
  ) {
    routes = Object.keys(data[originAbbr]);
  }
  
  return (
    <div className='results-container'>
      {!origin ? <p className='starting-point'>Doesn't look like there's any ferry routes here</p> : <p className='starting-point'>Available Destinations From: {origin}</p>}
      
      <div className='results-cards-container'>
        {!origin ? (
          <div>nothing here...</div>
        ) : (
          routes.map((route) => (
            <Result
              route={destinationObject[route]} 
              routeAbbr={route} 
              originAbbr={originAbbr}
              key={route}
            />
          ))
        )}
      </div>
      
      <NavLink to='/' className='return-home'>
        Return Home
      </NavLink>
    </div>
  );
}

export default Results;

Results.propTypes = {
  originAbbr: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
}

