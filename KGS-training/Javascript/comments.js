/*
JavaScript comments can be used to explain JavaScript code, and to make it more readable.
JavaScript comments can also be used to prevent execution, when testing alternative code.
*/

// SINGLE LINE COMMENDS -----------------------------------------------------------------------------

// Change heading:
document.getElementById("myH").innerHTML = "My First Page";

let y = x + 2;  // Declare y, give it the value of x + 2

// MULTI-LINE COMMENTS ------------------------------------------------------------------------------

/*
The code below will change
the heading with id = "myH"
and the paragraph with id = "myP"
in my web page:
*/
document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";


// PREVENT EXECUTION --------------------------------------------------------------------------------

//document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";