/*
The code inside a function is not executed when the function is defined.
The code inside a function is executed when the function is invoked.
*/

// INVOKING A FUNCTION AS A FUNCTION ----------------------------------------------------------------
function myFunction(a, b) {
    return a * b;
}
myFunction(10, 2);           // Will return 20

/*
The function above does not belong to any object. But in JavaScript there is always 
a default global object.
In a browser the page object is the browser window. The function above automatically 
becomes a window function.

Note: This is a common way to invoke a JavaScript function, but not a very good practice.
Global variables, methods, or functions can easily create name conflicts and bugs 
in the global object.
*/

// myFunction() and window.myFunction() is the same function:
window.myFunction(10, 2);    // Will also return 20

// THIS ---------------------------------------------------------------------------------------------
/*
In JavaScript, the this keyword refers to an object.
Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:
    In an object method, this refers to the object.
    Alone, this refers to the global object.
    In a function, this refers to the global object.
    In a function, in strict mode, this is undefined.
    In an event, this refers to the element that received the event.
    Methods like call(), apply(), and bind() can refer this to any object.

this is not a variable. It is a keyword. You cannot change the value of this.
*/

// INVOKING A FUNCTION WITH A FUNCTION CONSTRUCTOR --------------------------------------------------
/*
If a function invocation is preceded with the new keyword, it is a constructor invocation.
It looks like you create a new function, but since JavaScript functions are objects you actually create a new object:
*/

// This is a function constructor:
function myFunction2(arg1, arg2) {
    this.firstName = arg1;
    this.lastName  = arg2;
}

// This creates a new object
const myObj = new myFunction2("John", "Doe");

// This will return "John"
myObj.firstName;