!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const i=new class{getMyIp(){return fetch("https://api.ipify.org?format=json").then(e=>200===e.status?e.json():Promise.reject(e.status))}getMyLocation(e){return fetch(`https://freegeoip.net/json/${e}`).then(e=>200===e.status?e.json():Promise.reject(e.status))}},r=new class{constructor(){this.preloader=document.getElementsByClassName("preloader"),this.locationBlock=document.getElementById("location_block"),this.country=document.getElementById("country"),this.region=document.getElementById("region"),this.city=document.getElementById("city"),this.latitude=document.getElementById("latitude"),this.longitude=document.getElementById("longitude")}showPreloader(){setTimeout(()=>{for(let e=0;e<this.preloader.length;e+=1)this.preloader[e].classList.remove("done")},500)}hidePreloader(){setTimeout(()=>{for(let e=0;e<this.preloader.length;e+=1)this.preloader[e].classList.add("done")},500)}setCoordinates(e){this.country.innerHTML=e.country_name,this.region.innerHTML=e.region_name,this.city.innerHTML=e.city,this.latitude.innerHTML=e.latitude,this.longitude.innerHTML=e.longitude,this.locationBlock.classList.remove("done")}},o=new class{constructor(){this.weatherBlock=document.getElementById("weather_block"),this.weatherIcon=document.getElementById("weather_icon"),this.weatherImg=document.createElement("img"),this.description=document.getElementById("description"),this.temperature=document.getElementById("temperature"),this.maxTemp=document.getElementById("max_temp"),this.mixTemp=document.getElementById("min_temp"),this.humidity=document.getElementById("humidity"),this.pressure=document.getElementById("pressure"),this.winds=document.getElementById("wind_speed")}getWeather(e,t){return this.city=e,fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${t}`).then(e=>200===e.status?e.json():Promise.reject(e.status))}setWeather(e){this.weatherBlock.classList.remove("done"),this.iconNumber=e.weather[0].icon,this.path="http://openweathermap.org/img/w/"+this.iconNumber+".png",this.weatherImg.setAttribute("src",this.path),this.weatherIcon.appendChild(this.weatherImg),this.description.innerHTML=e.weather[0].description,this.temperature.innerHTML=e.main.temp+" ºC",this.maxTemp.innerHTML=e.main.temp_max+" ºC",this.mixTemp.innerHTML=e.main.temp_min+" ºC",this.humidity.innerHTML=e.main.humidity+" %",this.pressure.innerHTML=e.main.pressure+" гПа",this.winds.innerHTML=e.wind.speed+" м/с"}},s=document.getElementById("location"),c=document.getElementById("weather"),a="6ac809cc8b65c3df15d21efbd6e9c06a";s.addEventListener("click",()=>{r.showPreloader(),i.getMyIp().then(e=>i.getMyLocation(e.ip)).then(e=>r.setCoordinates(e)).then(e=>r.hidePreloader()).catch(e=>console.log(e))}),c.addEventListener("click",()=>{r.showPreloader();const e=document.getElementById("input_city");e.value?o.getWeather(e.value,a).then(e=>o.setWeather(e)).then(e=>r.hidePreloader()).catch(e=>console.log(e)):i.getMyIp().then(e=>i.getMyLocation(e.ip)).then(e=>o.getWeather(e.city,a)).then(e=>o.setWeather(e)).then(e=>r.hidePreloader()).catch(e=>console.log(e))})}]);