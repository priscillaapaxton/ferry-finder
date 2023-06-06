import './App.css';
import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import { getFerryData } from '../apiCalls';

import Header from '../Header/Header';
import Dropdown from '../Dropdown/Dropdown';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: {},
      selectedLocation: {},
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

  render() {
    return(
      <>
        <Header />
        <main className='app'>
          <Route exact path='/' render={() => {
            return(
              <Dropdown />
            )
          }} />

        </main>
      </>
    )
  }
}

export default App;
