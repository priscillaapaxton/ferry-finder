import './Main.css';
import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import PropTypes from 'prop-types';

const Main = () => {
  return  (
    <Dropdown />
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
