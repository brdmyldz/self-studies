// Global variables can be made local (private) with closures.

// A COUNTER DILEMMA --------------------------------------------------------------------------------
/*
Suppose you want to use a variable for counting something, and you want this counter to be available to all functions.
You could use a global variable, and a function to increase the counter:
*/
// Initiate counter
let counter = 0;

// Function to increment counter
function add() {
    counter += 1;
}

// Call add() 3 times
add();
add();
add();

// The counter should now be 3

/*
There is a problem with the solution above: Any code on the page can change the counter, without calling add().
The counter should be local to the add() function, to prevent other code from changing it:
*/

// Initiate counter
let counter2 = 0;

// Function to increment counter
function add2() {
    let counter2 = 0;
    counter2 += 1;
}

// Call add() 3 times
add2();
add2();
add2();

//The counter should now be 3. But it is 0

/*
It did not work because we display the global counter instead of the local counter.
We can remove the global counter and access the local counter by letting the function return it:
*/

// Function to increment counter
function add3() {
    let counter3 = 0;
    counter3 += 1;
    return counter3;
}

// Call add() 3 times
add3();
add3();
add3();

// The counter should now be 3. But it is 1.
// It did not work because we reset the local counter every time we call the function.

// JS NESTED FUNCTIONS ------------------------------------------------------------------------------
/*
All functions have access to the global scope.  
In fact, in JavaScript, all functions have access to the scope "above" them.
JavaScript supports nested functions. Nested functions have access to the scope "above" them.
In this example, the inner function plus() has access to the counter variable in the parent function:
*/
function add4() {
    let counter4 = 0;
    function plus() {counter += 1;}
    plus();   
    return counter4;
}
/*
This could have solved the counter dilemma, if we could reach the plus() function from the outside.
We also need to find a way to execute counter = 0 only once.
We need a closure.
*/

// JS CLOSURES --------------------------------------------------------------------------------------
const addCorrect = (function () {
    let counter = 0;
    return function () {counter += 1; return counter}
})();

addCorrect();
addCorrect();
addCorrect();

// the counter is now 3

/*
The variable add is assigned to the return value of a self-invoking function.
The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.
This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.
This is called a JavaScript closure. It makes it possible for a function to have "private" variables.
The counter is protected by the scope of the anonymous function, and can only be changed using the add function.
*/