// В репозитории создать папку lesson_20;
// В ней файл index.js;
// Создать класс  Human, который в качестве аргумента принимает объект с ключами 
// name(содержит ваше имя строкой), age(содержит ваш возраст числом). 
// Human({ name: 'ivan', age: 19 })

// У класса Human должен быть метод sayHello, который будет выводить в консоль 
// строку “Hello, my name is  ${name}, i am ${age} years old”

// Создать класс AlevelStudent, наследуемый от Human, который принимает в себя 
// параметры name, age и новый ключ marks, которой будет содержать массив ваших оценок 
// за домашние задание числами ([5, 3, 5, 1, 4])
// AlevelStudent({ name: 'Ivan', age: 19, marks: [1, 2, 3, 4, 5] });

// У класса AlevelStudent должен быть метод averageMark, который выводит в консоль 
// среднее значение из вашего массива оценок


// -------------------------
// new syntax
// -------------------------
class Human {
	constructor(obj){
		this.name = obj.name;
		this.age = obj.age;
	}

	sayHello(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`);
	}
}

class AlevelStudent extends Human {
	constructor(obj){
		super(obj);
		this.marks = obj.marks;
	}

	averageMark(){
		let sum = this.marks.reduce((a,b) => {return a + b});
		let average = sum / this.marks.length;
		console.log(average);
	}
}

/*check*/
/*let student = new AlevelStudent({
	name: "Ivan",
	age: 19,
	marks: [1, 2, 3, 4, 5],
});

console.log(student);*/


// -------------------------
// old syntax
// -------------------------

// function Human(obj) {
// 	this.name = obj.name;
// 	this.age = obj.age;
// }

// Human.prototype.sayHello = function (){
// 	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`);
// }

// function AlevelStudent(obj) {
// 	Human.apply(this, arguments);
// 	this.marks = obj.marks;	
// }

// AlevelStudent.prototype = Object.create(Human.prototype);

// AlevelStudent.prototype.averageMark = function(){
// 	let sum = this.marks.reduce((a,b) => {return a + b});
// 	let average = sum / this.marks.length;
// 	console.log(average);
// }

// /*check*/
// /*let student = new AlevelStudent({
// 	name: "Ivan",
// 	age: 19,
// 	marks: [1, 2, 3, 4, 5],
// });

// console.log(student);*/


