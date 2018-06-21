// ==============================================================
// ВАРИАНТ ЧЕРЕЗ ФУНКЦИИ

const inpEmail = document.getElementById("email");
const inpPhone = document.getElementById("phone");
const emailError = document.querySelector('label[for="email"]');
const phoneError = document.querySelector('label[for="phone"]');
// textarea
const content = document.getElementById("content");
const emailListBtn = document.getElementById("search");
const list = document.querySelector("ol");
const noEmailFound = document.getElementById("noEmailFound");
// validation
const phoneCheck = /^\+38(\(0\d\d\))|(0\d\d)\d{3}[ _]?\d{2}[ _]?\d{2}$/;
// const emailCheck = /^[\w][\w\D]{2,}[\w]\@(([a-z\d][\w-]+[a-z\d])|(\[[A-z\d\:\.]+\]))\.[a-z]{2,4}$/;
const emailCheck = /^[\w][\w-\.]{2,}[\w]\@(([a-z\d][\w-]+[a-z\d])|(\[[A-z\d\:\.]+\]))\.[a-z]{2,4}$/;
const textEmailsCheck = /[\w][\w-\.]{2,}[\w]\@(([a-z\d][\w-]+[a-z\d])|(\[[A-z\d\:\.]+\]))\.[a-z]{2,4}/;

inpEmail.addEventListener("blur", () =>{
	if (!inpEmail.value){
		inpEmail.style.border = "2px solid grey";
		emailError.style.display = "none";

	} else if(emailCheck.test(inpEmail.value)){
		inpEmail.style.border = "2px solid limegreen";
		emailError.style.display = "none";

	} else {
		inpEmail.style.border = "2px solid red";
		emailError.style.display = "block";
	}
});

inpPhone.addEventListener("blur", () =>{
	if (!inpPhone.value){
		inpPhone.style.border = "2px solid grey";
		phoneError.style.display = "none";

	} else if(phoneCheck.test(inpPhone.value)){
		inpPhone.style.border = "2px solid limegreen";
		phoneError.style.display = "none";

	} else 	{
		inpPhone.style.border = "2px solid red";
		phoneError.style.display = "block";
	}
});

emailListBtn.addEventListener("click", () => {
	let str = content.value;
	let step, cutStr;
	let result = {};
	for (let i = 0; i < str.length; i++) {
		if (textEmailsCheck.exec(str)) {
			result[textEmailsCheck.exec(str)[0]] = true;
			step = textEmailsCheck.exec(str).index + textEmailsCheck.exec(str)[0].length;
			cutStr = str.split("").splice(step).join("");
			str = cutStr;
		} else {
			break;
		}	
	}
	
	let arr = Object.keys(result);
	if (arr.length === 0) {
		noEmailFound.style.display = "block";

	} else {
		noEmailFound.style.display = "none";
	}

	for (let j = 0; j < arr.length; j++){
		const li = document.createElement("li");
		li.setAttribute("id", arr[j]);
		li.textContent = arr[j];
		list.appendChild(li);
	}
	emailListBtn.setAttribute("disabled", true);
});

content.addEventListener("focus", () => {
	noEmailFound.style.display = "none";
	arrOfLi = document.querySelectorAll("li");
	if (this.arrOfLi.length) {
		for (let i = 0; i < arrOfLi.length; i++) {
			list.removeChild(arrOfLi[i]);
		}
	}

	emailListBtn.removeAttribute("disabled");
});

// ==============================================================
// ВАРИАНТ ЧЕРЕЗ КЛАССЫ

// class Dom {
// 	constructor(){
// 		this.noEmailFound = document.getElementById("noEmailFound");
// 		this.list = document.querySelector("ol");
// 		this.content = document.getElementById("content");
// 	}

// 	getTextEmails(){
// 		return this.content.value;
// 	}

// 	validationMessage(input, pattern){
// 		this.label = document.querySelector(`label[for="${input.id}"]`);
// 		if (!input.value){
// 			input.style.border = "2px solid grey";
// 			this.label.style.display = "none";

// 		} else if(pattern){
// 			input.style.border = "2px solid limegreen";
// 			this.label.style.display = "none";

// 		} else {
// 			input.style.border = "2px solid red";
// 			this.label.style.display = "block";
// 		}
// 	}

// 	showList(result){	
// 		this.arr = Object.keys(result);
// 		if (this.arr.length === 0) {
// 			noEmailFound.style.display = "block";

// 		} else {
// 			noEmailFound.style.display = "none";
// 		}

// 		for (let j = 0; j < this.arr.length; j++){
// 			this.li = document.createElement("li");
// 			this.li.setAttribute("id", this.arr[j]);
// 			this.li.textContent = this.arr[j];
// 			this.list.appendChild(this.li);
// 		}
// 	}

// 	textAreaListener(){
// 		content.addEventListener("focus", () => {
// 			this.noEmailFound.style.display = "none";
// 			this.arr = document.querySelectorAll("li");
// 			if (this.arr.length) {
// 				for (let i = 0; i < this.arr.length; i++) {
// 					this.list.removeChild(this.arr[i]);
// 				}
// 			}

// 			emailListBtn.removeAttribute("disabled");

// 		});
// 	}
// };

// class Validation {
// 	emailCheck(input){
// 		// this.pattern = /^[\w][\w\D]{2,}[\w]\@(([a-z\d][\w-]+[a-z\d])|(\[[A-z\d\:\.]+\]))\.[a-z]{2,4}$/;
// 		this.pattern = /^[\w][\w-\.]{2,}[\w]\@(([a-z\d][\w-]+[a-z\d])|(\[[A-z\d\:\.]+\]))\.[a-z]{2,4}$/;
// 		return this.pattern.test(input.value)
// 	}

// 	phoneCheck(input){
// 		this.pattern = /^\+38(\(0\d\d\))|(0\d\d)\d{3}[ _]?\d{2}[ _]?\d{2}$/;
// 		return this.pattern.test(input.value)
// 	}

// 	searchEmails(str){
// 		this.pattern = /[\w][\w-\.]{2,}[\w]\@(([a-z\d][\w-]+[a-z\d])|(\[[A-z\d\:\.]+\]))\.[a-z]{2,4}/;
// 		this.result = {};
// 		for (let i = 0; i < str.length; i++) {
// 			if (this.pattern.exec(str)) {
// 				this.result[this.pattern.exec(str)[0]] = true;
// 				this.step = this.pattern.exec(str).index + this.pattern.exec(str)[0].length;
// 				this.cutStr = str.split("").splice(this.step).join("");
// 				str = this.cutStr;
// 			} else {
// 				break;
// 			}	
// 		}

// 		return this.result;
// 	}
// }

// const dom = new Dom();
// const validation = new Validation();

// const inpEmail = document.getElementById("email");
// const inpPhone = document.getElementById("phone");
// const emailListBtn = document.getElementById("search");

// inpEmail.addEventListener("blur", (e) =>{
// 	let pattern = validation.emailCheck(e.target);
// 	dom.validationMessage(e.target, pattern);
// });

// inpPhone.addEventListener("blur", (e) =>{
// 	let pattern = validation.phoneCheck(e.target);
// 	dom.validationMessage(e.target, pattern);
// });

// dom.textAreaListener();

// emailListBtn.addEventListener("click", (e) => {
// 	let str = dom.getTextEmails();
// 	let res = validation.searchEmails(str);
// 	dom.showList(res);
// 	emailListBtn.setAttribute("disabled", true);
// });

