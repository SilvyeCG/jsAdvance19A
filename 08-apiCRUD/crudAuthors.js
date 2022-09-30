//logic petitions

/**
 * documentation: https://goodreads-devf-aaron.herokuapp.com/docs/
 * URI: https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/
 */
// 1. Require request
const request = require('request');

// 2. Endpoint
const URI = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/'

/**
 * Get authors list:
 * It makes a request to the URI, and if the response is 200, it parses the body and logs it to the
 * console.
 */
const getAuthors = () =>{
    request.get(URI, (error, response, body) =>{
        //validate petition
        if(response.statusCode === 200){
            const authors = JSON.parse(body);
            console.log(authors);
        }else{
            console.log(response.statusCode, response.statusMessage);
        }
    });
}

/**
 * GET AUTHOR BY ID: 
 * It makes a request to the API, and if the response is 200, it parses the body and prints it to the
 * console.
 * @param idAuthor - The id of the author you want to get.
 */
const getAuthorById  = (idAuthor) => {
    request.get(URI+idAuthor+'/',(error, response, body) =>{
        //validate petition
        if(response.statusCode === 200){
            const author = JSON.parse(body);
            console.table(author);
        }else{
            console.log(response.statusCode, response.statusMessage)
        }
    });
}

/**
 * POST/CREATE new author: A JSON Format will be needed
 * It takes a JSON object as a parameter, and then it makes a POST request to the endpoint URI, and
 * then it logs the response to the console.
 * @param jsonData - 
 */
const createAuthor = (jsonData) => {
    const objConfig = {
        url: URI, //Endpoint
        form: jsonData //new Author DATA in JSON Format
    }

    request.post(objConfig, (error, response, body) => {
        //validate petition
        if(response.statusCode === 201){
            const createAuthor = JSON.parse(body)
            console.log('Author created successfully' + createAuthor)
        }else{
            console.log(response.statusCode, response.statusMessage);
        }
    })
}



/* Exporting the functions to be used in another file. */
module.exports = {
    getAuthors,
    getAuthorById,
    createAuthor
}