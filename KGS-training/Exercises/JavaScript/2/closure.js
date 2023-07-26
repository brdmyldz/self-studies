/*
I already have a separate file for JavaScript Closures at:
https://github.com/brdmyldz/self-studies/blob/main/KGS-training/Javascript/Functions/functionClosures.js
However, we can look through another example to strengthen our understanding.
Referenced from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
*/

function makeFunc() {
    const name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();

/*
Once makeFunc() finishes executing, you might expect that the name variable would no longer be accessible. 
However, because the code still works as expected, this is obviously not the case in JavaScript.

The reason is that functions in JavaScript form closures. A closure is the combination of a function 
and the lexical environment within which that function was declared. This environment consists of any 
local variables that were in-scope at the time the closure was created. In this case, myFunc is a 
reference to the instance of the function displayName that is created when makeFunc is run. The instance of 
displayName maintains a reference to its lexical environment, within which the variable name exists. 
For this reason, when myFunc is invoked, the variable name remains available for use, 
and "Mozilla" is passed to console.log.
*/

// Here's a slightly more interesting example—a makeAdder function:
function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12

/*
In this example, we have defined a function makeAdder(x), that takes a single argument x, 
and returns a new function. The function it returns takes a single argument y, and returns the sum of x and y.

In essence, makeAdder is a function factory. It creates functions that can add a specific value 
to their argument. In the above example, the function factory creates two new functions—one that 
adds five to its argument, and one that adds 10.

add5 and add10 both form closures. They share the same function body definition, but store different lexical 
environments. In add5's lexical environment, x is 5, while in the lexical environment for add10, x is 10.
*/