import fetch from "node-fetch"

const urlAuthor = 'http://openlibrary.org/search.json?author=asimov';
const ISBNsearch = `https://openlibrary.org/api/books?bibkeys=ISBN:`
var alib = []
var arrayPromises =[]

async function queryAuthor(urlA){
    const response = await fetch(urlA)
    const responseJson = await response.json()
    const arrayID = responseJson.docs[0].isbn
    return arrayID
}

queryAuthor(urlAuthor)
