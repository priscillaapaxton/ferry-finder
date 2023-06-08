import './Schedule.css';
import React from 'react';
import ScheduleCard from '../ScheduleCard/ScheduleCard';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Schedule = ({ origin, destination, schedule }) => {
  return(
    <div className='schedule-container'>
      <h1>Current ferry schedules from {origin} to {destination}</h1>
      {schedule.map((sched, i) => {
        return(
          <ScheduleCard {...sched} key={i} />
        )})
      }
      <NavLink to='/'>Back to Results</NavLink>
    </div>
  )
}

export default Schedule;

Schedule.propTypes = {
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  schedule: PropTypes.arrayOf(PropTypes.object).isRequired
}