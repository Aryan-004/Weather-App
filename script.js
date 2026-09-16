const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")
const temperature = document.querySelector(".temp")
const city = document.querySelector(".city")
const humidity = document.querySelector(".humidity")
const wind = document.querySelector(".wind")

const apiKey = "YOUR OWN API KEY";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(cityName) {
    const url = apiURL + cityName + `&appid=${apiKey}`;
    const response = await fetch(url);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        return;
    }
    const data = await response.json();

    // console.log(data);
    console.log(data.name);
    console.log(data.coord);
    console.log(data.main.temp);
    //temperature.innerHTML = Math.round(data.main.temp) + "°c";
    temperature.innerHTML = Math.round(data.main.temp) + "°c";
    wind.innerHTML = data.wind.speed + " km/hr";
    humidity.innerHTML = data.main.humidity + "%"

    city.innerHTML = cityName;

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
    }

    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    }

    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
    }

    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
    }

    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "images/snow.png";
    }

    document.querySelector(".weather").style.display = "block";

}

searchButton.addEventListener("click", () => {
    const cityName = searchBox.value;
    checkWeather(cityName);
    // console.log(url)


})


/* This is .then() approach which i used as my first go through 

        // .then() approach
function checkWeather(cityName) {
    const url = apiURL + cityName + `&appid=${apiKey}`;

    fetch(url)
        .then(response => {
            if (response.status == 404) {
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
                return;
            }

            document.querySelector(".error").style.display = "none";
            return response.json();
        })
        .then(data => {
            console.log(data.name);
            console.log(data.coord);
            console.log(data.main.temp);

            temperature.innerHTML = Math.round(data.main.temp) + "°c";
            wind.innerHTML = data.wind.speed + " km/hr";
            humidity.innerHTML = data.main.humidity + "%";

            city.innerHTML = cityName;

            if (data.weather[0].main == "Clouds") {
                weatherIcon.src = "images/clouds.png";
            }
            else if (data.weather[0].main == "Clear") {
                weatherIcon.src = "images/clear.png";
            }
            else if (data.weather[0].main == "Drizzle") {
                weatherIcon.src = "images/drizzle.png";
            }
            else if (data.weather[0].main == "Mist") {
                weatherIcon.src = "images/mist.png";
            }
            else if (data.weather[0].main == "Rain") {
                weatherIcon.src = "images/rain.png";
            }
            else if (data.weather[0].main == "Snow") {
                weatherIcon.src = "images/snow.png";
            }

            document.querySelector(".weather").style.display = "block";
        });
}

*/