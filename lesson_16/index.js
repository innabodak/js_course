// Необходимо реализовать интерактивный таймер используя все знания, 
// которые у вас есть на текущий момент. 
// Детали реализации:
// - Таймер представляет из себя последовательность чисел [1, 2, 3 … n] 
// (Число N нужно задать используя в коде переменную const n = 10)
// - Таймер должен иметь счетчик секунд (иными словами сколько таймер был запущен в секундах)
// - Таймер должен быть снабжен кнопками “Start” | “Stop” | “Pause” 
// и множитель скорости “X1", “X2” | “X3"
// - По умолчанию множитель должен стоять “X1”
// - При нажатии на кнопку “Start” таймер начинает отсчитывать промежутки, 
// закрашивая шкалу в зеленый цвет, дойдя до конца шкала должна окрашиваться 
// в черный в обратную сторону
// - Кнопка “Pause” должна поставить таймер на паузу
// - Кнопка “Start” должна принять состояние disabled для запущенного таймера (атрибут)
// - Кнопка “Stop” останавливает таймер и сбрасывает счетчик



// part #1 only!!!

const n = 10;
const numbers = document.getElementById("numbers");


const output = document.getElementById("output");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const stop = document.getElementById("stop");
const x1 = document.querySelector("#X1");
const x2 = document.querySelector("#X2");
const x3 = document.querySelector("#X3");


let time = 0;
let counter;
let interval = 1000;
let speed = interval;
// let checkStart = false;
// let checkPause = false;


start.addEventListener("click", timer);
x1.addEventListener("click", accelerator)
x2.addEventListener("click", accelerator)
x3.addEventListener("click", accelerator)

function timer(){
	counter = setInterval(function(){
		time += 1;
		if (time === 1){
			output.innerHTML = time + " second";
		} else {
			output.innerHTML = time + " seconds";
		}

		// checkStart = true;
		// checkPause = false;
	}, 	speed);

	start.setAttribute("disabled", true);

	pause.addEventListener ("click", () => {
		clearInterval(counter);
		start.removeAttribute("disabled");
		// checkPause = true;

	});
	
	stop.addEventListener ("click", () => {
		clearInterval(counter);
		time = 0;
		output.innerHTML = time + " seconds";
		start.removeAttribute("disabled");
		// checkStart = false;
		// checkPause = false;
	});
}

function accelerator(){
/*	if (checkPause === false
		 && checkStart === true) {*/
		switch (true) {
			case x1.checked: 
				speed = interval;
				clearInterval(counter);
				timer();
				break;

			case x2.checked:
				speed = interval / 2;
				clearInterval(counter);
				timer();
				break;

			case x3.checked:
				speed = interval / 3;
				clearInterval(counter);
				timer();
				break;

			default:
				speed = interval;
		}
/*	}*/
}


for (let j = 1; j <= n; j +=1){
	let number = document.createElement("span");
	number.appendChild(document.createTextNode(j));
	numbers.appendChild(number);
	
	// if (time % 10 === j) {
	// 	numbers.children[j].style.background = "green";}
	// else {
	// 	numbers.children[j].style.background = "black";
	// }
}

// К сожалению, на этом все((

 