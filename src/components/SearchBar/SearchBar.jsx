import React, { useState, useContext } from "react";
import { NightModeContext } from '../../components/NightModeToggle/NightModeContext';
import './SearchBar.scss';

// The SearchBar component allows users to input a city and triggers the onSearch function, which updates the city state in the App component. 

function SearchBar({ onSearch }) {
  const { isNightMode } = useContext(NightModeContext);
  const [inputCity, setInputCity] = useState("");

  const handleInputChange = (e) => {
    setInputCity(e.target.value);
  };

  // In App.js, onSearch={handleSearch} was passed in. So this is handleSearch(inputCity), which calls setCity(inputCity).
  const handleSearch = () => {
    onSearch(inputCity);
  };
  // Allows use of Enter key instead of clicking on Search Button
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div>
    <div className = "searchDiv">
      <input type="text" value={inputCity} onChange={handleInputChange} placeholder = "Enter your City here!" className="searchBar" onKeyDown = {handleKeyDown}/>
      <button onClick={handleSearch} className={isNightMode === false ? "searchButtonDay" : "searchButtonNight"}> Search </button>
    </div>
    <div className={isNightMode === false ? "errorDay" : "errorNight"}>
        <p>Invalid City Name! <br/>Type another name to continue</p>
    </div>
    </div>

  );
}

export default SearchBar;
