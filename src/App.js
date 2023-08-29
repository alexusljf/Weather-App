import React, { useState } from "react";
import "./App.scss";
import Weather from "./components/Weather/weather";
import Header from "./components/header/Header";
import checkWeather from "./openWeather/openWeather";
import SearchBar from "./components/SearchBar/SearchBar";
import { NightModeContext } from './components/NightModeToggle/NightModeContext';

// The App component maintains the city state and passes it to the Weather component

function App() {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode((prevMode) => !prevMode);
  };
  const [city, setCity] = useState("Singapore"); // city will store the current city value, default set to SG

  const handleSearch = (inputCity) => {
    setCity(inputCity);
  };
  
  // the search bar will read the user's input.
  // the city state value will be passed to the weather component.

  checkWeather(city, isNightMode);
  return (
    <NightModeContext.Provider value={{ isNightMode, toggleNightMode }}>
    <div className={isNightMode === false ? "AppDay" : "AppNight"}>
      <Header city={city}/>
      <h1 className = "placeholder"> Not in Singapore? Search for your City! </h1>
      <SearchBar onSearch={handleSearch} />
      <Weather city={city} /> 
    </div>
    </NightModeContext.Provider>
  );
}
export default App;
