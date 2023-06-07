import './App.css';
import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import { getFerryData } from '../apiCalls';
import destniationObject from '../DestinationObject';

import Header from '../Header/Header';
import Dropdown from '../Dropdown/Dropdown';
import Results from '../Results/Results';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: {},
      startingPoint: '',
      availRoutes: [],
      routeNames: [],
      selectedSchedule: [],
      error: '',
      loading: true
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

  setStartingPoint = (selection) => {
    this.setState({
      startingPoint: destniationObject[selection],
      availRoutes: Object.keys(this.state.data[selection])
    })
  }

  getAvailRoutes = () => {
      this.setState({
        routeNames: this.state.availRoutes.map(route => {
          return destniationObject[route]
        })
      })
  }

  getSchedule = (selection) => {
    console.log('app', selection)
  }

  resetResults = () => {
    this.setState({
      startingPoint: '',
      availRoutes: [],
      routeNames: []
    })
  }

  render() {
    return(
      <>
        <Header resetResults={this.resetResults}/>
        <main className='app'>
          <Route />
          <Route exact path='/' render={() => (
            !this.state.routeNames.length > 0 ? (
              <Dropdown setStartingPoint={this.setStartingPoint} getAvailRoutes={this.getAvailRoutes}/>
            ) : (
              <Results startingPoint={this.state.startingPoint} routeNames={this.state.routeNames} getSchedule={this.getSchedule}/>
            )
          )} />
        </main>
      </>
    )
  }
}

export default App;
