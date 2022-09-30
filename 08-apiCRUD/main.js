//execute logic crudAuthors.js

const goodReadsCrud = require('./crudAuthors')

//list authors

//goodReadsCrud.getAuthors();

//get author by ID
//goodReadsCrud.getAuthorById(14890);

// Create author, a JSON must be the param

const jsonSend = {
	name: "Jennette",
	last_name: "McCurdy",
	nacionalidad: "MX",
	biography: "I'm glad my mom die",
	gender: "F",
	age: 64,
	is_alive: true
}
//IDs 14899 => Maria, 14890 => Silvia ,14901 => Jennette
goodReadsCrud.createAuthor(jsonSend)