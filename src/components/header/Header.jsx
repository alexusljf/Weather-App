import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NightModeContext } from '../../components/NightModeToggle/NightModeContext';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import './Header.scss';
import React, { useEffect, useContext } from "react";
import checkWeather from "../../openWeather/openWeather";
import NightModeSwitch from '../NightModeToggle/NightModeSwitch'

function Header({ city }) {
    const { isNightMode } = useContext(NightModeContext);
    useEffect(() => {checkWeather(city);}, [city]);

    return(
        <>
        <div className = {isNightMode === false ? "topBarDay" : "topBarNight"}>
            <div className='leftSection'>
                <h1 className = {isNightMode === false ? "shouldDay" : "shouldNight"}>Should I Run? 🏃‍♂️</h1>
                <h1 className = {isNightMode === false ? "headerCountryDay" : "headerCountryNight"}> country code </h1>
            </div>
            <div className="rightSection">
                <NightModeSwitch className = "switchHeader"/>
                <a href="https://github.com/alexusljf" target="_blank">
                    <FontAwesomeIcon icon={faSquareGithub} className = {isNightMode === false ? "faiconDay" : "faiconNight"} />
                </a>
            </div>
        </div>
        </>
    )
}
export default Header;