const myAge = 1;

let word = "лет";


if ((myAge > 10 && myAge < 20) || (myAge > 110 && myAge < 120)) { 
	word = "лет"
}

else if (myAge % 10 == 1) {
	word = "год"
}

else if ((myAge % 10 >= 2) && (myAge % 10 <= 4)) {
	word = "года"
}

console.log(`Мой возраст ${myAge} ${word}`);

