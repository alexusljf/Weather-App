import React, { useState } from "react";
import './SearchBar.css';

// The SearchBar component allows users to input a city and triggers the onSearch function, which updates the city state in the App component. 

function SearchBar({ onSearch }) {
  const [inputCity, setInputCity] = useState("");

  const handleInputChange = (e) => {
    setInputCity(e.target.value);
  };

  const handleSearch = () => {
    onSearch(inputCity);
  };

  return (
    <div>
    <div className = "search">
      <input type="text" value={inputCity} onChange={handleInputChange} className="searchBar"/>
      <button onClick={handleSearch} className="searchButton"> Search </button>
    </div>
    <div className="error">
        <p>Invalid City Name</p>
    </div>
    </div>

  );
}

export default SearchBar;
