/*
In JavaScript, almost "everything" is an object.
    Booleans can be objects (if defined with the new keyword)
    Numbers can be objects (if defined with the new keyword)
    Strings can be objects (if defined with the new keyword)
    Dates are always objects
    Maths are always objects
    Regular expressions are always objects
    Arrays are always objects
    Functions are always objects
    Objects are always objects

All JavaScript values, except primitives, are objects.
*/

// JS PRIMITIVES ------------------------------------------------------------------------------------------
/*
A primitive value is a value that has no properties or methods.
3.14 is a primitive value
A primitive data type is data that has a primitive value.
JavaScript defines 7 types of primitive data types:

Value	        Type	            Comment
"Hello"	        string	            "Hello" is always "Hello"
3.14	        number	            3.14 is always 3.14
true	        boolean	            true is always true
false	        boolean	            false is always false
null	        null (object)	    null is always null
undefined	    undefined	        undefined is always undefined
*/

// JS OBJECTS ARE MUTABLE ---------------------------------------------------------------------------------
/*
Note: It is a common practice to declare objects with the const keyword.

Objects are mutable: They are addressed by reference, not by value.
If person is an object, the following statement will not create a copy of person:
*/
const x = person;  // Will not create a copy of person.

/*
The object x is not a copy of person. It is person. Both x and person are the same object.
Any changes to x will also change person, because x and person are the same object.
*/