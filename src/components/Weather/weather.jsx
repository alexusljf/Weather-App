import React, { useEffect } from "react";
import checkWeather from "../../openWeather/openWeather";
import './weather.css';

// The Weather component will re-render when the city prop changes and call the checkWeather function with the updated city value.

function Weather({ city }) {
    useEffect(() => {checkWeather(city);}, [city]);

    // placeholder fields

    return(
        <div className = "weatherSection">
            <h1 className = "city">City Name</h1>
            <img src="./placeholder.png" className="weatherIcon"/>
            <div className = "details">
                <p className= "weatherCondition"> weather (eg. rain) </p>
                <div className= "tempDiv">
                    <p className = "temp">Temparature</p>
                    <p className = "feelsLike">Feels Like </p>
                </div>
                <div className = "humidWind">
                    <div className='col'>
                        <div>
                            <p className = "humidity"> Humidity% </p>
                        </div>
                    </div>
                    <div className='col'>
                        <div>
                            <p className = "wind"> Wind Speed km/h </p>
                        </div>
                    </div>
                </div>
            </div>
            <p className = "recommendation"> Placeholder </p>
        </div>
    )
}
export default Weather;