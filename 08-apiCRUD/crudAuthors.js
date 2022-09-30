//logic petitions

/**
 * documentation: https://goodreads-devf-aaron.herokuapp.com/docs/
 * URI: https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/
 */
// 1. Require request
const request = require('request');

// 2. Endpoint
const URI = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/'

// Get authors list
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

//GET AUTHOR BY ID

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


module.exports = {
    getAuthors,
    getAuthorById
}