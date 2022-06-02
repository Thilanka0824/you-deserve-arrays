const prompt = require('prompt-sync')({ sigint: true });

let userArray = JSON.parse(prompt("Enter an array of strings: "));
console.log("The first item in userArray is: " + userArray[0]);