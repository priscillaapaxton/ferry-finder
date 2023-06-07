import './Results.css';
import React from 'react';
import Result from '../Result/Result';
import destniationObject from '../DestinationObject';

const Results = ({startingPoint, availRoutes, getSchedule}) => {
  return(
    <div className='results-container'>
      <h1 className='starting-point'>Available Destinations From: {startingPoint}</h1>
      {availRoutes.map((route, i) => {
      return(
          <Result getSchedule={getSchedule} route={destniationObject[route]} routeAbbr={route} key={i}/>
      )})
    }
    </div>
  )  
}
export default Results;


// const Results = ({startingPoint, routeNames}) => {
//   return(
//     <div className='results-container'>
//       <h1 className='starting-point'>Available Destinations From: {startingPoint}</h1>
//       {routeNames.map((route, i) => {
//       return(
//           <Result route={route} key={i}/>
//       )})
//     }
//     </div>
//   )  
// }
// export default Results;