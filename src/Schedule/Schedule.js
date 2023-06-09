import './Schedule.css';
import React from 'react';
import ScheduleCard from '../ScheduleCard/ScheduleCard';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Error from '../Error/Error';

const Schedule = ({ origin, destination, resetSchedule, error, data, originAbbr, destinationAbbr }) => {
  return(
    <div className='schedule-container'>
     {error.length ? (
        <Error />
      ) : (
        <>
          <p className='schedule-title'>Current ferry schedules over the next 24 hours from {origin} to {destination}</p>
          {data[originAbbr][destinationAbbr].sailings.map((sched, i) => (
            <ScheduleCard {...sched} key={i} />
          ))}
        </>
      )}
      <NavLink to='/'><button className='back-to-results' onClick={resetSchedule}>Back to Results
        </button></NavLink>
    </div>
  )
}

export default Schedule;

// Schedule.propTypes = {
//   origin: PropTypes.string.isRequired,
//   destination: PropTypes.string.isRequired,
//   schedule: PropTypes.arrayOf(PropTypes.object).isRequired,
//   resetSchedule: PropTypes.func.isRequired,
//   error: PropTypes.string.isRequired
// }