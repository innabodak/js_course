// В репозитории создать папку lesson_15, В ней файлы index.html с подключенным файлом index.js, 
// В нем нужно написать:
// В index.html внутри body, создать кнопку с тегом button и текстом “Удалить”.
// Функцию “init“ которая принимает два аргумента - массив объектов такой структуры:
// { className: 'class', attributes: { 'data-name': 'Anatoliy' }, content: 'Some Text' },
// и число n.
// Функция должна создать элемент ul внутри body, и для каждого элемента входного массива, 
// необходимо создать n элементов li внутри ul, задав им класс из obj.className, 
// атрибуты из obj.attributes где ключи - названия атрибутов, значения ключей - 
// значения атрибутов, и внутренний контент элементов li взять из obj.content.
// Функцию “listen“ которая начнет слушать событие нажатия на кнопку “Удалить”, 
// и по этому событию удалять созданный список ul, и возвращать true в случае успеха, 
// и false, если списка ul нет.


// let arr = [{ className: 'class', attributes: { 'data-name': 'Anatoliy', surname: "Bondar" }, content: 'Some Text' },
// { className: 'form', attributes: { 'data-name': 'Nikita', surname: "Byshov" }, content: 'Another Text' }];
// let n = 3;

let button = document.getElementById("btn");

function init(arr, n){
	let list = document.createElement("ul");
	document.body.insertBefore(list, button);

	let li = document.createElement("li");
	for (obj of arr) {
		li.className = obj.className; /*присвоить класс*/

		for (key in obj.attributes){
			li.setAttribute(key, obj.attributes[key]); /*присвоить аттрибут и его значение*/
		}

		li.textContent = obj.content; /*присвоить текст*/

		for (let i = 1; i <= n; i++){
			list.appendChild(li.cloneNode(true));
		}
	}
}

function listen(){
	button.addEventListener("click", del);
	let list = document.querySelector("ul");
	if (list) {
		return true;
	}
	else {
		return false;
	}
}

function del(){
	let list = document.querySelector("ul");
	list.parentElement.removeChild(list);
}


