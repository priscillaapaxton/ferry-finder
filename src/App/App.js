import './App.css';
import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import { getFerryData } from '../apiCalls';
import destniationObject from '../DestinationObject';

import Header from '../Header/Header';
// import Dropdown from '../Dropdown/Dropdown';
// import Results from '../Results/Results';
import Schedule from '../Schedule/Schedule';
import Main from '../Main/Main';
import Error from '../Error/Error';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: {},
      origin: '',
      originAbbr: '',
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
        error: `Error: ${error.message}`
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
      originAbbr: selection,
    })
  }

  getScheduleAndDestination = (selection, destination) => {
    this.setState({
      selectedSchedule: this.state.data[this.state.originAbbr][selection].sailings,
      destination: destination
    })
  }

  resetResults = () => {
    this.setState({
      origin: '',
      availRoutes: [],
      originAbbr: '',
      destination: '',
      selectedSchedule: []
    })
  }

  resetSchedule = () => {
    this.setState({
      selectedSchedule: [],
      destination: ''
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
              return <Schedule origin={this.state.origin} destination={this.state.destination} schedule={this.state.selectedSchedule} resetSchedule={this.resetSchedule} error={this.state.error}/>
            }} />
          <Route 
          exact path='/' 
          render={() => {
            return this.state.error ? (
              <Error />
            ) : (
              <Main origin={this.state.origin} setOrigin={this.setOrigin} getAvailRoutes={this.getAvailRoutes} availRoutes={this.state.availRoutes} getScheduleAndDestination={this.getScheduleAndDestination} resetResults={this.resetResults} />
            );
          }} />
        </main>
      </>
    )
  }
}

export default App;


