import './Dropdown.css';
import React, { Component } from 'react';

class Dropdown extends Component {
  constructor() {
    super()
    this.state = {
      selection: '',
    }
  }

  changeSelection = (e) => {
    this.setState({
      selection: e.target.value
    })
    this.props.getAvailRoutes(e.target.value)
  }

  makeSelection = (e) => {
    e.preventDefault()
    if(this.state.selection.length > 1){
    this.props.setOrigin(this.state.selection)
    }
    this.setState({
      selection: ''
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
            <option></option>
            <option value='BOW'>Bowen Island</option>
            <option value='DUK'>Duke Point</option>
            <option value='FUL'>Fulford Bay</option>
            <option value='HSB'>Horseshoe Bay</option>
            <option value='LNG'>Langdale</option>
            <option value='NAN'>Nanaimo</option>
            <option value='SWB'>Swartz Bay</option>
            <option value='TSA'>Tsawwassen</option>
          </select>
          <button className='submit-button' onClick={this.makeSelection}>SUBMIT</button>
        </div>
      </div>
    )
  }
}

export default Dropdown;