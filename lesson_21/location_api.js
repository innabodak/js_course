// location_api.js:
//     Должен содержать класс для работы с location - LocationApi. 
// Также в этом файле должен быть export LocationApi класса.

// class LocationApi:
//     Должен содержать 2 метода:
//         1. getMyIp - делает запрос на сервер и возвращает ваш IP 
// (делать запрос на адрес https://api.ipify.org?format=json).
//         2. getMyLocation(your_ip) - делает запрос на сервер 
// и возвращает вашу локацию 
// (делать запрос на адрес https://freegeoip.net/json/{your_ip} с вашим IP).


export default class LocationApi {
	getMyIp () {
		return fetch("https://api.ipify.org?format=json")
		.then(res => {
			if(res.status === 200){
				return res.json();
			} else {
				Promise.rejected(res.status);
			}
		})
		.catch(error => console.log("Oшибка " + error));
	}

	getMyLocation(my_ip){
		return fetch(`https://freegeoip.net/json/${my_ip}`)
		.then(res => {
			if(res.status === 200){
				return res.json();
			} else {
				Promise.rejected(res.status);
			}
		})
		.catch(error => console.log("Oшибка " + error));
	}
}

