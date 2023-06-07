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
      startingPoint: '',
      startingPointAbbr: '',
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

  setStartingPoint = (selection) => {
      this.setState({
        startingPoint: destniationObject[selection],
        startingPointAbbr: selection,
      })
  }

  getSchedule = (selection) => {
    this.setState({
      selectedSchedule: this.state.data[this.state.startingPointAbbr][selection].sailings
    })
  }

  resetResults = () => {
    this.setState({
      startingPoint: '',
      availRoutes: [],
      startingPointAbbr: ''
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
              return <Schedule schedule={this.state.selectedSchedule}/>
            }} />
          <Route 
          exact path='/' 
          render={() => (
            !this.state.startingPoint.length > 0 ? (
              <Dropdown setStartingPoint={this.setStartingPoint} getAvailRoutes={this.getAvailRoutes}/>
            ) : (
              <Results startingPoint={this.state.startingPoint} availRoutes={this.state.availRoutes} getSchedule={this.getSchedule}/>
            )
          )} />
        </main>
      </>
    )
  }
}

export default App;


// render() {
//   return(
//     <>
//       <Header resetResults={this.resetResults}/>
//       <main className='app'>
//         <Route />
//         <Route exact path='/' render={() => (
//           !this.state.routeNames.length > 0 ? (
//             <Dropdown setStartingPoint={this.setStartingPoint} getAvailRoutes={this.getAvailRoutes}/>
//           ) : (
//             <Results startingPoint={this.state.startingPoint} routeNames={this.state.routeNames} getSchedule={this.getSchedule}/>
//           )
//         )} />
//       </main>
//     </>
//   )
// }
// }