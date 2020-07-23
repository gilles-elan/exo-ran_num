let nombre = Math.floor(Math.random() * Math.floor(11));
const div = document.getElementsByClassName('reponse');

if (nombre < 5) {
	div.innerHTML = "Le nombre est plus petit que 5!";
} else {
	div.innerHTML = "Le nombre est plus grand que 5!"
}

console.log(nombre);
console.log(div);