/*
In JavaScript, regular expressions are often used with the two string methods: search() and replace().
The search() method uses an expression to search for a match, and returns the position of the match.
The replace() method returns a modified string where the pattern is replaced.

RegExp Syntax:
    /pattern/modifiers;
*/

// MODIFIERS ----------------------------------------------------------------------------------------------
/*
Modifiers can be used to perform case-insensitive more global searches:

Modifier	Description
i	        Perform case-insensitive matching	
g	        Perform a global match (find all matches rather than stopping after the first match)	
m	        Perform multiline matching
*/

// PATTERNS -----------------------------------------------------------------------------------------------
/*
Brackets are used to find a range of characters:

Expression	    Description
[abc]	        Find any of the characters between the brackets	
[0-9]	        Find any of the digits between the brackets	
(x|y)	        Find any of the alternatives separated with |


Metacharacters are characters with a special meaning:

Metacharacter	Description
\d	            Find a digit	
\s	            Find a whitespace character	
\b	            Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b	
\uxxxx	        Find the Unicode character specified by the hexadecimal number xxxx	


Quantifiers define quantities:

Quantifier	Description
n+	        Matches any string that contains at least one n
n*	        Matches any string that contains zero or more occurrences of n
n?	        Matches any string that contains zero or one occurrences of n
*/

// REGEXP METHODS -----------------------------------------------------------------------------------------
/*
The test() method is a RegExp expression method.
It searches a string for a pattern, and returns true or false, depending on the result.
The following example searches a string for the character "e":
*/
const pattern = /e/;
pattern.test("The best things in life are free!");      // return true


/*
The exec() method is a RegExp expression method.
It searches a string for a specified pattern, and returns the found text as an object.
If no match is found, it returns an empty (null) object.
The following example searches a string for the character "e":
*/
const obj = /e/.exec("The best things in life are free!");
console.log(obj[0]);
console.log(obj.index);
console.log(obj.input);
