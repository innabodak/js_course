// task #1

// Написать функцию “removeKeys1”, которая принимает два аргумента: первый это объект второй это массив строк.
// Эта функция должна вернуть исходный объект у которого не будет ключей, названия которых есть в массиве (втором аргумента). Например:
// removeKeys1({ a: 1, b: [], c: '' }, ['a', 'c']) Вернёт { b: [] }

let obj = { a: 1, b: [], c: ''}, arr = ['a', 'c'];

function removeKeys1(obj, arr){
	for (let key of arr) {
			if (key in obj) {
				delete obj[key];
			}
		}
	return obj;
	console.log(obj);
}

// task #2
// Написать функцию “removeKeys2”, аналогичную первой, которая вернет новый объект, у которого будут те же ключи что и у первого аргумента, исключая те названия которых есть в массиве (втором аргументе)

let result = {}
function removeKeys2(obj, arr){
	for (let key in obj) {
		let ignored = false;
		for ( let i = 0; i < arr.length; i++) {
			if (key === arr[i]) {
				ignored = true;
			}
		}
		if (!ignored) {
			result[key] = obj[key];
		}
	}
	return result;
	console.log(result);
}


// task #3 
// Написать функцию “absDiff”, которая принимает аргумент “a”, и возвращает функцию, которая принимает только один аргумент аргумент “b”, и возвращает абсолютную разницу чисел “a” и “b”
// absDiff(3)(7) Вернёт 4

let a = 3, b = 7;

function absDiff(a) {
	return function minus(b) {
		if(a >= b) {
			return a - b;
		}
		else {
			return b - a;
		}
	}
	console.log(absDiff);
}

