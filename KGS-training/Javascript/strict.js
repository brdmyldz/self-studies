// @ts-nocheck
// "use strict"; Defines that JavaScript code should be executed in "strict mode".
// Watch Out! The "use strict" directive is only recognized at the beginning of a script or a function.
"use strict";

// --------------------------------------------------------------------------------------------------------

x = 3.14;       // This will cause an error because x is not declared

x = {p1:10, p2:20};      // This will cause an error

// --------------------------------------------------------------------------------------------------------

myFunction();

function myFunction() {
  y = 3.14;   // This will also cause an error because y is not declared
}

// --------------------------------------------------------------------------------------------------------

// Deleting a variable, function is not allowed.
let x = 3.14;
delete x;                // This will cause an error

// --------------------------------------------------------------------------------------------------------

function x(p1, p1) {};   // This will cause an error

// --------------------------------------------------------------------------------------------------------

/*
let x = 010;             // Octal numeric literals are not allowed
let x = "010";          // Octal escape characters are not allowed
*/

// --------------------------------------------------------------------------------------------------------

const obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});

obj.x = 3.14;            // Writing to a read-only property is not allowed

// --------------------------------------------------------------------------------------------------------

const obj = {get x() {return 0} };

obj.x = 3.14;            // Writing to a get-only property is not allowed

// --------------------------------------------------------------------------------------------------------

delete Object.prototype; // Deleting an undeletable property is not allowed

// --------------------------------------------------------------------------------------------------------

let eval = 3.14;         // The word eval cannot be used as a variable
let arguments = 3.14;    // The word arguments cannot be used as a variable

// --------------------------------------------------------------------------------------------------------

with (Math){x = cos(2)}; // The with statement is not allowed

// --------------------------------------------------------------------------------------------------------

// For security reasons, eval() is not allowed to create variables in the scope from which it was called
eval ("x = 2");
alert (x);      // This will cause an error

eval ("var x = 2");
alert (x);    // This will cause an error

eval ("let x = 2");
alert (x);        // This will cause an error

// --------------------------------------------------------------------------------------------------------

/*
    The this keyword in functions behaves differently in strict mode.
    The this keyword refers to the object that called the function.
    If the object is not specified, functions in strict mode will return undefined and 
    functions in normal mode will return the global object (window)
*/
function myFunction() {
    alert(this); // will alert "undefined"
}
myFunction();

// --------------------------------------------------------------------------------------------------------


// --------------------------------------------------------------------------------------------------------

/*
    These keywords are reserved for future JS versions and can't be used as variable names:
        implements
        interface
        let
        package
        private
        protected
        public
        static
        yield
*/
let public = 1500;      // This will cause an error

// --------------------------------------------------------------------------------------------------------

/*
    Why Strict Mode?

    Strict mode makes it easier to write "secure" JavaScript.
    Strict mode changes previously accepted "bad syntax" into real errors.
    As an example, in normal JavaScript, mistyping a variable name creates a new global variable. 
    In strict mode, this will throw an error, making it impossible to accidentally create a global variable.
    In normal JavaScript, a developer will not receive any error feedback assigning 
    values to non-writable properties.
    In strict mode, any assignment to a non-writable property, a getter-only property, 
    a non-existing property, a non-existing variable, or a non-existing object, will throw an error.
*/

