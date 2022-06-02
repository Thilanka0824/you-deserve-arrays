const prompt = require('prompt-sync')({ sigint: true });

console.log("Enter an array of strings")
let userArray = JSON.parse(prompt("> "));

if (userArray.length > 3) { // checks whether the inputted array has more that 3 items
    console.log("The item at the index 3 is: " + userArray[3]) // prints out the 4th item
} else {
    console.log("The last item is: " + userArray[userArray.length-1]) // if less than 4 items, prints out the last item
}