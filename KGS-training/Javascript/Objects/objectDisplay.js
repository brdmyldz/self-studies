/*
Displaying a JavaScript object will output [object Object].

Some common solutions to display JavaScript objects are:
    Displaying the Object Properties by name
    Displaying the Object Properties in a Loop
    Displaying the Object using Object.values()
    Displaying the Object using JSON.stringify()
*/


// OBJECT.VALUES() ----------------------------------------------------------------------------------------
// Any JavaScript object can be converted to an array using Object.values():
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

const myArray = Object.values(person);
document.getElementById("demo").innerHTML = myArray;

// JSON.STRINGIFY() ---------------------------------------------------------------------------------------
// Any JavaScript object can be stringified (converted to a string) with the JavaScript function JSON.stringify():

const person2 = {
    name: "John",
    age: 30,
    city: "New York",
    today: new Date(),                      // JSON.stringify converts dates into strings
    age: function () {return 30;},          // JSON.stringify will not stringify functions
    arr: ["John", "Peter", "Sally", "Jane"] // It is also possible to stringify JavaScript arrays
};

let myString = JSON.stringify(person2);
document.getElementById("demo").innerHTML = myString;
// displays {"name":"John","city":"New York","today":"2023-07-31T09:19:08.445Z","arr":["John","Peter","Sally","Jane"]}
