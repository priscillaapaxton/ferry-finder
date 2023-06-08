import './Schedule.css';
import React from 'react';
import ScheduleCard from '../ScheduleCard/ScheduleCard';
import { NavLink } from 'react-router-dom';

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