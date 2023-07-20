/*
JavaScript has 8 Datatypes
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

The object data type can contain:

1. An object
2. An array
3. A date
*/

// Note: When adding a number and a string, JavaScript will treat the number as a string.
let x = 16 + "Volvo";       // equals to "16Volvo"
let y = "Volvo" + 16;       // equals to "Volvo16"
let z = 16 + 4 + "Volvo";   // equals to "20Volvo"
let k = "Volvo" + 16 + 4;   // equals to "Volvo164"

// JS TYPES ARE DYNAMIC -----------------------------------------------------------------------------
let a;       // Now a is undefined
a = 5;       // Now a is a Number
a = "John";  // Now a is a String

// STRINGS ------------------------------------------------------------------------------------------
// Using double quotes:
let carName1 = "Volvo XC60";

// Using single quotes:
let carName2 = 'Volvo XC60';

// Single quote inside double quotes:
let answer1 = "It's alright";

// Single quotes inside double quotes:
let answer2 = "He is called 'Johnny'";

// Double quotes inside single quotes:
let answer3 = 'He is called "Johnny"';

// NUMBERS ------------------------------------------------------------------------------------------
// Note: Javascript numbers are always one type: double (64-bit floating point).

// With decimals:
let x1 = 34.00;

// Without decimals:
let x2 = 34;

// Extra large or extra small numbers can be written with scientific (exponential) notation:
let a1 = 123e5;    // 12300000
let a2 = 123e-5;   // 0.00123

// BIGINT -------------------------------------------------------------------------------------------
/*
JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values that 
are too big to be represented by a normal JavaScript Number.
*/
let xBig = BigInt("123456789012345678901234567890");

// BOOLEANS -----------------------------------------------------------------------------------------
// Booleans can only have two values: true or false.
let xB = 5;
let yB = 5;
let zB = 6;
(xB == yB)       // Returns true
(xB == zB)       // Returns false  

// ARRAYS -------------------------------------------------------------------------------------------
/*
JavaScript arrays are written with square brackets.
Array items are separated by commas.
Array indexes are zero-based, which means the first item is [0], second is [1], and so on.
The following code declares (creates) an array called cars, containing three items (car names)
*/
const cars = ["Saab", "Volvo", "BMW"];


// OBJECTS ------------------------------------------------------------------------------------------
/*
JavaScript objects are written with curly braces {}.
Object properties are written as name:value pairs, separated by commas.
*/
const person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};

// TYPEOF OPERATOR ----------------------------------------------------------------------------------
typeof ""             // Returns "string"
typeof "John"         // Returns "string"
typeof "John Doe"     // Returns "string"
typeof 0              // Returns "number"
typeof 314            // Returns "number"
typeof 3.14           // Returns "number"
typeof (3)            // Returns "number"
typeof (3 + 4)        // Returns "number"

// UNDEFINED ----------------------------------------------------------------------------------------
// In JavaScript, a variable without a value, has the value undefined. The type is also undefined.

let car;    // Value is undefined, type is undefined

/*
An empty value has nothing to do with undefined.
An empty string has both a legal value and a type.
*/
let carNew = "";    // The value is "", the typeof is "string"


