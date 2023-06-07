import './Results.css';
import React from 'react';
import Result from '../Result/Result';
import destniationObject from '../DestinationObject';

const keys = Object.keys(destniationObject)

const Results = ({startingPoint, routeNames}) => {
  return(
    <div className='results-container'>
      <h1 className='starting-point'>Available Destinations From: {startingPoint}</h1>
      {routeNames.map((route, i) => {
      return(
          <Result route={route} key={i}/>
      )})
    }
    </div>
  )  
}
export default Results;