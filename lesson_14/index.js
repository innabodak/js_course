// Написать функцию add, которая принимает один аргумент строку из символов эмодзи, 
// и должна вернуть среднее арифметические значение, суммы двух кодов эмодзи 
// (эмодзи-символы состоят из двух unicode кодов). 
// Например add('🍔😁') вернёт 112359 Если аргумент будет пустой, 
// то его необходимо обработать строку из эмодзи красного сердца и флага украины.


// task #1 (only part 1 | только для символов из 2-х юникодов)
function add(emoji){
	let sum = 0;
	for (let symbol of emoji) {
		sum += symbol.charCodeAt(0) + symbol.charCodeAt(1);
	}

	return sum / (emoji.length / 2);
}


// task #2
// Написать функцию clearNumbers, которая принимает один аргумент - массив массивов.
// Функция должна вернуть этот же массив массивов, но очистив их от не числовых значений.

let arr1 = [[1, "fgg"], [2, {}], [3, [], 5]];

function clearNumbers (arr) {
	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i].filter((el) => typeof el === "number");
	}
	
	return arr;
}


// task #3
// Написать функцию revers, которая принимает бесконечное количество аргментов, где каждый и них - строка.
// Функция должна вернуть массив строк в обратном порядке, где каждая строка - будет задом-наперед.
// Например: revers('123', '456')вернет ['654', '321']


function revers(){
	let stringArr = [];
	for (var i = 0; i < arguments.length; i++){
		if (typeof arguments[i] === "string") {
			stringArr[i] = arguments[i].split("").reverse().join("");
		}
		else {
			console.log("введите строку в качестве параметра");
		}
	}	

	return stringArr.reverse();
}


// Написать функцию splitArray которая первым аргументом принимает массив чисел,
// а вторым количество элементов в подмассивах. Функция должна вернуть массив массивов.
// Например:  splitArray([1, 4, 5, 6, 2], 2) вернет [[1, 4], [5, 6], [2]].
// Если количества элементов недостаточно - последний подмассив может содержать меньшее количество элементов.


let arr = [1, 4, 5, 6, 2];
let count = 2;

function splitArray(arr, count) {
	let result = [];
	for (let i = 0; arr.length > 0; i++){
		result[i] = arr.splice(0, count);
	}

	return result;
}

