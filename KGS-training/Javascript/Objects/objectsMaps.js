/*
A Map holds key-value pairs where the keys can be any datatype.
A Map remembers the original insertion order of the keys.
A Map has a property that represents the size of the map.
*/

// MAP METHODS --------------------------------------------------------------------------------------------
/*
Method	        Description
new Map()	    Creates a new Map object
set()	        Sets the value for a key in a Map
get()	        Gets the value for a key in a Map
clear()	        Removes all the elements from a Map
delete()	    Removes a Map element specified by a key
has()	        Returns true if a key exists in a Map
forEach()	    Invokes a callback for each key/value pair in a Map
entries()	    Returns an iterator object with the [key, value] pairs in a Map
keys()	        Returns an iterator object with the keys in a Map
values()	    Returns an iterator object of the values in a Map

Property	    Description
size	        Returns the number of Map elements
*/

// HOW TO CREATE A MAP ------------------------------------------------------------------------------------
/*
You can create a JavaScript Map by:
    Passing an Array to new Map()
    Create a Map and use Map.set()
*/

// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);


// Create a Map
const fruits2 = new Map();
// Set Map Values
fruits2.set("apples", 500);
fruits2.set("bananas", 300);
fruits2.set("oranges", 200);


// MAPS ARE OBJECTS ---------------------------------------------------------------------------------------
typeof fruits;          // Returns object
fruits instanceof Map;  // Returns true

// JS OBJECTS VS MAPS -------------------------------------------------------------------------------------
/*
Object	                                Map
Not directly iterable	                Directly iterable
Do not have a size property	            Have a size property
Keys must be Strings (or Symbols)	    Keys can be any datatype
Keys are not well ordered	            Keys are ordered by insertion
Have default keys	                    Do not have default keys
*/

// FOREACH() ----------------------------------------------------------------------------------------------
// List all entries
let text = "";
fruits.forEach((value, key) => {
    text += key + ' = ' + value;
})