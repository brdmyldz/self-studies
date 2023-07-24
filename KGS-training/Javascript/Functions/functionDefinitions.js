// FUNCTION DECLARATIONS ----------------------------------------------------------------------------
// Example:
function myFunction(a, b) {
    return a * b;
}

// FUNCTION EXPRESSIONS -----------------------------------------------------------------------------
// Example:
const x = function (a, b) {
    return a * b
};
let z = x(4, 3);
/*
The function above is actually an anonymous function (a function without a name).
Functions stored in variables do not need function names. They are always invoked (called) 
using the variable name.
The function above ends with a semicolon because it is a part of an executable statement.
*/

// Function Hoisting --------------------------------------------------------------------------------
/*
Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.
Hoisting applies to variable declarations and to function declarations.
Because of this, JavaScript functions can be called before they are declared:
*/
myFunction2(5);

function myFunction2(y) {
  return y * y;
}
// Note: Functions defined using an expression are not hoisted.

// Self-Invoking Functions --------------------------------------------------------------------------
/*
Function expressions can be made "self-invoking".
A self-invoking expression is invoked (started) automatically, without being called.
You have to add parentheses around the function to indicate that it is a function expression:
*/
(function () {
    let x = "Hello!!";  // I will invoke myself
})();

// FUNCTIONS ARE OBJECTS ----------------------------------------------------------------------------
/*
The typeof operator in JavaScript returns "function" for functions.
But, JavaScript functions can best be described as objects.
JavaScript functions have both properties and methods.
The arguments.length property returns the number of arguments received when the function was invoked:
*/
function myFunction3(a, b) {
    return arguments.length;
}

// The toString() method returns the function as a string:
function myFunction4(a, b) {
    return a * b;
}
let text = myFunction4.toString();