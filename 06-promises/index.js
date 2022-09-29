console.log('promises')
import { rejects } from "assert"
import { url } from "inspector"
import fetch from "node-fetch"

//try catch example

function division(a,b){
    try{
        const result = a/b
        sum(a,b)
        return result
    }catch{
        return 'fail code'
    }
}
//console.log(division(3, 0))

/** NOTES
 * math.ceil int superior
 * math.floor int inferior
 * math.round >0.5 superior and <0.5 inferior
 * math.random a random number between 0 and 1
 */

/**
 * Practice: given a range(15-25) generate a random number with a promise
 * result: math.floor(math.random()*(min - max +1) + min)
 */

/**
 * It returns a promise that resolves to a random number between 15 and 25 after 2 seconds.
 * @returns A promise object
 */
const promiseExample =()=>{
    return new Promise((resolve, reject) =>{
        const randomNumber = Math.floor((Math.random() * (25 - 15 + 1)) + 15)
        setTimeout(()=>{
            randomNumber >=20 ? resolve(randomNumber): reject(new Error(`${randomNumber} is smaller than 20`))
        },2000)
    })
}
//Execute promise with then .catch
/*
promiseExample().then(number=>{
    console.log(number)
}).catch(console.error())
*/
//Execute try/catch

/**
 * The functionAsync function is an async function that calls the promiseExample function and waits for
 * it to resolve. If it resolves, it logs the answer. If it rejects, it logs the error.
 */
const functionAsync = async()=>{
    try{
        const answer = await promiseExample()
        console.log(answer)
    }catch(error){
        console.log(error)
    }finally{
        console.log('this is the finally statement')
    }
}
functionAsync()