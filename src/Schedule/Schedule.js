import './Schedule.css';
import React from 'react';
import ScheduleCard from '../ScheduleCard/ScheduleCard';
import { NavLink } from 'react-router-dom';

const Schedule = ({ schedule }) => {
  return(
    <div className='schedule-container'>
      <h1></h1>
      {schedule.map((sched, i) => {
        console.log(sched)
        return(
          <ScheduleCard {...sched} key={i} />
        )})
      }
      <NavLink to='/'>Back to Results</NavLink>
    </div>
  )
}

export default Schedule;