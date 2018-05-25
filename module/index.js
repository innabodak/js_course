

function itsMe (a){
	if (a) {
		return `It’s me, ${a}`;

	} else {
		return "innabodak";
	}
}

// let a = 3, b = 4;
function compare(a,b){
	if (a > b) {
		return `${a} > ${b}`;

	} else if (a < b) {
		return `${a} < ${b}`;

	} else if (a == b) {
		return `${a} == ${b}`;

	} else if (typeof a !== "number" ||
		typeof  b !== "number") {
		return "НЕ ЧИСЛО";
	}
} 

// let n1 = 3, n2 = -4, n3 = 5;
// let comparison = ">";

function row(n1, n2, n3, comparison){
	let arr = [n1, n2, n3];
	if (comparison === ">"){
		arr.sort((a, b) => b - a);

	} else if (comparison === "<") {
		arr.sort((a, b) => a - b);
	}

	return arr.join(" " + comparison + " ");
}


function fact(n){
	let result = 1;
	for (let i = 1; i <= n; i++){
		result *= i;
	}

	return result;
}


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


let arrString = ['Bill', 'Kill', 'Song'];
function strangeSearch(arrString){
	const script = document.querySelector("script");
	let div;

	for (let i = 0; i < arrString.length; i++){
		div = document.createElement("div");
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
		window.location.href = "https://www.youtube.com/?gl=UA&app=desktop";
	});

	const youTubeInput = document.getElementById("search");
	// youTubeInput.innerHTML = youTubeText;

	// let youTubeText;
	// let arrDiv = []; 
	// for (let j = 0; j < document.body.length; j++){
	// 	if(input.value > 0) {

	// 		arr.div.push(div[j]);
	// 	}
	// 	arr.sort((a, b) => a - b);

	// 	youTubeText += div[j].textContent + " ";

	// }

}
