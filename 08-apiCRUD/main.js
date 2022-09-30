//execute logic crudAuthors.js

const goodReadsCrud = require('./crudAuthors')

/* Calling the function getAuthors() from the file crudAuthors.js */
goodReadsCrud.getAuthors();

/* Calling the function getAuthorById() from the file crudAuthors.js */
goodReadsCrud.getAuthorById(14890);

//Create author, a JSON must be the param

/* Creating a new author with the information provided in the JSON. */
const jsonSend = {
	name: "Jennette",
	last_name: "McCurdy",
	nacionalidad: "MX",
	biography: "I'm glad my mom die",
	gender: "F",
	age: 64,
	is_alive: true
}
goodReadsCrud.createAuthor(jsonSend)

/* Updating the author with the id {14901}. */
const updateAuthor = {
    nacionalidad: "USA",
	biography: "I'm glad my mom die",
	gender: "F",
	age: 30,
	is_alive: true
}
goodReadsCrud.patchAuthor(14901, updateAuthor)

/* Deleting the author with the id {14890}. */
goodReadsCrud.deleteAuthor(14890)