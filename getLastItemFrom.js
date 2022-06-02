const prompt = require('prompt-sync')({ sigint: true });

console.log("Enter an array of strings")
let userArray = JSON.parse(prompt("> "));
console.log("The last item in userArray is: " + userArray[userArray.length-1]);