import React, { useState, useContext } from "react";
import { NightModeContext } from '../../components/NightModeToggle/NightModeContext';
import './SearchBar.scss';

var geoData = require('./geo.json')

// Function to get unique values from an array
const getUniqueValues = (arr) => [...new Set(arr)];

// The SearchBar component allows users to input a city and triggers the onSearch function, which updates the city state in the App component. 
function SearchBar({ onSearch }) {
  const { isNightMode } = useContext(NightModeContext);
  const [inputCity, setInputCity] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  const handleInputChange = (e) => {
    // when text input is used, reset the selected coutnry and state.
    setSelectedCountry(null);
    setSelectedState(null);
    setInputCity(e.target.value);
  };

  const handleSearch = () => {
    if(selectedCountry && selectedState) {
      const searchQuery = `${selectedState}, ${selectedCountry}`;
      onSearch(searchQuery);
    }
    else if(selectedCountry && selectedState === null){
      onSearch(selectedCountry);
    }
    else{
      onSearch(inputCity);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  // Extract unique countries and states from geoData
  const countries = getUniqueValues(Object.keys(geoData)).sort();
  const filteredStates = selectedCountry ? geoData[selectedCountry].sort() : [];
  const states = getUniqueValues(filteredStates);

  return (
      <div className="searchDiv">
        <div className="searchInner">
          <input
            type="text"
            value={inputCity}
            onChange={handleInputChange}
            placeholder="Enter your City here!"
            className="searchBar"
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={handleSearch}
            className={isNightMode === false ? "searchButtonDay" : "searchButtonNight"}
          >
            Search
          </button>
        </div>

      <div className="dropdownDiv">
        <select
          onChange={(e) => {
            const country = e.target.value;
            setSelectedCountry(country);
            setSelectedState(null); // Reset state when country changes
          }}
          value={selectedCountry}
          className="dropdownDivSelectCountry"
        >
          <option value="" enabled>Select Country</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>

        <select
          onChange={(e) => setSelectedState(e.target.value)}
          value={selectedState}
          className="dropdownDivSelectState"
        >
          <option value="" enabled>Select State</option>
          {states.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      <div className={isNightMode === false ? "errorDay" : "errorNight"}>
        <p>
          We are unable to fetch data for that city. <br />
          Please enter another name.
        </p>
      </div>
    </div>
  );
}

export default SearchBar;
