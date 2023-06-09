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
      destinationAbbr: '',
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

  setOrigin = (selection) => {
    this.setState({
      origin: destniationObject[selection],
      originAbbr: selection,
    })
  }

  getDestination = (selection, destination) => {
    this.setState({
      destination: destination,
      destinationAbbr: selection
    })
  }

  resetResults = () => {
    this.setState({
      origin: '',
      originAbbr: '',
      destination: '',
    })
  }

  resetSchedule = () => {
    this.setState({
      destination: '',
      destinationAbbr: ''
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
              return <Schedule origin={this.state.origin} 
              destination={this.state.destination} 
              resetSchedule={this.resetSchedule}
              error={this.state.error}
              data={this.state.data}
              originAbbr={this.state.originAbbr}
              destinationAbbr={this.state.destinationAbbr}
              />
            }} />
          <Route 
          exact path='/' 
          render={() => {
            return this.state.error ? (
              <Error />
            ) : (
              <Main origin={this.state.origin} setOrigin={this.setOrigin}
              availRoutes={this.state.availRoutes} 
              getDestination={this.getDestination} 
              resetResults={this.resetResults}
              originAbbr={this.state.originAbbr} 
              data={this.state.data}
              />
            );
          }} />
        </main>
      </>
    )
  }
}

export default App;


