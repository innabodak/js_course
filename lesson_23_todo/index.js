
class Task {
	constructor(){
		this.input = document.getElementById("addtask");
		this.list = document.getElementById("list");
		this.donebtn = document.createElement("button");
	}

	addTask(){
		if(this.input.value){
			this.li = document.createElement("li");
			this.li.setAttribute("id", counter);
			this.span = document.createElement("span");
			this.span.textContent = this.input.value;
			this.input.value = "";
			this.li.appendChild(this.span);
			this.list.appendChild(this.li);

			localStorage.setItem(`task_${counter}`, `${this.span.textContent}`);
			counter += 1;
		}
	}

	editTask() {
		this.editbtn = document.createElement("button");
		this.editbtn.textContent = "Edit";
		this.li.appendChild(this.editbtn);
		this.savebtn = document.createElement("button");
		this.savebtn.textContent = "Save";
		this.savebtn.style.display = "none";
		this.li.appendChild(this.savebtn);
		this.editinput = document.createElement("input");
		this.editinput.value = this.span.textContent;
				
		this.editbtn.addEventListener("click", () => {
			this.span.style.display = "none";
			this.editinput.style.display = "inline-block";
			this.editbtn.style.display = "none";
			this.savebtn.style.display = "inline-block";
			this.li.insertBefore(this.editinput, this.editbtn);
		})

		this.savebtn.addEventListener("click", () => {
			this.saveChanges();
		});

		this.editinput.addEventListener("keyup", (key) => {
			if(key.keyCode == "13") {
				this.saveChanges();
			}
		});
	}

	saveChanges(){
		this.span.textContent = this.editinput.value;
		this.span.style.textDecoration = "none";
		this.span.style.display = "inline-block";
		this.editinput.style.display = "none";
		this.editbtn.style.display = "inline-block";
		this.savebtn.style.display = "none";
		this.donebtn.removeAttribute("disabled");
		this.span.style.fontStyle = "normal";
		this.span.style.color = "black";
			if(localStorage.getItem(`task_${this.li.id}_done`, `${this.span.textContent}`)){
				localStorage.removeItem(`task_${this.li.id}_done`);
			}
		localStorage.setItem(`task_${this.li.id}`, `${this.span.textContent}`);
	}


	doneTask(){
		this.span.style.textDecoration = "line-through";
		this.span.style.fontStyle = "italic";
		this.span.style.color = "lightgrey";
		localStorage.removeItem(`task_${this.li.id}`);
		localStorage.setItem(`task_${this.li.id}_done`, `${this.span.textContent}`);
		this.donebtn.setAttribute("disabled", true);

	}

	doneBtn(){
		this.donebtn.textContent = "Done";
		this.li.appendChild(this.donebtn);
		this.donebtn.addEventListener("click", () => {this.doneTask()});
	}

	removeTask(){
		this.removebtn = document.createElement("button");
		this.removebtn.textContent = "Delete";
		this.li.appendChild(this.removebtn);

		this.removebtn.addEventListener("click", () => {
			this.list.removeChild(this.li);
			if(localStorage.getItem(`task_${this.li.id}_done`, `${this.span.textContent}`)){
				localStorage.removeItem(`task_${this.li.id}_done`);
			}
			else {
				localStorage.removeItem(`task_${this.li.id}`);
			}
		})
	}

}

class LoadTask extends Task {
	constructor(){
		super();
		this.input.value =  keyValue;
	}

}

let counter = 1;
let key;
let keyValue;
document.body.onload = () =>{
	for(let j = 0; j < localStorage.length; j += 1){
		key = localStorage.key(j);
		keyValue =  localStorage.getItem(key);
		localStorage.removeItem(key);

		let load = new LoadTask();
		load.addTask();
		if (key.indexOf("done") !== -1) {
			load.doneTask();
		} 
		load.editTask();
		load.doneBtn();
		load.removeTask();
	}
}

const addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", () => {
	let task = new Task();
	task.addTask();
	task.editTask();
	task.doneBtn();
	task.removeTask();
})


