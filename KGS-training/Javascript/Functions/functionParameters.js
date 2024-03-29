/*
A JavaScript function does not perform any checking on parameter values (arguments).
Function parameters are the names listed in the function definition.
Function arguments are the real values passed to (and received by) the function.
JavaScript function definitions do not specify data types for parameters.
JavaScript functions do not perform type checking on the passed arguments.
JavaScript functions do not check the number of arguments received.
*/

// DEFAULY ARGUMENTS --------------------------------------------------------------------------------
/*
If a function is called with missing arguments (less than declared), 
the missing values are set to undefined.
*/
function myFunction(x, y = 10) {
    return x + y;
}
myFunction(5);

// FUNCTION REST PARAMETER --------------------------------------------------------------------------
// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:
function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}
let x = sum(4, 9, 16, 25, 29, 100, 66, 77);

// The Arguments Object -----------------------------------------------------------------------------
/*
JavaScript functions have a built-in object called the arguments object.
The argument object contains an array of the arguments used when the function was called (invoked).
This way you can simply use a function to find (for instance) the highest value in a list of numbers:
If a function is called with too many arguments (more than declared), 
these arguments can be reached using the arguments object.
*/

x = findMax(1, 123, 500, 115, 44, 88);
function findMax() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

// ARGUMENTS ARE PASSED BY VALUE --------------------------------------------------------------------
/*
The parameters, in a function call, are the function's arguments.
JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations.
If a function changes an argument's value, it does not change the parameter's original value.
Changes to arguments are not visible (reflected) outside the function.
*/

// OBJECTS ARE PASSED BY REFERENCE ------------------------------------------------------------------
/*
In JavaScript, object references are values.
Because of this, objects will behave like they are passed by reference:
If a function changes an object property, it changes the original value.
Changes to object properties are visible (reflected) outside the function.
*/