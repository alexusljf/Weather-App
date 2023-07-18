const apiKey = process.env.REACT_APP_API_KEY;
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// function to check the weather from openWeather

async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`); // use fetch to fetch data from the apiURL, await waits for the response
    if(response.status === 404){ // if unable to fetch, display error message and hide the weather section div
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

    const imgURL = "https://openweathermap.org/img/wn/" + data.weather[0].icon +"@2x.png";

    // create a recommendation string then append the appropriate strings based on weather condition
    var recommendationString = "";
    var flag=1; // set flag to 0 for bad conditions

    switch(data.weather[0].main){ // switch statement for weather first
        case "Rain":
            recommendationString = recommendationString.concat("It's raining! ");
            flag = 0;
            break;
        case "Drizzle":
            recommendationString = recommendationString.concat("It's drizzling! ");
            break;
        case "Clouds":
            recommendationString = recommendationString.concat("It's cloudy. ");
            break;
        case "Thunderstorm":
            recommendationString = recommendationString.concat("Thunderstorm!! ");
            flag = 0;
            break;        
        case "Clear":
            recommendationString = recommendationString.concat("Skies are clear. ");
            break;   
        case "Snow":
            recommendationString = recommendationString.concat("It's snowing! ");
            break;   
        case "Smoke":
        case "Haze":
        case "Mist":
        case "Dust":
        case "Fog":
        case "Sand":
        case "Ash":
        case "Squall":
        case "Tornado":
            recommendationString = recommendationString.concat("Atmosphere might not be too good right now. ");
            flag = 0;
            break;                            
    }
    // temperatures
    if(flag !== 0){
        if(data.main.temp >= 33.5){
            recommendationString = recommendationString.concat("Current temperature might be too hot to run! ");
            flag = 0;
        }
        else if (data.main.feels_like >= 33){
            recommendationString = recommendationString.concat("Current temperature might feel too hot to run! ");
            flag = 0;
        }
        else if(data.main.temp <= -18){
            recommendationString = recommendationString.concat("Current temperature might be too cold to run! ");
            flag = 0;
        }
        else if (data.main.feels_like <= -18){
            recommendationString = recommendationString.concat("Current temperature might feel too cold to run! ");
            flag = 0;
        }
    }

    if(flag === 0){
        recommendationString = recommendationString.concat("Maybe don't run now!");    
    }
    else{
        recommendationString = recommendationString.concat("Should be okay to run!!");    
    }
    console.log(recommendationString);
    console.log(flag);
    document.querySelector(".recommendation").innerHTML = recommendationString;
    document.querySelector(".weatherIcon").src = imgURL;
}

export default checkWeather;