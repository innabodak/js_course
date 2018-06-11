// dom.js:
//     Должен содержать класс для работы с dom - Dom. 
//     Также в этом файле должен быть export Dom класса.

// class Dom:
//     Должен содержать 3 метода:
//         1. showPreloader - работатет с dom елементом preloader
//     и показывает его
//         2. hidePreloader - работатет с dom елементом preloader 
//     и скрывает его
//         3. setCoordinates(coordinates) - работатет с dom елементом 
//     в которые надо поместить текст с коодинатами


export default class Dom {
	constructor(){
		this.preloader = document.getElementsByClassName("preloader");

		this.country = document.getElementById("country");
		this.region = document.getElementById("region");
		this.city = document.getElementById("city");
		this.latitude = document.getElementById("latitude");
		this.longitude = document.getElementById("longitude");
	}

	showPreloader() {
		setTimeout(() => {
			for (let i = 0; i < this.preloader.length; i += 1){
				this.preloader[i].classList.remove("done");
			}
		}, 500);
	}

	hidePreloader() {
		setTimeout(() => {
			for (let i = 0; i < this.preloader.length; i += 1){
				this.preloader[i].classList.add("done");
			}
		}, 500);
	}

	setCoordinates(coordinates) {
		this.country.innerHTML = coordinates.country_name;
		this.region.innerHTML = coordinates.region_name;
		this.city.innerHTML = coordinates.city;
		this.latitude.innerHTML = coordinates.latitude;
		this.longitude.innerHTML = coordinates.longitude;
	}
}
