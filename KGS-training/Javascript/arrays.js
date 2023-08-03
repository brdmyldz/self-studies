
/*
Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
You can have variables of different types in the same Array.
In JavaScript, arrays always use numbered indexes.  
*/

// ARRAYS VS OBJECTS --------------------------------------------------------------------------------------
/*
In JavaScript, arrays use numbered indexes.  
In JavaScript, objects use named indexes.
*/

// HOW TO RECOGNIZE AN ARRAY ------------------------------------------------------------------------------
// Solution 1
Array.isArray(fruits);      // returns true

// Solution 2
const fruits = ["Banana", "Orange", "Apple"];
fruits instanceof Array;    // returns true

// SORT() -------------------------------------------------------------------------------------------------
// Sort alphabetically
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

// Sort Numerically
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
/*
If the result is negative, a is sorted before b.
If the result is positive, b is sorted before a.
If the result is 0, no changes are done with the sort order of the two values.
*/

// METHODS ------------------------------------------------------------------------------------------------
/*
The forEach() method calls a function (a callback function) once for each array element.

The map() method creates a new array by performing a function on each array element.
The map() method does not execute the function for array elements without values.
The map() method does not change the original array.

The filter() method creates a new array with array elements that pass a test.

The reduce() method runs a function on each array element to produce (reduce it to) a single value.
The reduce() method works from left-to-right in the array.
The reduce() method does not reduce the original array.

The every() method checks if all array values pass a test.

The some() method checks if some array values pass a test.
*/

// JS ARRAY SPREAD (...) ----------------------------------------------------------------------------------
// The ... operator expands an iterable (like an array) into more elements:
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4]; // Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,May


// CONST --------------------------------------------------------------------------------------------------
/*
It is become a common practice to declare arrays using const.
It does NOT define a constant array. It defines a constant reference to an array.
Because of this, we can still change the elements of a constant array.
*/
