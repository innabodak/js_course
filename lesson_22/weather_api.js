export default class Weather {
    constructor(){
        this.weatherBlock = document.getElementById("weather_block");
        this.weatherIcon =  document.getElementById("weather_icon");
        this.weatherImg = document.createElement("img");
       	this.description =  document.getElementById("description");
		this.temperature = document.getElementById("temperature");
		this.maxTemp = document.getElementById("max_temp");
		this.mixTemp = document.getElementById("min_temp");
		this.humidity = document.getElementById("humidity");
		this.pressure = document.getElementById("pressure");
		this.winds = document.getElementById("wind_speed");
    }

    getWeather(city, api_key){
        this.city = city;
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${api_key}`)
       	.then(res => {
			if(res.status === 200){
				return res.json();
			} 
            
            return Promise.reject(res.status);
		})
    }
    
    setWeather(weatherData){
        this.weatherBlock.classList.remove("done");
        this.iconNumber = weatherData.weather[0].icon;
        this.path = "http://openweathermap.org/img/w/" + this.iconNumber + ".png";
        this.weatherImg.setAttribute("src", this.path);
        this.weatherIcon.appendChild(this.weatherImg);

        this.description.innerHTML =  weatherData.weather[0].description;
        this.temperature.innerHTML = weatherData.main.temp + " ºC";
        this.maxTemp.innerHTML = weatherData.main.temp_max + " ºC";
        this.mixTemp.innerHTML = weatherData.main.temp_min + " ºC";
        this.humidity.innerHTML = weatherData.main.humidity + " %";
        this.pressure.innerHTML = weatherData.main.pressure + " гПа";
        this.winds.innerHTML = weatherData.wind.speed + " м/с";
    }
}