console.log('API NASA');

//import fetch from "node-fetch";
const key = "GngUP2FdQXtMNroPwXe8vslDdnvFqgdMU1vEG3E3";
var apiNasa = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-11&end_date=2015-09-08&api_key=${key}`;

var containerPhoto = document.getElementById('containerPhoto');
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

//apiNasaFunc(apiNasa);
let im
let idim

/**
 * It takes a key, day, camera, and robot as parameters and returns a list of photos from the Mars
 * Rover API.
 * @param key - your API key
 * @param day - the day of the mission
 * @param camera - FHAZ, RHAZ, MAST, CHEMCAM, MAHLI, MARDI, NAVCAM, PANCAM, MINITES
 * @param robot - Curiosity, Opportunity, Spirit
 */


async function marsPhotos(key, day, camera, robot){
    var urlMars = `https://api.nasa.gov/mars-photos/api/v1/rovers/${robot}/photos?sol=${day}&camera=${camera}&api_key=${key}`;
    const resultURL = await fetch(urlMars);
    var JSONmars = await resultURL.json();
    console.log(JSONmars)
    var photosList = JSONmars.photos
    photosList.forEach((el, ind, arr) =>{
        im = el.img_src;
        idim = el.id
        //console.log([el.img_src, el.id])
    })
}


/**
 * BringPhoto() is an async function that calls the marsPhotos() function, and then sets the innerHTML
 * of the containerPhoto div to an image tag with the src and alt attributes set to the im and idim
 * variables, respectively.
 */


async function bringPhoto(){
    let robot = document.getElementById('robot');
    let sensor = document.getElementById('sensor');
    let solarDay = document.getElementById('solarDay');
    let robotv = robot.value;
    let sensorV = sensor.value;
    let solarDayV = solarDay.value;
    console.log(robotv, sensorV, solarDayV)

    await marsPhotos(key, toString(solarDayV), sensorV, robotv);  
    containerPhoto.innerHTML = `
        <img src=${im} alt= ${idim}>
    `
}

