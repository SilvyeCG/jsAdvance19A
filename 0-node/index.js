console.log('this is my first file')
console.log('HERE IS A CHANGE FOR NODEMON')

var colors = require('colors')
function sum(x,y){
	let sum = x+y;
	console.log('la suma es '.red +  sum);
}

sum(25,30);

const alumnos = ['Rangel', 'Mildred', 'Edgar', 'Diana', 'Erick', 'Mariana'];
for(let i = 0; i < alumnos.length; i++){
	console.log(alumnos[i].red);
}

alumnos.forEach((element, indice, array) => {
	console.log(element.red);
})

var grades ={
	"Rangel": 8,
	"Mildred":9,
	"Edgar":10,
	"Diana":10,
	"Erick": 8,
	"Mariana": 8.5
}

Object.keys(grades).forEach((element, indice,array) =>{
	console.log(element);
	if(grades[element] < 9){
		console.log("El estudiante " + element.red + ' obtuvo ' + grades[element])
	}else{
		console.log('El estudiante' + element.greeen + ' es aplicado')
	}
	grades[element]
})

