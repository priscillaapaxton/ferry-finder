import './App.css';
import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import { getFerryData } from '../apiCalls';
import Header from '../Header/Header';
import Schedule from '../Schedule/Schedule';
import BadUrl from '../BadUrl/BadUrl';
import Error from '../Error/Error';
import Results from '../Results/Results';
import Dropdown from '../Dropdown/Dropdown';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: null,
      error: '',
    }
  };

  componentDidMount() {
    getFerryData()
    .then(data => {
      this.setState({
        data: data
      })
    })
    .catch(error => {
      this.setState({
        error: `Error: ${error.message}`
      })
    })
  }
              

  render() {
    return(
      <>
        <Header />
        <main className='app'>
          <Switch>
            <Route 
              exact path='/schedule/:originAbbr/:routeAbbr' 
              render={({match}) => {
                const originAbbr = match.params.originAbbr
                const routeAbbr = match.params.routeAbbr
                if(this.state.error.length) {
                  return <Error />
                }
                if(!this.state.data) {
                  return <div className='starting-point'>Loading...</div>
                }
                return <Schedule 
                  data={this.state.data}
                  originAbbr={originAbbr}
                  destinationAbbr={routeAbbr}
                />
              }} />
            <Route 
              exact path='/schedule/:originAbbr'
              render={({match}) => {
                const originAbbr = match.params.originAbbr
                if(this.state.error.length) {
                  return <Error />
                }
                if(!this.state.data) {
                  return <div className='starting-point'>Loading...</div>
                }
                return <Results
                  originAbbr={originAbbr}
                  data={this.state.data}
                />
              }
            }
            />
            <Route 
            exact path='/' render={() => {
              return this.state.error ? (
                <Error />
              ) : (
                <Dropdown />
              );
            }} />
            <Route path="*" render={() => {
                return (
                  <BadUrl />)
              }} />
          </Switch>
        </main>
      </>
    );
  };
}

export default App;


