/*
There are different types of JavaScript operators:

Arithmetic Operators
Assignment Operators
Comparison Operators
String Operators
Logical Operators
Bitwise Operators
Ternary Operators
Type Operators
*/


// ARITHMETIC ---------------------------------------------------------------------------------------
/*
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Division Remainder)
++	Increment
--	Decrement
*/
let a = 3;
let t = (100 + 50) * a;

// ASSIGNMENT ---------------------------------------------------------------------------------------
/*
Operator            Example             Same As
=	                x = y	            x = y
+=	                x += y	            x = x + y
-=	                x -= y	            x = x - y
*=	                x *= y	            x = x * y
/=	                x /= y	            x = x / y
%=	                x %= y	            x = x % y
**=	                x **= y	            x = x ** y
*/
// Assign the value 5 to x
let x = 5;
// Assign the value 2 to y
let y = 2;
// Assign the value x + y to z:
let z = x + y;

// COMPARISON ---------------------------------------------------------------------------------------
/*
==	    equal to
===	    equal value and equal type
!=	    not equal
!==	    not equal value or not equal type
>	    greater than
<	    less than
>=	    greater than or equal to
<=	    less than or equal to
?	    ternary operator
*/


// STRING -------------------------------------------------------------------------------------------
// All the comparison operators above can also be used on strings:
let text1 = "A";
let text2 = "B";
let result = text1 < text2;     // true

// Note that strings are compared alphabetically:
let text3 = "20";
let text4 = "5";
let result2 = text3 < text4;    // true

// The + can also be used to add (concatenate) strings:
let text5 = "John";
let text6 = "Doe";
let text7 = text5 + " " + text6;    // equals to "John Doe"

// The += assignment operator can also be used to add (concatenate) strings:
let text8 = "What a very ";
text8 += "nice day";                // equals to "What a very nice day"

// LOGICAL OPERATORS --------------------------------------------------------------------------------
/*
&&	logical and
||	logical or
!	logical not
*/

// TYPE OPERATORS -----------------------------------------------------------------------------------
/*
typeof	    Returns the type of a variable
instanceof	Returns true if an object is an instance of an object type
*/

// BITWISE OPERATORS --------------------------------------------------------------------------------
/*
Operator	Description	            Example	    Same as	        Result	    Decimal
&	        AND                     5 & 1	    0101 & 0001	    0001	    1
|	        OR	                    5 | 1	    0101 | 0001	    0101	    5
~	        NOT	                    ~ 5	        ~0101	        1010	    10
^	        XOR	                    5 ^ 1	    0101 ^ 0001	    0100	    4
<<	        left shift	            5 << 1	    0101 << 1	    1010	    10
>>	        right shift	            5 >> 1	    0101 >> 1	    0010	    2
>>>	        unsigned right shift	5 >>> 1	    0101 >>> 1	    0010	    2
*/
