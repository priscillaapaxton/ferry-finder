import './Main.css';
import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import Results from '../Results/Results';
import PropTypes from 'prop-types';

const Main = ({origin, setOrigin, getAvailRoutes, availRoutes, getScheduleAndDestination, resetResults}) => {
  return !origin.length ? (
    <Dropdown setOrigin={setOrigin} getAvailRoutes={getAvailRoutes}/>
  ) : (
    <Results origin={origin} availRoutes={availRoutes} getScheduleAndDestination={getScheduleAndDestination} resetResults={resetResults}/>
    ); 
};

export default Main;

Main.propTypes = {
  origin: PropTypes.string.isRequired,
  setOrigin: PropTypes.func.isRequired,
  getAvailRoutes: PropTypes.func.isRequired,
  availRoutes: PropTypes.arrayOf(PropTypes.string).isRequired,
  getScheduleAndDestination: PropTypes.func.isRequired,
  resetResults: PropTypes.func.isRequired
}
