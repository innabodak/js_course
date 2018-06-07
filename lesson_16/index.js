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



const n = 10;
const numbers = document.getElementById("numbers");

for (let i = 1; i <= n; i +=1){
	let number = document.createElement("span");
	number.appendChild(document.createTextNode(i));
	numbers.appendChild(number);
}

for (let k = 1; k < numbers.children.length; k +=1){
	numbers.insertBefore(document.createTextNode(", "), numbers.children[k]);
}

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
let checkStart = false;

start.addEventListener("click", timer);
x1.addEventListener("click", accelerator)
x2.addEventListener("click", accelerator)
x3.addEventListener("click", accelerator)

function timer(){
	checkStart = true;

	counter = setInterval(function(){
		time += 1;
		if (time === 1){
			output.innerHTML = time + " second";
		} else {
			output.innerHTML = time + " seconds";
		}

		for (let j = 0; j < n; j += 1){
			if (Math.trunc(time / n) % 2 === 1 
				&& time % n === 0) {
				numbers.children[numbers.children.length - 1].style.background = "green";

			} else if (Math.trunc(time / n) % 2 === 0 
				&& time % n === 0) {
				numbers.children[j].style.background = "black";
				console.log(j);
			
			} else if (Math.trunc(time / n) % 2 === 0 
				&& time % n === j) {
				numbers.children[j - 1].style.background = "green";

			} else if (Math.trunc(time / n) % 2 === 1 
				&& time % n === j) {
				numbers.children[numbers.children.length - j].style.background = "black";
				console.log(j);
			}
		}

	}, 	speed);

	start.setAttribute("disabled", true);

	pause.addEventListener ("click", () => {
		clearInterval(counter);
		start.removeAttribute("disabled");
		checkStart = false;

	});
	
	stop.addEventListener ("click", () => {
		clearInterval(counter);
		time = 0;
		output.innerHTML = time + " seconds";
		start.removeAttribute("disabled");
		checkStart = false;

		for (let i = 0; i < numbers.children.length; i++ ) {
			numbers.children[i].style.background = "";
		}

	});
}

function accelerator(){
	switch (true) {
		case x1.checked: 
			speed = interval;
			if (checkStart) {
				clearInterval(counter);
				timer();
			}
			break;

		case x2.checked:
			speed = interval / 2;
			if (checkStart) {
				clearInterval(counter);
				timer();
			}
			break;

		case x3.checked:
			speed = interval / 3;
			if (checkStart) {
				clearInterval(counter);
				timer();
			}
			break;

		default:
			speed = interval;
	}
}


 