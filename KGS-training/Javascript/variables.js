/*
Variables are Containers for Storing Data.
JavaScript Variables can be declared in 4 ways:

Automatically -> Not a good practice, will throw an error in strict mode
Using var -> should only be used in code written for older browsers.
Using let
Using const -> cannot be changed after defined.

When to use var, let or const?

1. Always declare variables
2. Always use const if the value should not be changed
3. Always use const if the type should not be changed (Arrays and Objects)
4. Only use let if you can't use const
5. Only use var if you MUST support old browsers.

Note: Do not re-declare variables.
*/

// AUTOMATICALLY ------------------------------------------------------------------------------------

x = 5;
y = 6;
z = x + y; // z is equal to 11

// JS IDENTIFIERS -----------------------------------------------------------------------------------

/*
All JavaScript variables must be identified with unique names.

These unique names are called identifiers.

Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

The general rules for constructing names for variables (unique identifiers) are:

Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter.
Names can also begin with $ and _ (but we will not use it in this tutorial).
Names are case sensitive (y and Y are different variables).
Reserved words (like JavaScript keywords) cannot be used as names.
*/

let _lastName = "Yildiz"; // Use underscore at beginning of a var if it's private
let $tem = $(this); // Use dollar sign at beginning for jQuery objects.

// ONE STATEMENT, MANY VARIABLES --------------------------------------------------------------------

// You can declare many variables in one statement.
let person = "John Doe", carName = "Volvo", price = 200;
// or
let name = "John Doe",
car = "Volvo",
priceCar = 200;

// UNDEFINED ----------------------------------------------------------------------------------------
// A variable declared without a value will have the value undefined.
let randomVariable;  // equals to undefined.

