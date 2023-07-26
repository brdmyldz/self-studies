/*
Scope determines the accessibility (visibility) of variables.
JavaScript has 3 types of scope:
    Block scope
    Function scope
    Global scope
*/

// BLOCK SCOPE --------------------------------------------------------------------------------------------
{
    let x = 2;
}
// x can NOT be used here

// LOCAL SCOPE --------------------------------------------------------------------------------------------
// Variables declared within a JavaScript function, become LOCAL to the function.

// code here can NOT use carName

function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
}

// code here can NOT use carName

/*
Since local variables are only recognized inside their functions, 
variables with the same name can be used in different functions.
Local variables are created when a function starts, and deleted when the function is completed.
*/

// GLOBAL SCOPE -------------------------------------------------------------------------------------------
// A variable declared outside a function, becomes GLOBAL.

let carName2 = "Volvo";
// code here can use carName2

function myFunction2() {
// code here can also use carName2
}

// AUTOMATICALLY GLOBAL -----------------------------------------------------------------------------------
// If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.

myFunction3();

// code here can use carName

function myFunction3() {
    carName = "Volvo";
}

// NOTE: In "Strict Mode", undeclared variables are not automatically global.

// GLOBAL VARIABLES IN HTML -------------------------------------------------------------------------------
/*
With JavaScript, the global scope is the JavaScript environment.
In HTML, the global scope is the window object.
Global variables defined with the var keyword belong to the window object:
*/

var carName3 = "Volvo";
// code here can use window.carName3

// Global variables defined with the let keyword do not belong to the window object:
let carName4 = "Volvo";
// code here can not use window.carName4

// WARNING ------------------------------------------------------------------------------------------------
/*
Do NOT create global variables unless you intend to.

Your global variables (or functions) can overwrite window variables (or functions).
Any function, including the window object, can overwrite your global variables and functions.
*/