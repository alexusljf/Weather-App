const apiKey = process.env.REACT_APP_API_KEY;
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Singapore";

async function checkWeather(){
    const response = await fetch(apiURL + `&appid=${apiKey}`); // use fetch to fetch data from the apiURL, await waits for the response
    var data = await response.json(); // store the fetched data in 
    
    console.log(data); 

    document.querySelector(".weatherCondition").innerHTML = "Weather Conditions: " + data.weather[0].main;
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".feelsLike").innerHTML = "Feels Like " + data.main.feels_like + "°C";
    document.querySelector(".humidity").innerHTML = "Humidity: " + data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = "Wind Speed: " +data.wind.speed + "km/h";

    if(data.weather[0].main == "Rain"){
        document.querySelector(".recommendation").innerHTML = "Don't run! It's raining!"
    }
    else if(data.weather[0].main == "Drizzle"){
        document.querySelector(".recommendation").innerHTML = "Don't run! It's drizzling!"
    }
    else if(data.weather[0].main == "Mist"){
        document.querySelector(".recommendation").innerHTML = "Misty.. Maybe wait a little before running"
    }
    else if(data.weather[0].main == "Clouds"){
        document.querySelector(".recommendation").innerHTML = "Cloudy, it might rain but it should be okay to run!"
    }
    else if(data.weather[0].main == "Clear"){
        if((data.main.temp >= 33) || (data.main.feels_like >= 33)){
            document.querySelector(".recommendation").innerHTML = "Too hot! Might not be a good idea to go run now!"    
        }
        else{
            document.querySelector(".recommendation").innerHTML = "Should be okay to run!!"
        }
        
    }
    /* change pictures
    if(data.weather[0].main == "Clouds"){
        document.querySelector(".weatherIcon").src = "../Weather/images/clouds2.png";
    }
    else if(data.weather[0].main == "Clear"){
        document.querySelector(".weatherIcon").src = "../Weather/images/clear.png";
    }
    else if(data.weather[0].main == "Mist"){
        document.querySelector(".weatherIcon").src = "../Weather/images/mist.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        document.querySelector(".weatherIcon").src = "../Weather/images/drizzle.png";
    }
    else if(data.weather[0].main == "Rain"){
        document.querySelector(".weatherIcon").src = "../Weather/images/rain.png";
    }
    */
}

export default checkWeather;