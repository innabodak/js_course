
class Task {
	constructor(){
		this.input = document.getElementById("addtask");
		this.list = document.getElementById("list");
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
						
			localStorage.setItem(`task_${counter}`, `${this.li.textContent}`);
			counter += 1;
		}
	}

	removeTaskBtn(){
		this.removebtn = document.createElement("button");
		this.removebtn.innerHTML = "Delete task";
		this.li.appendChild(this.removebtn);

		this.removebtn.addEventListener("click", () => {
			this.list.removeChild(this.li);
			localStorage.removeItem(`task_${this.li.id}`);
		})
	}

	// doneTask(){
	// 	this.donebtn = document.createElement("button");
	// 	this.donebtn.innerHTML = "Done";
	// 	this.li.appendChild(this.donebtn);

	// 	this.donebtn.addEventListener("click", () => {
	// 		this.span.setAttribute("class", "done");
	// 		localStorage.removeItem(`task_${this.li.id}`);
	// 		localStorage.setItem(`dtask_${counter}`, `${this.span.textContent}`);
	// 	})
	// }

}

class ShowTask extends Task {
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
		let load = new ShowTask();
		load.addTask();
		// load.doneTask();
		load.removeTaskBtn();
	}
}

const addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", () => {
	let task = new Task();
	task.addTask();
	// task.done();
	task.removeTaskBtn();
})

