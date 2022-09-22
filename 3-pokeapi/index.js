// Consumir pokeapi https://pokeapi.co/
// Endpoint: https://pokeapi.co/api/v2/pokemon/

// 1. Trae request

const request = require('request');
const colors = require('colors');

//2 crear URI

const URI = 'https://pokeapi.co/api/v2/pokemon/';

// 3. Crear funcion que pida el nombre del pokemon y devuelva su tipo

function getPokemon(name){
    request(URI + name, function(error, response, body) {
        //validar
        if(response.statusCode === 200){
            const dataJSON = JSON.parse(body); //convierte el JSON a object JS
            const typePokemon = dataJSON.types.map((object) =>object.type.name)
            console.log(`el tipo de pokemon de ${name} es: ${typePokemon}`.green)
        }else{
            console.log(`ocurrio un error: ${response.statusCode}, ${response.statusMessage}`.red);
        }
    })
}
getPokemon('pikachu')
getPokemon('bulbasaur')
getPokemon('charmander')
getPokemon('squirtle')
getPokemon('butterfree')