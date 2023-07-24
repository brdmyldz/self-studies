// With the apply() method, you can write a method that can be used on different objects.

// APPLY() METHOD -----------------------------------------------------------------------------------
// The apply() method is similar to the call() method (previous chapter).
const person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

const person1 = {
    firstName: "Mary",
    lastName: "Doe"
}

// This will return "Mary Doe":
person.fullName.apply(person1);

// DIFFERENCE BETWEEN CALL() AND APPLY() ------------------------------------------------------------
/*
The call() method takes arguments separately.
The apply() method takes arguments as an array.
The apply() method is very handy if you want to use an array instead of an argument list.
*/

const personNew = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const personNew1 = {
    firstName:"John",
    lastName: "Doe"
}

personNew.fullName.apply(personNew1, ["Oslo", "Norway"]);

// MAX METHOD ON ARRAYS -----------------------------------------------------------------------------
// You can find the largest number (in a list of numbers) using the Math.max() method:
Math.max(1,2,3);  // Will return 3
// Since JavaScript arrays do not have a max() method, you can apply the Math.max() method instead.
Math.max.apply(null, [1,2,3]); // Will also return 3