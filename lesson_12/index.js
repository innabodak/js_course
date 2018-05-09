// task #1

const arr1 = [1, 13, -3, 0];

let sum = arr1.reduce((a, b) => {return a + b;});
console.log(sum);
console.log(sum / arr1.length);

let min = arr1[0];
let max = arr1[0];
for (let i = 0; i < arr1.length; i+=1) {
	if (arr1[i] < min) {min = arr1[i]};
	if (arr1[i] > max) {max = arr1[i]};
};
console.log(min);
console.log(max);

// task #2

const obj1 = { from: 1, to: 4, value: [4, 5, 12, 7, 5, 4], ignore: [2] };

let arrInitial = obj1["value"];
let arrFinal = [];

for (let i = obj1["from"]; i <= obj1["to"]; i+=1) {
	if (i != obj1["ignore"]) {arrFinal.push(arrInitial[i])};
 };

console.log(arrFinal.join(", "));


// for (let i = obj1["from"];  i <= obj1["to"] && i !== obj1["ignore"]; i+=1)
 // ??? Почему нельзя во второе выражение вписывать сложное условие?
