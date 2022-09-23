console.log('API NASA');

import fetch from "node-fetch";
const key = "GngUP2FdQXtMNroPwXe8vslDdnvFqgdMU1vEG3E3";

var apiNasa = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-11&end_date=2015-09-08&api_key=${key}`;

/**
 * It takes the JSON object returned by the API and loops through it to find the value of the key
 * "is_potentially_hazardous_asteroid" for each day.
 * @param url -
 * https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-01-01&end_date=2020-01-07&api_key=DEMO_KEY
 */
async function apiNasaFunc(url){
    const consult = await fetch(url);
    var JSONanswer = await consult.json();
    //console.log(JSONanswer.near_earth_objects);
    var meteorites = JSONanswer.near_earth_objects

    Object.keys(meteorites).forEach((element, index, array) =>{
        let dataDay = meteorites[element];
        //console.log(dataDay)
        dataDay.forEach((el, ind, arr) => {
            if(el.is_potentially_hazardous_asteroid){
                console.log(`The meteorite ${el.name} is potentially dangerous`);
            }else{
                console.log(`The meteorite ${el.name} isn't dangerous`);
            }
            //console.log(el.is_potentially_hazardous_asteroid);
        });
    });
}

apiNasaFunc(apiNasa);



