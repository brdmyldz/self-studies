/*
Sometimes we need a "blueprint" for creating many objects of the same "type".
The way to create an "object type", is to use an object constructor function.
Objects of the same type are created by calling the constructor function with the new keyword.
*/

// Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.name = function() {
        return this.firstName + " " + this.lastName
    };
}

// Create a Person object
const myFather = new Person("John", "Doe", 50, "blue");

// Display full name
document.getElementById("demo").innerHTML =
"My father is " + myFather.name(); 

// BUILT-IN JS CONSTRUCTORS -------------------------------------------------------------------------------
new String()    // A new String object
new Number()    // A new Number object
new Boolean()   // A new Boolean object
new Object()    // A new Object object
new Array()     // A new Array object
new RegExp()    // A new RegExp object
new Function()  // A new Function object
new Date()      // A new Date object
// Note: The Math() object is not in the list. Math is a global object. The new keyword cannot be used on Math.

// DID YOU KNOW? ------------------------------------------------------------------------------------------
/*
As you can see above, JavaScript has object versions of the primitive data types String, Number, and Boolean. 
But there is no reason to create complex objects. Primitive values are much faster:

    Use string literals "" instead of new String().
    Use number literals 50 instead of new Number().
    Use boolean literals true / false instead of new Boolean().
    Use object literals {} instead of new Object().
    Use array literals [] instead of new Array().
    Use pattern literals /()/ instead of new RegExp().
    Use function expressions () {} instead of new Function().
*/
