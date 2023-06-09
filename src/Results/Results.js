import './Results.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Result from '../Result/Result';
import destniationObject from '../DestinationObject';

class Results extends Component {
  constructor(props) {
    super()
    this.state = {
      origin: props.origin,
      routes: Object.keys(props.data[props.originAbbr])
    }
  }
  render() {
    return(
      <div className='results-container'>
        <p className='starting-point'>Available Destinations From: {this.state.origin}</p>
        <div className='results-cards-container'>
          {this.state.routes.map((route, i) => {
            return(
              <Result getDestination={this.props.getDestination} 
              route={destniationObject[route]} 
              routeAbbr={route} 
              key={i}/>
            )})
          }
        </div>
        <NavLink to='/' onClick={this.props.resetResults}>
          <button className='return-home'>
            Return Home
          </button>
        </NavLink>
      </div>
    ) 
  }
}

export default Results;

// Results.propTypes = {
//   origin: PropTypes.string.isRequired,
//   availRoutes: PropTypes.arrayOf(PropTypes.string).isRequired,
//   getScheduleAndDestination: PropTypes.func.isRequired,
//   resetResults: PropTypes.func.isRequired
// }

