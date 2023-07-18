import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import './header.css';
import React, { useEffect } from "react";
import checkWeather from "../../openWeather/openWeather";

function Header({ city }) {
    useEffect(() => {checkWeather(city);}, [city]);

    return(
        <>
        <div className = "topBar">
            <div className='leftSection'>
                <h1 className = "should">Should I Run Today? 🏃‍♂️</h1>
                <h1 className = "headerCountry"> country code </h1>
            </div>
            <div className="rightSection">
                <a href="https://github.com/alexusljf" target="_blank">
                <FontAwesomeIcon icon={faSquareGithub} className = "faicon" />
                </a>
            </div>
        </div>
        </>
    )
}
export default Header;