import './Results.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import Result from '../Result/Result';
import BadUrl from '../BadUrl/BadUrl'; 
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
      {!origin ? (
        <BadUrl />
      ) : (
        <>
          <p className='starting-point'>Available Destinations From: {origin}</p>
          <div className='results-cards-container'>
            {routes.map((route) => (
              <Result
                route={destinationObject[route]} 
                routeAbbr={route} 
                originAbbr={originAbbr}
                key={route}
              />
            ))}
            </div>
            <Link to='/' className='return-home'>
              Return Home
            </Link>
          
        </>
      )}
    </div>
  );
}

export default Results;

Results.propTypes = {
  originAbbr: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
}

