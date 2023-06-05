import React, { useState } from "react";
import "./App.css";
import Weather from "./components/Weather/weather";
import Header from "./components/header/header";
import checkWeather from "./oneWeather/oneWeather";
import SearchBar from "./components/SearchBar/SearchBar";

// The App component maintains the city state and passes it to the Weather component

function App() {
  const [city, setCity] = useState("Singapore"); // city will store the current city value, default set to SG

  const handleSearch = (inputCity) => {
    setCity(inputCity);
  };
  
  // the search bar will read the user's input.
  // the city state value will be passed to the weather component.

checkWeather(city);
  return (
    <div className="App">
      <Header city={city}/>
      <h1 className = "placeholder"> 
        Not in Singapore? Enter your City here!
      </h1>
      <SearchBar onSearch={handleSearch} />
      <Weather city={city} /> 
    </div>
  );
}
export default App;
