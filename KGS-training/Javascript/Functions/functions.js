/*
A JavaScript function is a block of code designed to perform a particular task.
A JavaScript function is executed when "something" invokes it (calls it).

Why Functions?

With functions you can reuse code
You can write code that can be used many times.
You can use the same code with different arguments, to produce different results.
*/

// Example: Function to compute the product of p1 and p2
function myFunction(p1, p2) {
    return p1 * p2;
}

// SYNTAX -------------------------------------------------------------------------------------------
/*
Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

function name(parameter1, parameter2, parameter3) {
    code to be executed
}
*/

// INVOCATION ---------------------------------------------------------------------------------------
/*
The code inside the function will execute when "something" invokes (calls) the function:
    When an event occurs (when a user clicks a button)
    When it is invoked (called) from JavaScript code
    Automatically (self invoked)
*/

// FUNCTION RETURN ----------------------------------------------------------------------------------
/*
When JavaScript reaches a return statement, the function will stop executing.
If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.
Functions often compute a return value. The return value is "returned" back to the "caller":
*/

// Function is called, the return value will end up in x
let x = myFunction2(4, 3);

function myFunction2(a, b) {
// Function returns the product of a and b
  return a * b;
}

// () OPERATOR --------------------------------------------------------------------------------------
// The () operator invokes (calls) the function:
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}
let value = toCelsius(77);

// Accessing a function with incorrect parameters can return an incorrect answer:
let value2 = toCelsius();       // returns NaN

// Accessing a function without () returns the function and not the function result:
let value3 = toCelsius;         // returns the function object

// LOCAL VARIABLES ----------------------------------------------------------------------------------
// code here can NOT use carName

function myFunction3() {
    let carName = "Volvo";
    // code here CAN use carName
}

// code here can NOT use carName