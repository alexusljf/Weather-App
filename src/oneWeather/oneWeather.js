const apiKey = process.env.REACT_APP_API_KEY;
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`); // use fetch to fetch data from the apiURL, await waits for the response
    if(response.status == 404){ // if unable to fetch, display error message and hide the weather section div
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weatherSection").style.display = "none";
        document.querySelector(".headerCountry").style.display = "none";
    }
    else{ // else we are able to fetch so don't show the error message
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weatherSection").style.display = "block";        
        document.querySelector(".headerCountry").style.display = "block";
    }
    var data = await response.json(); // store the fetched data
    
    console.log(data); 

    document.querySelector(".weatherCondition").innerHTML = "Weather Conditions: " + data.weather[0].main + ", " + data.weather[0].description;
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".feelsLike").innerHTML = "Feels Like " + data.main.feels_like + "°C";
    document.querySelector(".humidity").innerHTML = "Humidity: " + data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = "Wind Speed: " + data.wind.speed + "km/h";
    
    document.querySelector(".headerCountry").innerHTML = data.main.temp + "°C  " + data.sys.country;

    const imgURL = "https://openweathermap.org/img/wn/" + data.weather[0].icon +"@2x.png"

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
        if((data.main.temp >= 33.5) || (data.main.feels_like >= 33)){
            document.querySelector(".recommendation").innerHTML = "Current temperature might be hot! Cloudy too so it may be ok to run now"    
        }
        else{
            document.querySelector(".recommendation").innerHTML = "Cloudy, it might rain but it should be okay to run!"
        }
    }
    else if(data.weather[0].main == "Clear"){
        if((data.main.temp >= 33.5) || (data.main.feels_like >= 33)){
            document.querySelector(".recommendation").innerHTML = "Too hot! Might not be a good idea to go run now!"    
        }
        else{
            document.querySelector(".recommendation").innerHTML = "Clear Weather! Should be okay to run!!"
        }
        
    }
    document.querySelector(".weatherIcon").src = imgURL;
}

export default checkWeather;