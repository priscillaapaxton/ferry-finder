import './App.css';
import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import { getFerryData } from '../apiCalls';
import destniationObject from '../DestinationObject';

import Header from '../Header/Header';
import Dropdown from '../Dropdown/Dropdown';
import Results from '../Results/Results';
import Schedule from '../Schedule/Schedule';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: {},
      origin: '',
      startingPointAbbr: '',
      destination: '',
      availRoutes: [],
      selectedSchedule: [],
      error: '',
    }
  }

  componentDidMount() {
    getFerryData()
    .then(data => {
      this.setState({
        data: data.schedule
      })
    })
    .catch(error => {
      this.setState({
        error: error
      })
    })
  }

  getAvailRoutes = (selection) => {
    if(selection) {
      this.setState({
        availRoutes: Object.keys(this.state.data[selection])
      })
    }
  }

  setOrigin = (selection) => {
    this.setState({
      origin: destniationObject[selection],
      startingPointAbbr: selection,
    })
  }

  getScheduleAndDestination = (selection, destination) => {
    this.setState({
      selectedSchedule: this.state.data[this.state.startingPointAbbr][selection].sailings,
      destination: destination
    })
  }

  resetResults = () => {
    this.setState({
      origin: '',
      availRoutes: [],
      startingPointAbbr: '',
      destination: '',
      selectedSchedule: []
    })
  }

  render() {
    return(
      <>
        <Header resetResults={this.resetResults}/>
        <main className='app'>
          <Route 
            exact path='/schedule/:abbreviation' 
            render={() => {
              return <Schedule origin={this.state.origin} destination={this.state.destination} schedule={this.state.selectedSchedule}/>
            }} />
          <Route 
          exact path='/' 
          render={() => (
            !this.state.origin.length > 0 ? (
              <div className='dropdown-container'>
                <Dropdown setOrigin={this.setOrigin} getAvailRoutes={this.getAvailRoutes}/>
              </div>
            ) : (
              <Results origin={this.state.origin} availRoutes={this.state.availRoutes} getScheduleAndDestination={this.getScheduleAndDestination}/>
            )
          )} />
        </main>
      </>
    )
  }
}

export default App;
