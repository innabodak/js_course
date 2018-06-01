const button =  document.querySelector("button")

button.addEventListener("click", () => {
    const input = document.querySelector("input");
    let date = input.value;
    
    const moment = require("moment");
    let result = moment(date).diff(moment());
    let time = moment.duration(result);

    let months = `${time.get("months")} months `;
    let days = `${time.get("days")} days `;
    let minutes = `${time.get("minutes")} minutes `;
    let seconds = `${time.get("seconds")} seconds`;

    let exactTime = months + days + minutes + seconds;

    const div1 = document.getElementById("timeLeft");
    const div2 = document.getElementById("exactTime");
    div1.appendChild(document.createTextNode("Time left: " + time.humanize()));
    div2.appendChild(document.createTextNode("Exact time left: " + exactTime));
});

// console.log("Time left: " + time.humanize());
// console.log("Exact time left: " + exactTime);
