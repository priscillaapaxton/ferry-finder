import './Main.css';
import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import Results from '../Results/Results';
import PropTypes from 'prop-types';

const Main = ({ origin, setOrigin, getDestination,resetResults, originAbbr, data }) => {
  return !origin.length ? (
    <Dropdown setOrigin={setOrigin} />
  ) : (
    <Results 
    origin={origin} 
    getDestination={getDestination} 
    resetResults={resetResults}
    originAbbr={originAbbr} 
    data={data}
    />
    ); 
};

export default Main;

// Main.propTypes = {
//   origin: PropTypes.string.isRequired,
//   setOrigin: PropTypes.func.isRequired,
//   getAvailRoutes: PropTypes.func.isRequired,
//   availRoutes: PropTypes.arrayOf(PropTypes.string).isRequired,
//   getScheduleAndDestination: PropTypes.func.isRequired,
//   resetResults: PropTypes.func.isRequired
// }
