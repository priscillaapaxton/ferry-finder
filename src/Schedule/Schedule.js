import './Schedule.css';
import React, { Component } from 'react';
import ScheduleCard from '../ScheduleCard/ScheduleCard';
import BadUrl from '../BadUrl/BadUrl';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import destinationObject from '../DestinationObject';

class Schedule extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let schedule = [];
    if (this.props.originAbbr in this.props.data) {
      schedule = this.props.data[this.props.originAbbr][this.props.destinationAbbr];
    }
    let origin = destinationObject[this.props.originAbbr]
    let destination = destinationObject[this.props.destinationAbbr]
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
            <NavLink to={`/schedule/${this.props.originAbbr}`} className='back-to-results'>
              Back to Results
            </NavLink>
          </>
        )}
      </div>

    )
  }
}

export default (Schedule);

Schedule.propTypes = {
  data: PropTypes.object.isRequired,
  originAbbr: PropTypes.string.isRequired,
  destinationAbbr: PropTypes.string.isRequired
}



