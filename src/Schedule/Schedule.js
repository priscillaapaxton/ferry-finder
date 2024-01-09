import './Schedule.css';
import React from 'react';
import ScheduleCard from '../ScheduleCard/ScheduleCard';
import BadUrl from '../BadUrl/BadUrl';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import destinationObject from '../DestinationObject';

const Schedule = ({ data, originAbbr, destinationAbbr }) => {
  let schedule = [];
  if (originAbbr in data) {
    schedule = data[originAbbr][destinationAbbr];
  }
  let origin = destinationObject[originAbbr]
  let destination = destinationObject[destinationAbbr]
  return (
    <div className='schedule-container'>
      {!origin || !destination ? (
        <BadUrl />
      ) : (
        <>
          <p className='schedule-title'>Current ferry schedules over the next 24 hours from {origin} to {destination}</p>
          {schedule.sailings.map((sched, i) => (
            <ScheduleCard {...sched} key={i} />
          ))}
          <NavLink to={`/schedule/${originAbbr}`} className='back-to-results'>
            Back to Results
          </NavLink>
        </>
      )}
    </div>
  );
};

export default (Schedule);

Schedule.propTypes = {
  data: PropTypes.object.isRequired,
  originAbbr: PropTypes.string.isRequired,
  destinationAbbr: PropTypes.string.isRequired
};

