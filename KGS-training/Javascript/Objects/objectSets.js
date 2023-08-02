/*
A JavaScript Set is a collection of unique values.
Each value can only occur once in a Set.
A Set can hold any value of any data type.
*/

// SET METHODS --------------------------------------------------------------------------------------------
/*
Method	            Description
new Set()	        Creates a new Set
add()	            Adds a new element to the Set
delete()	        Removes an element from a Set
has()	            Returns true if a value exists
clear()	            Removes all elements from a Set
forEach()	        Invokes a callback for each element
values()	        Returns an Iterator with all the values in a Set
keys()	            Same as values()
entries()	        Returns an Iterator with the [value,value] pairs from a Set

Property	        Description
size	            Returns the number elements in a SET
*/

// HOW TO CREATE A SET ------------------------------------------------------------------------------------
/*
You can create a JavaScript Set by:
    Passing an Array to new Set()
    Create a new Set and use add() to add values
    Create a new Set and use add() to add variables
*/

// Create a Set
const letters = new Set(["a","b","c"]);


// Create a Set
const letters2 = new Set();
// Add Values to the Set
letters2.add("a");
letters2.add("b");
letters2.add("c");


// Create Variables
const a = "a";
const b = "b";
const c = "c";
// Create a Set
const letters3 = new Set();
// Add Variables to the Set
letters3.add(a);
letters3.add(b);
letters3.add(c);


// If you add equal elements, only the first will be saved:
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
// letters.size is 3


// FOREACH() METHOD ---------------------------------------------------------------------------------------
// The forEach() method invokes a function for each Set element:
// Create a Set
const letters4 = new Set(["a","b","c"]);

// List all entries
let text = "";
letters4.forEach((value) => {
    text += value;
})

// VALUES() METHOD ----------------------------------------------------------------------------------------
// The values() method returns an Iterator object containing all the values in a Set.
const myIterator = letters.values();

// List all Values
let text2 = "";
for(const entry of myIterator) {
    text2 += entry;
}
// SETS ARE OBJECTS ---------------------------------------------------------------------------------------
typeof letters;      // Returns object
letters instanceof Set;  // Returns true
