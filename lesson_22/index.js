// index.js:
//     В этои файле должен происходить import классов 
//     LocationApi и Dom и работа с ними

// В index.html подключить только 1 файл - index.js

import LocationApi from "./location_api";
import Dom from "./dom";
import Weather from "./weather_api";

const loc = new LocationApi();
const dom = new Dom();
const weather = new Weather();

const btnLocation = document.getElementById("location");
const btnWeather = document.getElementById("weather");
const api_key = "6ac809cc8b65c3df15d21efbd6e9c06a";

btnLocation.addEventListener("click", () => {
	dom.showPreloader();
	loc.getMyIp()
 		.then(res => loc.getMyLocation(res.ip))
 		.then(res => dom.setCoordinates(res))
		.then(res => dom.hidePreloader())
		 
		.catch(error => console.log(error));
});

btnWeather.addEventListener("click", () => {
	dom.showPreloader();
	const inputCity = document.getElementById("input_city");
	if(inputCity.value) {
		weather.getWeather(inputCity.value, api_key)
			.then(res => weather.setWeather(res))
			.then(res => dom.hidePreloader())

			.catch(error => console.log(error));
	} else { 
		loc.getMyIp()
			.then(res => loc.getMyLocation(res.ip))
			.then(res => weather.getWeather(res.city, api_key))
			.then(res => weather.setWeather(res))
			.then(res => dom.hidePreloader())

			.catch(error => console.log(error));
	}
});

