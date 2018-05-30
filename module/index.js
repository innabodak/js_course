
// task #1
// Написать функцию “itsMe”, которая принимает один аргумент - строку “a”.
// Она должна вернуть строку “It’s me, {a}”, где вместо {a}, значение аргумента.
// Если аргумент не был передан, вместо него должен быть использован ваш никнейм на
// github. Так же, перед тем как вернуть значение, эта функция должна вывести строку в
// консоль.

function itsMe (a = "innabodak"){
		console.log(`It’s me, ${a}`);

		return `It’s me, ${a}`;
}

// task #2
// Написать функцию “compare”, которая принимает два аргумента - два числа
// Она должна вернуть строку:
// “{первый} > {второй}”, если первое число больше второго.
// “{первый} < {второй}”, если второе число больше первого.
// “{первый} == {второй}”, если второе равняется первому.
// “НЕ ЧИСЛО”, если один или оба аргумента не являются числами.
// (вместо {первый} и {второй} -значения соответствующих аргументов)

function compare(a,b){
	if (typeof a !== "number" || 
		typeof  b !== "number") {
		return "НЕ ЧИСЛО";
	} else if (a > b) {
		return `${a} > ${b}`;

	} else if (a < b) {
		return `${a} < ${b}`;

	} else if (a == b) {
		return `${a} == ${b}`;
	}
} 

// task #3
// Написать функцию “row”, которая принимает 4 аргумента - 3 числа и строку которая
// может быть ‘>’ или ‘<’
// Она должна вернуть строку в которой числа стоят в порядке убывания или возрастания в
// зависимости от аргумента строки.

function row(n1, n2, n3, comparison){
	let arr = [n1, n2, n3];
	if (comparison === ">"){
		arr.sort((a, b) => b - a);

	} else if (comparison === "<") {
		arr.sort((a, b) => a - b);
	}

	return arr.join(" " + comparison + " ");
}

// task #4
// Написать функцию “fact”, которая принимает 1 аргумент - число.
// Она должна вернуть факториал числа.

function fact(n){
	let result = 1;
	for (let i = 1; i <= n; i++){
		result *= i;
	}

	return result;
}


// task #5
// Написать функцию “matrixDiff”, которая принимает 2 аргумента, каждый из аргументов
// это массив массивов чисел.
// Она должна вернуть сумму абсолютных разниц соответствующих элементов этих
// структур. И должна вернуть NaN, если размеры массивов не совпадают.

let arr1 = [[2, 3], [4, 5]];
let arr2 = [[2, 1], [6]];

function matrixDiff(arr1, arr2){
	let result = 0;
	for (let i = 0; i < arr1.length; i++){
		if (arr1.length === arr2.length &&
			arr1[i].length === arr2[i].length) {
			for (let j = 0; j < arr1[i].length; j++){
				result += Math.abs(arr1[i][j] - arr2[i][j]); 
			}
		} else {
			result = NaN;
		}
	}

	return result;
}

// task #6
let arrString = ['Bill', 'Kill', 'Song'];
function strangeSearch(arrString){
	const script = document.querySelector("script");

	for (let i = 0; i < arrString.length; i++){
		const div = document.createElement("div");
		document.body.insertBefore(div, script);

		const input = document.createElement("input");
		input.setAttribute("type", "number");
		input.value = 0;
			
		div.appendChild(input);
		div.appendChild(document.createTextNode(arrString[i]));
	}

	const button = document.createElement("button");
	button.setAttribute("id", "go");
	button.appendChild(document.createTextNode("Search"));
	document.body.insertBefore(button, script);

	button.addEventListener("click", () => {
		let arrDiv = document.querySelectorAll("div");
		let arrText = [];
		let textInput = [];

		for (let j = 0; j < arrDiv.length; j++){
			if (+arrDiv[j].children[0].value > 0){
				textInput[0] = arrDiv[j].textContent;
				textInput[1] = +arrDiv[j].children[0].value;
				arrText.push(textInput);
				textInput = [];
			}
		}

		arrText.sort((a, b) => a[1] - b[1]);

		let youTubeText = "";
		for (let k = 0; k < arrText.length; k++){
			youTubeText += arrText[k][0] + " ";
		}

		window.location.href = `https://www.youtube.com/results?search_query=${youTubeText}`;
	});
}	


		// let arrDiv = document.querySelectorAll("div");
		// let youTubeText = "";

		// for (let j = 0; j < arrDiv.length; j++){
		// 	if (arrDiv[j].children[0].value !== "0"){
		// 		youTubeText += arrDiv[j].textContent + " ";
		// 	}
		
		// 	console.log(youTubeText);
		// }

	// 	window.location.href = `https://www.youtube.com/results?search_query=${youTubeText}`;
	// });
// }