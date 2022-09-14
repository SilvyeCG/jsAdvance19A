import fetch from "node-fetch"


console.log('sesión de async');

// this is an sync example

console.log('1');
console.log('2');
console.log('3');

//callback func is the simple way to async

const firstFunc = () =>{
	console.log('this is the first function');
}

const secondFunc = () => {
	firstFunc()
	console.log('this is the second function');
}


const thirdFunc = () => {
	secondFunc();
	console.log('this is the third function')
}

thirdFunc();

function backOne(){return 1}
function  backTwo(){return 2}
const sumTwoFunc = (backOne, backTwo) => {
	const suma = backOne() + backTwo()
	return suma;
}

console.log(sumTwoFunc(backOne, backTwo));

const array = ['Pirates of the caribbean', 'Nope', 'Bullet train', 'Harry Potter', 'Duro de Matar', 'Soy tu fan'];

/* propiedades del objeto array, un arreglo hereda propiedades y metodos del array
los parametros de la funcion callback son elemento, indice y arreglo respectivamente
Estos parametros adquieren su valor por la posición, no por el nombre
*/

function exampleMap(e,i,a){
	if(e.length < 10){
                return e;
        }else{
                return i +  ' Movie name too long';
        }
}

/*
let newArray = array.map((element, index, array) => {
	if(element.length < 10){
		return index + ' ' + element;
	}else{
		return index +  ' Movie name too long';
	}

});
*/

let newArray = array.map(exampleMap)
console.log(newArray);


let sueldos = [
	{oficio: 'plomero',sueldo:10000},
	{oficio: 'programador',sueldo:25000},
	{oficio: 'contador',sueldo:15000},
	{oficio: 'becario',sueldo:3500},
]

let filterResult = sueldos.filter((element, index, array) => {
	return element.sueldo >= 15000
});

console.log(filterResult);

//SETTIMEOUT sirve para ejecutar una función despues de cierto tiempo

console.log('UNO')
setTimeout(function(){
console.log('DOS')
}, 3000)
console.log('TRES')


//consulta API es un proceso async (o a cualquier servidor y cualquier flujo de datos

async function example(){
	var answerFetch = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
	var answerJSON = await answerFetch.json();
	console.log(answerJSON)
}
//example()

console.log('Johar')
setTimeout(() => {
	console.log('Tania')
},1000);
for (let i = 0; i <  9999999999; i++);
console.log('Silvia')
