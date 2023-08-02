/*
JavaScript strings are for storing and manipulating text.
Unlike many other programming languages, JavaScript does not define different types of numbers, 
like integers, short, long, floating-point etc.
*/

// INTEGER PRECISION --------------------------------------------------------------------------------------
// Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
let x = 999999999999999;   // x will be 999999999999999
let y = 9999999999999999;  // y will be 10000000000000000
// The maximum number of decimals is 17.

// FLOATING PRECISION -------------------------------------------------------------------------------------
// Floating point arithmetic is not always 100% accurate:
let a = 0.2 + 0.1;      // 0.30000000000000004

// To solve the problem above, it helps to multiply and divide:
let B = (0.2 * 10 + 0.1 * 10) / 10;     // 3


// NOT A NUMBER -------------------------------------------------------------------------------------------
// NaN is a JavaScript reserved word indicating that a number is not a legal number.
let t = 100 / "Apple";      // equals to NaN

typeof NaN;     // returns number

// INFINITY -----------------------------------------------------------------------------------------------
/*
Infinity (or -Infinity) is the value JavaScript will return if you calculate a number 
outside the largest possible number.
*/

// HEXADECIMAL --------------------------------------------------------------------------------------------
let z = 0xFF;
/*
By default, JavaScript displays numbers as base 10 decimals.
But you can use the toString() method to output numbers from base 2 to base 36.
*/
let myNumber = 32;
myNumber.toString(2);   // Binary (base 2): 100000

// BIGINT -------------------------------------------------------------------------------------------------
/*
JavaScript BigInt variables are used to store big integer values that are too big to be 
represented by a normal JavaScript Number.

In JavaScript, all numbers are stored in a 64-bit floating-point format (IEEE 754 standard).
With this standard, large integer cannot be exactly represented and will be rounded.
Because of this, JavaScript can only safely represent integers:
    Up to 9007199254740991 +(25^3-1)
and
    Down to -9007199254740991 -(25^3-1).
Integer values outside this range lose precision.
*/

// To create a BigInt, append n to the end of an integer or call BigInt():
let u = 1234567890123456789012345n;
let i = BigInt(1234567890123456789012345)


// NUMBER METHODS -----------------------------------------------------------------------------------------
/*
Method	            Description
toString()	        Returns a number as a string
toExponential()	    Returns a number written in exponential notation
toFixed()	        Returns a number written with a number of decimals
toPrecision()	    Returns a number written with a specified length
ValueOf()	        Returns a number as a number
*/

// NUMBER PROPERTIES --------------------------------------------------------------------------------------
/*
Property	        Description
EPSILON	            The difference between 1 and the smallest number > 1.
MAX_VALUE	        The largest number possible in JavaScript
MIN_VALUE	        The smallest number possible in JavaScript
MAX_SAFE_INTEGER	The maximum safe integer (253 - 1)
MIN_SAFE_INTEGER	The minimum safe integer -(253 - 1)
POSITIVE_INFINITY	Infinity (returned on overflow)
NEGATIVE_INFINITY	Negative infinity (returned on overflow)
NaN	                A "Not-a-Number" value
*/
