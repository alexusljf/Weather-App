import './weather.css';

function weather(){
    return(
        <div className = "weatherSection">
            <p className= "weatherCondition"> weather (eg. rain) </p>
            <h1 className = "temp">Temparature</h1>
            <h3 className = "feelsLike">Feels Like </h3>
            <h2 className = "city">City Name</h2>
            <p className = "recommendation"> Placeholder </p>
            <div className = "details">
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
    )
}
export default weather;