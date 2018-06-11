// index.js:
//     В этои файле должен происходить import классов 
//     LocationApi и Dom и работа с ними

// В index.html подключить только 1 файл - index.js




//увы, собрать с помощью Parcel не получилось; 
// собрала через webpack и поключила в html main.js

import LocationApi from "./location_api";
import Dom from "./dom";

const loc = new LocationApi();
const dom = new Dom();
const btn = document.getElementById("get");

btn.addEventListener("click", () => {
	dom.showPreloader();
	loc.getMyIp()
 		.then(res => loc.getMyLocation(res.ip))
 		.then(res => dom.setCoordinates(res))
 		.then(res => dom.hidePreloader());
});
