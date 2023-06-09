import './Dropdown.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dropdown extends Component {
  constructor() {
    super()
    this.state = {
      selection: ''
    }
  }

  changeSelection = (e) => {
    this.setState({
      selection: e.target.value
    })
  }

  render() {
    return(
      <div className='dropdown'>
        <label className='dropdown-text' htmlFor='locations'>Where are you located?</label>
        <div className='select-container'>
          <select className='select' id='locations' name='locations' 
          value={this.state.selection}
          onChange={this.changeSelection}>
            <option value=''> </option>
            <option value='BOW'>Bowen Island</option>
            <option value='DUK'>Duke Point</option>
            <option value='FUL'>Fulford Bay</option>
            <option value='HSB'>Horseshoe Bay</option>
            <option value='LNG'>Langdale</option>
            <option value='NAN'>Nanaimo</option>
            <option value='SWB'>Swartz Bay</option>
            <option value='TSA'>Tsawwassen</option>
          </select>
          {this.state.selection ? (
            <Link to={`/schedule/${this.state.selection}`} className='submit-button-click'>
              SUBMIT
            </Link>
          ) : (
            <p className='submit-button'>Please make a selection</p>
          )}
        </div>
      </div>
    );
  };
}

export default Dropdown;
