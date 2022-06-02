const prompt = require('prompt-sync')({ sigint: true });

console.log("Enter an array")
let userArray = JSON.parse(prompt("> "));

//let ages = [16, 18, 21, 25, 30, 40, 50]
if (typeof userArray[0] === "number") {
    console.log(true)
} else {
    console.log(false)
}