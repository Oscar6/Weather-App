const apiKey = "538b6b2c93c624e744e7589cec1a735d";

let searchButton = document.getElementById("search-btn");
let searchInput = document.getElementById("search-city");
let cityName = document.getElementById("city-name");
let icon = document.getElementById("icon");
let temperature = document.getElementById("temp");
let humidity = document.getElementById("humid");
let wind = document.getElementById("wind");

searchButton.addEventListener("click", weatherDetails);
searchInput.addEventListener("keyup", pressedEnter);

function pressedEnter(event) {
  if (event.key === "Enter") {
    weatherDetails();
  }
}


function weatherDetails() {
    if (searchInput.value === "") {
    
    }else {
      let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&appid=" + apiKey;
        xhrAsync(searchLink, jsonResponse);
    }
}

function jsonResponse(response) {
    let jsonObject = JSON.parse(response);
    cityName.innerHTML = jsonObject.name;
    icon.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
    temperature.innerHTML = Math.floor(1.8 * (jsonObject.main.temp - 273.15)) + 32 + "° F";
    humidity.innerHTML = "Humidity: " + jsonObject.main.humidity + "%";
    wind.innerHTML = "Wind Speed: " + Math.floor(jsonObject.wind.speed * 3600 / 1610.3 * 1000/1000) + " mph" + "<br/>";
}


function xhrAsync(url, callback){
    console.log("weather app working");
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => { 
        if (xhr.readyState == 4 && xhr.status == 200)
            callback(xhr.responseText);
    }
    xhr.open("GET", url, true); 
    xhr.send();
}