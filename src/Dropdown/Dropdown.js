import './Dropdown.css';
import React from 'react';

const Dropdown = () => {
  return(
    <>
      <label for="locations">Where are you located?</label>
      <select id="locations" name="locations">
        <option value="BOW">Bowen Island</option>
        <option value="DUK">Duke Point</option>
        <option value="FUL">Fulford Bay</option>
        <option value="HSB">Horseshoe Bay</option>
        <option value="LNG">Langdale</option>
        <option value="NAN">Nanaimo</option>
        <option value="SWB">Swartz Bay</option>
        <option value="TSA">Tsawwassen</option>
      </select>
    </>
  )
}

export default Dropdown