const prompt = require('prompt-sync')({ sigint: true });

console.log("Enter an array")
let userArray = JSON.parse(prompt("> "));

if (userArray.length > 10) {
    console.log(true)
} else {
    console.log("Array is less than 10")
}