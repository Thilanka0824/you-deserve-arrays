const prompt = require('prompt-sync')({ sigint: true });
// let ages = [16, 18, "Kobe", 21, 25, "Magic", 30, 40, "Shaq"]

console.log("Enter an array")
let userArray = JSON.parse(prompt("> "));

if (typeof userArray[2] === "string") { // if the 3rd item in userArray is a string 
    userArray = userArray[2] // then let the new value of userArray be the 3rd item in userArray
    console.log(userArray[1]) // now log the 2nd character in from the NEW value of userArray 
} else {
    console.log("error") // if the 3rd item is not a string then log an error
}


